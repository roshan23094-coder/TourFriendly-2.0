import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Compass,
} from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800" />

      {/* Decorative circles */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          bg-white/10
          blur-2xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-20
          w-[450px]
          h-[450px]
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            border
            border-white/20
            backdrop-blur-md
            px-5
            py-2
            rounded-full
            text-sm
            font-bold
            mb-7
          "
        >
          <Sparkles
            size={17}
            className="text-yellow-300"
          />

          YOUR NEXT ADVENTURE AWAITS
        </div>

        {/* Heading */}

        <h2
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            leading-tight
          "
        >
          Your Karnataka
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-cyan-200">
            Adventure Starts Here.
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            max-w-3xl
            mx-auto
            mt-6
            text-lg
            md:text-xl
            text-blue-100
            leading-relaxed
          "
        >
          Discover incredible destinations, find
          comfortable stays and create a trip you'll
          remember. Karnataka is waiting for you.
        </p>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
            mt-10
          "
        >

          {/* Explore */}

          <Link
            to="/destinations"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              bg-white
              text-blue-700
              hover:bg-gray-100
              px-8
              py-4
              rounded-full
              text-lg
              font-bold
              shadow-xl
              hover:scale-105
              transition
              duration-300
              min-w-[220px]
            "
          >
            <MapPin size={21} />

            Explore Destinations

            <ArrowRight
              size={20}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </Link>

          {/* AI Planner */}

          <Link
            to="/ai-trip-planner"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              bg-white/10
              hover:bg-white/20
              border
              border-white/30
              backdrop-blur-md
              text-white
              px-8
              py-4
              rounded-full
              text-lg
              font-bold
              shadow-xl
              hover:scale-105
              transition
              duration-300
              min-w-[220px]
            "
          >
            <Compass
              size={21}
              className="text-yellow-300"
            />

            Plan My Trip

            <ArrowRight
              size={20}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </Link>

        </div>

        {/* =================================================
            SMALL TRUST MESSAGE
        ================================================= */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            items-center
            gap-x-6
            gap-y-3
            text-blue-100
            text-sm
          "
        >

          <span>
            ✓ 31 Districts
          </span>

          <span>
            ✓ 179+ Destinations
          </span>

          <span>
            ✓ 95+ Hotels
          </span>

          <span>
            ✓ Smart Trip Planning
          </span>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;