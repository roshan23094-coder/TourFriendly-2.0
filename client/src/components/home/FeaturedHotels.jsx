import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllHotels } from "../../api/hotelApi";

function FeaturedHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const data = await getAllHotels();

      if (data.success) {
        setHotels(data.hotels);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold">
          Loading Hotels...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Featured Hotels
        </h2>

        <p className="text-center text-gray-600 mb-14 text-lg">
          Stay at the best hotels during your journey.
        </p>

        {hotels.length === 0 ? (
          <h2 className="text-center text-xl text-red-500">
            No Hotels Found
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {hotels.map((hotel) => (
              <Link
                key={hotel._id}
                to={`/hotel/${hotel._id}`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

                  <img
                    src={
                      hotel.image ||
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                    }
                    alt={hotel.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">
                      {hotel.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      📍 {hotel.location}, {hotel.state}
                    </p>

                    <p className="text-gray-600 mt-3 line-clamp-3">
                      {hotel.description}
                    </p>

                    <div className="flex justify-between mt-5">

                      <span className="text-yellow-500 font-bold">
                        ⭐ {hotel.rating}
                      </span>

                      <span className="text-blue-700 font-bold">
                        ₹{hotel.pricePerNight}/night
                      </span>

                    </div>

                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                      View Details
                    </button>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default FeaturedHotels;