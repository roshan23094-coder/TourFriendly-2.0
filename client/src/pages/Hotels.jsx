import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";

import api from "../api/api";
import { addWishlist } from "../api/wishlistApi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// =========================================================
// HOTEL VISUAL CONFIG
// =========================================================

const hotelVisuals = [
  {
    icon: "🏨",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    icon: "🛏️",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: "🌴",
    gradient: "from-emerald-600 to-green-500",
  },
  {
    icon: "🏡",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: "🌿",
    gradient: "from-green-700 to-lime-500",
  },
];

// =========================================================
// HOTEL PAGE
// =========================================================

function Hotels() {
  const [hotels, setHotels] = useState([]);

  // =======================================================
  // LOAD HOTELS
  // =======================================================

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await api.get("/hotels");

      setHotels(
        res.data.hotels ||
        res.data.data ||
        []
      );
    } catch (err) {
      console.log(err);
    }
  };

  // =======================================================
  // WISHLIST
  // =======================================================

  const saveWishlist = async (e, hotelId) => {
    e.preventDefault();
    e.stopPropagation();

    const user =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      await addWishlist({
        user: user._id || user.id,
        hotel: hotelId,
      });

      alert("❤️ Added to Wishlist");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Already Added"
      );

    }
  };

  // =======================================================
  // PAGE
  // =======================================================

  return (
    <>
      <Navbar />

      <div
        className="
          pt-32
          pb-16
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* =================================================
            TITLE
        ================================================= */}

        <h1
          className="
            text-5xl
            font-bold
            text-center
            mb-4
          "
        >
          🏨 Hotels
        </h1>

        <p
          className="
            text-center
            text-gray-500
            text-lg
            mb-12
          "
        >
          Find comfortable stays across Karnataka
        </p>

        {/* =================================================
            HOTEL GRID
        ================================================= */}

        {hotels.length === 0 ? (

          <div
            className="
              text-center
              py-20
              text-xl
              text-gray-500
            "
          >
            No hotels found.
          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {hotels.map(
              (hotel, index) => {

                const visual =
                  hotelVisuals[
                    index %
                    hotelVisuals.length
                  ];

                return (

                  <Link
                    key={hotel._id}
                    to={`/hotel/${hotel._id}`}
                  >

                    <div
                      className="
                        bg-white
                        rounded-3xl
                        shadow-lg
                        overflow-hidden
                        hover:shadow-2xl
                        hover:-translate-y-2
                        transition
                        duration-300
                      "
                    >

                      {/* =================================================
                          HOTEL VISUAL
                      ================================================= */}

                      <div
                        className={`
                          relative
                          h-64
                          bg-gradient-to-br
                          ${visual.gradient}
                          flex
                          items-center
                          justify-center
                          overflow-hidden
                        `}
                      >

                        {/* Decorative circle */}

                        <div
                          className="
                            absolute
                            -top-20
                            -right-20
                            w-48
                            h-48
                            bg-white/10
                            rounded-full
                          "
                        />

                        <div
                          className="
                            absolute
                            -bottom-20
                            -left-20
                            w-52
                            h-52
                            bg-white/10
                            rounded-full
                          "
                        />

                        {/* Wishlist */}

                        <button
                          onClick={(e) =>
                            saveWishlist(
                              e,
                              hotel._id
                            )
                          }
                          className="
                            absolute
                            top-4
                            right-4
                            bg-white
                            p-3
                            rounded-full
                            shadow-lg
                            hover:scale-110
                            transition
                            z-10
                          "
                        >
                          <Heart
                            className="text-red-500"
                            size={22}
                          />
                        </button>

                        {/* Hotel Icon */}

                        <div
                          className="
                            relative
                            z-10
                            text-8xl
                            drop-shadow-lg
                          "
                        >
                          {visual.icon}
                        </div>

                      </div>

                      {/* =================================================
                          HOTEL INFORMATION
                      ================================================= */}

                      <div className="p-6">

                        <div
                          className="
                            flex
                            justify-between
                            items-start
                            gap-3
                          "
                        >

                          <h2
                            className="
                              text-2xl
                              font-bold
                            "
                          >
                            {hotel.name}
                          </h2>

                          <div
                            className="
                              flex
                              items-center
                              gap-1
                              text-yellow-500
                              font-bold
                              whitespace-nowrap
                            "
                          >
                            <Star
                              size={18}
                              fill="gold"
                            />

                            {hotel.rating ||
                              "N/A"}
                          </div>

                        </div>

                        {/* Location */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-gray-500
                            mt-3
                          "
                        >

                          <MapPin size={18} />

                          <span>
                            {hotel.location}
                            {hotel.state
                              ? `, ${hotel.state}`
                              : ""}
                          </span>

                        </div>

                        {/* Description */}

                        <p
                          className="
                            mt-4
                            text-gray-600
                            line-clamp-3
                          "
                        >
                          {hotel.description}
                        </p>

                        {/* Price */}

                        <div
                          className="
                            flex
                            justify-between
                            items-center
                            mt-6
                          "
                        >

                          <span
                            className="
                              text-blue-700
                              font-bold
                              text-lg
                            "
                          >
                            ₹
                            {Number(
                              hotel.pricePerNight ||
                              0
                            ).toLocaleString()}
                            /night
                          </span>

                        </div>

                        {/* Button */}

                        <div
                          className="
                            mt-6
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            py-3
                            rounded-xl
                            text-center
                            font-semibold
                            transition
                          "
                        >
                          View Details →
                        </div>

                      </div>

                    </div>

                  </Link>

                );
              }
            )}

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default Hotels;