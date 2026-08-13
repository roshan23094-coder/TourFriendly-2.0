import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getHotelById } from "../api/hotelApi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ReviewSection from "../components/hotel/ReviewSection";
import LocationMap from "../components/maps/LocationMap";

function HotelDetails() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    try {
      const data = await getHotelById(id);

      if (data.success) {
        setHotel(data.hotel);
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

  if (!hotel) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-5xl font-bold">
            Hotel Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}

      <div className="relative">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute bottom-10 left-10 text-white">

          <h1 className="text-6xl font-bold">
            {hotel.name}
          </h1>

          <p className="text-2xl mt-3">
            📍 {hotel.location}, {hotel.state}
          </p>

          <div className="flex gap-10 mt-6 text-xl">

            <span>
              ⭐ {hotel.rating}
            </span>

            <span>
              ₹ {hotel.pricePerNight}/night
            </span>

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* About */}

        <section>

          <h2 className="text-4xl font-bold mb-6">
            About Hotel
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            {hotel.description}
          </p>

        </section>

        {/* Amenities */}

        {hotel.amenities?.length > 0 && (

          <section className="mt-16">

            <h2 className="text-4xl font-bold mb-8">
              Hotel Amenities
            </h2>

            <div className="flex flex-wrap gap-4">

              {hotel.amenities.map((item, index) => (

                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold"
                >
                  {item}
                </span>

              ))}

            </div>

          </section>

        )}

        {/* Location */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold mb-8">
            📍 Hotel Location
          </h2>

          <LocationMap
            latitude={hotel.latitude}
            longitude={hotel.longitude}
            title={hotel.name}
          />

        </section>

        {/* Booking */}

        <section className="mt-20 bg-green-50 rounded-3xl p-10 shadow-lg">

          <h2 className="text-4xl font-bold mb-4">
            Book Your Stay
          </h2>

          <p className="text-xl text-gray-700">
            Price Per Night
          </p>

          <h3 className="text-5xl font-bold text-blue-700 mt-3">
            ₹ {hotel.pricePerNight}
          </h3>

          <Link
            to={`/booking/${hotel._id}`}
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition"
          >
            Book Now
          </Link>

        </section>

        {/* Reviews */}

        <section className="mt-20">

          <ReviewSection hotelId={hotel._id} />

        </section>

      </div>

      <Footer />

    </>
  );
}

export default HotelDetails;