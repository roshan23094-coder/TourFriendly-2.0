import { useEffect, useState } from "react";
import api from "../api/api";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DestinationCard from "../components/destination/DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  useEffect(() => {
    const searchText = search.toLowerCase().trim();

    const result = destinations.filter((item) =>
      item.title?.toLowerCase().includes(searchText) ||
      item.location?.toLowerCase().includes(searchText) ||
      item.state?.toLowerCase().includes(searchText)
    );

    setFiltered(result);
  }, [search, destinations]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);

      const res = await api.get("/destinations");

      // Backend returns: { success, count, data }
      const destinationData =
        res.data.data ||
        res.data.destinations ||
        [];

      setDestinations(destinationData);
      setFiltered(destinationData);

      console.log(
        "✅ Destinations loaded:",
        destinationData.length
      );
    } catch (error) {
      console.error(
        "❌ Failed to load destinations:",
        error
      );

      setDestinations([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-16 max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold">
            🌍 Explore Destinations
          </h1>

          <p className="text-gray-500 text-lg mt-4">
            Discover amazing places across Karnataka
          </p>

        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search destination, location or state..."
          className="w-full border border-gray-300 rounded-xl p-4 mb-10 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Loading */}
        {loading ? (

          <div className="text-center py-20">

            <div className="text-5xl mb-4">
              🌍
            </div>

            <h2 className="text-2xl font-bold">
              Loading Destinations...
            </h2>

          </div>

        ) : filtered.length === 0 ? (

          <div className="bg-gray-100 rounded-2xl p-12 text-center">

            <div className="text-6xl mb-4">
              😕
            </div>

            <h2 className="text-2xl font-bold">
              No Destinations Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another destination.
            </p>

          </div>

        ) : (

          <>
            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Tourist Places
              </h2>

              <span className="text-gray-500">
                {filtered.length} Places
              </span>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filtered.map((destination) => (

                <DestinationCard
                  key={destination._id}
                  destination={destination}
                />

              ))}

            </div>
          </>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Destinations;