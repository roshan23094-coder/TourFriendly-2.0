import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";

import { getAllDestinations } from "../../api/destinationApi";
import DestinationCard from "../destination/DestinationCard";

function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================================
  // FETCH DESTINATIONS
  // =========================================================

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const data = await getAllDestinations();

      if (data?.destinations) {
        // Show only 6 destinations on homepage
        setDestinations(
          data.destinations.slice(0, 6)
        );
      }
    } catch (error) {
      console.error(
        "Error fetching destinations:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-5xl mb-4">
            🗺️
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Discovering amazing places...
          </h2>

          <p className="text-gray-500 mt-2">
            Loading Karnataka's top destinations.
          </p>

        </div>

      </section>
    );
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          right-0
          w-80
          h-80
          bg-blue-100
          rounded-full
          blur-3xl
          opacity-40
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-96
          h-96
          bg-purple-100
          rounded-full
          blur-3xl
          opacity-40
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:justify-between
            md:items-end
            gap-6
            mb-12
          "
        >

          <div className="max-w-3xl">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-indigo-100
                text-indigo-700
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
                mb-5
              "
            >
              <Sparkles size={17} />

              HANDPICKED FOR YOU
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              Popular Places
              <br />

              <span className="text-blue-600">
                You Can't Miss.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                text-gray-600
                text-lg
                md:text-xl
                mt-5
                max-w-2xl
                leading-relaxed
              "
            >
              Discover some of Karnataka's most
              exciting places to visit — from
              magnificent temples and heritage sites
              to peaceful nature escapes.
            </p>

          </div>

          {/* View All */}

          <Link
            to="/destinations"
            className="
              group
              flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-xl
              font-bold
              shadow-lg
              hover:shadow-xl
              transition
              whitespace-nowrap
            "
          >
            View All Destinations

            <ArrowRight
              size={19}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </Link>

        </div>

        {/* ===================================================
            DESTINATION GRID
        =================================================== */}

        {destinations.length === 0 ? (

          <div
            className="
              bg-gray-50
              rounded-3xl
              p-12
              text-center
            "
          >

            <div className="text-5xl mb-4">
              📍
            </div>

            <h3 className="text-2xl font-bold">
              No destinations available
            </h3>

            <p className="text-gray-500 mt-2">
              Please check again later.
            </p>

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

            {destinations.map(
              (destination) => (
                <DestinationCard
                  key={destination._id}
                  destination={destination}
                />
              )
            )}

          </div>

        )}

        {/* ===================================================
            EXPLORE ALL CTA
        =================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            text-center
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-500
              mb-4
            "
          >
            <Compass size={19} />

            <span>
              179+ destinations waiting to be explored
            </span>
          </div>

          <Link
            to="/destinations"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-blue-600
              hover:text-blue-800
              text-lg
              font-bold
              transition
            "
          >
            Explore All Destinations

            <ArrowRight
              size={21}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default PopularDestinations;