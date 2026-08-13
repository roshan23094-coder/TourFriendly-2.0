import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { getDistrictById } from "../api/districtApi";

import DistrictHero from "../components/district/DistrictHero";
import DistrictStats from "../components/district/DistrictStats";
import DistrictDestinations from "../components/district/DistrictDestinations";
import DistrictHotels from "../components/district/DistrictHotels";
import DistrictFoods from "../components/district/DistrictFoods";
import DistrictMap from "../components/district/DistrictMap";

function DistrictDetails() {
  const { id } = useParams();

  const [district, setDistrict] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDistrict();
  }, [id]);

  const fetchDistrict = async () => {
    try {
      const data = await getDistrictById(id);

      if (data.success) {
        setDistrict(data.district);
        setDestinations(data.destinations || []);
        setHotels(data.hotels || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            Loading...
          </h1>
        </div>
      </>
    );
  }

  if (!district) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-5xl font-bold">
            District Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <DistrictHero
        district={district}
        destinations={destinations}
        hotels={hotels}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Statistics */}
        <DistrictStats district={district} />

        {/* About */}
        <section className="mt-16">

          <h2 className="text-4xl font-bold mb-6">
            About {district.name}
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            {district.description}
          </p>

        </section>

        {/* Famous For */}
        <section className="mt-16">

          <h2 className="text-4xl font-bold mb-8">
            Famous For
          </h2>

          <div className="flex flex-wrap gap-4">

            {district.famousFor?.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold"
              >
                {item}
              </span>
            ))}

          </div>

        </section>

        {/* Tourist Places */}
        <DistrictDestinations
          destinations={destinations}
        />

        {/* Hotels */}
        <DistrictHotels
          hotels={hotels}
        />

        {/* Famous Food */}
        <DistrictFoods
          district={district}
        />

        {/* Google Map */}
        <DistrictMap
          district={district}
        />

      </div>

      <Footer />
    </>
  );
}

export default DistrictDetails;