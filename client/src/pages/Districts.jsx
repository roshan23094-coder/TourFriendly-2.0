import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DistrictCard from "../components/district/DistrictCard";

import { getAllDistricts } from "../api/districtApi";

function Districts() {
  const [districts, setDistricts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDistricts();
  }, []);

  useEffect(() => {
    const result = districts.filter((district) =>
      district.name.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search, districts]);

  const loadDistricts = async () => {
    try {
      const response = await getAllDistricts();

      console.log("========== API RESPONSE ==========");
      console.log(response);

      // Backend returns:
      // {
      //   success: true,
      //   count: 31,
      //   data: [...]
      // }

      const districtList = response.data || [];

      setDistricts(districtList);
      setFiltered(districtList);

    } catch (err) {
      console.error("District Error:", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-10">
          Explore Karnataka Districts
        </h1>

        <input
          type="text"
          placeholder="Search District..."
          className="w-full border p-4 rounded-xl mb-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2 className="text-xl font-semibold mb-8">
          Total Districts : {filtered.length}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.length > 0 ? (
            filtered.map((district) => (
              <DistrictCard
                key={district._id}
                district={district}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <h2 className="text-3xl font-bold text-red-500">
                No Districts Found
              </h2>
            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Districts;