import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Star,
  Compass,
} from "lucide-react";

import { getAllDistricts } from "../../api/districtApi";

// =========================================================
// DISTRICT VISUALS
// =========================================================

const districtVisuals = [
  {
    icon: "🏛️",
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    icon: "🌿",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    icon: "⛰️",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: "🌊",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: "🏰",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    icon: "🌴",
    gradient: "from-emerald-600 to-teal-500",
  },
];

function HomeDistricts() {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  // =======================================================
  // LOAD DISTRICTS
  // =======================================================

  useEffect(() => {
    loadDistricts();
  }, []);

  const loadDistricts = async () => {
    try {
      setLoading(true);

      const data = await getAllDistricts();

      if (data.success) {
        // Show first 6 districts on home page
        setDistricts(data.districts.slice(0, 6));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-5xl mb-4">
            🗺️
          </div>

          <h3 className="text-2xl font-bold text-gray-800">
            Discovering Karnataka...
          </h3>

          <p className="text-gray-500 mt-2">
            Loading beautiful districts for you.
          </p>

        </div>
      </section>
    );
  }

  // =======================================================
  // PAGE
  // =======================================================

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">

      {/* ===================================================
          BACKGROUND DECORATION
      =================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-72
          h-72
          bg-blue-100
          rounded-full
          blur-3xl
          opacity-50
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-purple-100
          rounded-full
          blur-3xl
          opacity-50
        "
      />

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* =================================================
            HEADER
        ================================================= */}

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

            {/* Small label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
                font-semibold
                text-sm
                mb-5
              "
            >
              <Compass size={17} />

              EXPLORE KARNATAKA
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
              Discover
              <span className="text-blue-600">
                {" "}Karnataka
              </span>
              <br />

              One District at a Time.
            </h2>

            {/* Description */}

            <p
              className="
                text-gray-600
                mt-5
                text-lg
                md:text-xl
                max-w-2xl
                leading-relaxed
              "
            >
              From ancient temples and royal heritage
              to misty hills, waterfalls and peaceful
              getaways — explore the diversity of
              Karnataka.
            </p>

          </div>

          {/* View All */}

          <Link
            to="/districts"
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
            View All Districts

            <ArrowRight
              size={19}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </Link>

        </div>

        {/* =================================================
            DISTRICT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >

          {districts.map((district, index) => {

            const visual =
              districtVisuals[
                index % districtVisuals.length
              ];

            return (
              <Link
                key={district._id}
                to={`/district/${district._id}`}
                className="group"
              >

                <div
                  className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    border
                    border-gray-100
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >

                  {/* =======================================
                      VISUAL BANNER
                  ======================================= */}

                  <div
                    className={`
                      relative
                      h-60
                      bg-gradient-to-br
                      ${visual.gradient}
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                    `}
                  >

                    {/* Decorative circles */}

                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-48
                        h-48
                        rounded-full
                        bg-white/10
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-20
                        -left-16
                        w-52
                        h-52
                        rounded-full
                        bg-white/10
                      "
                    />

                    {/* Large icon */}

                    <div
                      className="
                        relative
                        z-10
                        text-8xl
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                    >
                      {visual.icon}
                    </div>

                    {/* District number */}

                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        bg-black/20
                        backdrop-blur-md
                        text-white
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-bold
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* Rating */}

                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        flex
                        items-center
                        gap-1
                        bg-white/95
                        text-gray-800
                        px-3
                        py-1.5
                        rounded-full
                        text-sm
                        font-bold
                        shadow
                      "
                    >
                      <Star
                        size={15}
                        fill="gold"
                        className="text-yellow-500"
                      />

                      {district.rating || "4.5"}
                    </div>

                  </div>

                  {/* =======================================
                      CONTENT
                  ======================================= */}

                  <div className="p-6">

                    {/* Name */}

                    <h3
                      className="
                        text-2xl
                        font-extrabold
                        text-gray-900
                        group-hover:text-blue-600
                        transition
                      "
                    >
                      {district.name}
                    </h3>

                    {/* Location */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-gray-500
                        mt-2
                      "
                    >
                      <MapPin size={17} />

                      <span>
                        {district.state ||
                          "Karnataka"}
                      </span>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        text-gray-600
                        mt-4
                        line-clamp-3
                        leading-relaxed
                      "
                    >
                      {district.description}
                    </p>

                    {/* Bottom */}

                    <div
                      className="
                        flex
                        justify-between
                        items-center
                        mt-6
                        pt-5
                        border-t
                        border-gray-100
                      "
                    >

                      <span
                        className="
                          text-sm
                          text-gray-500
                          font-medium
                        "
                      >
                        Explore district
                      </span>

                      <span
                        className="
                          flex
                          items-center
                          gap-1
                          text-blue-600
                          font-bold
                          group-hover:gap-2
                          transition-all
                        "
                      >
                        Explore

                        <ArrowRight
                          size={18}
                        />
                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div
          className="
            mt-12
            text-center
          "
        >

          <p className="text-gray-500 mb-4">
            Want to explore all 31 districts?
          </p>

          <Link
            to="/districts"
            className="
              inline-flex
              items-center
              gap-2
              text-blue-600
              font-bold
              text-lg
              hover:text-blue-800
              transition
            "
          >
            Explore All Karnataka Districts

            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default HomeDistricts;