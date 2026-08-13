import { Link } from "react-router-dom";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import heroImage from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div className="absolute top-32 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

      <div className="absolute bottom-32 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 min-h-screen flex items-center justify-center">

        <div className="max-w-6xl mx-auto px-6 text-center text-white pt-20">

          {/* Small Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              text-sm
              md:text-base
              font-medium
              mb-7
            "
          >
            <Sparkles
              size={18}
              className="text-yellow-300"
            />

            Discover Karnataka with TourFriendly
          </div>

          {/* Main Heading */}

          <h1
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-extrabold
              leading-[1.05]
              tracking-tight
            "
          >
            Discover Karnataka.
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-green-300">
              Experience It Your Way.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              text-lg
              md:text-xl
              lg:text-2xl
              max-w-3xl
              mx-auto
              text-gray-200
              leading-relaxed
            "
          >
            Explore Karnataka's incredible destinations,
            discover beautiful places, find comfortable
            stays and create unforgettable journeys.
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
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-full
                text-lg
                font-bold
                shadow-2xl
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
              <Sparkles
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
              QUICK STATS
          ================================================= */}

          <div
            className="
              mt-16
              grid
              grid-cols-2
              md:grid-cols-4
              max-w-4xl
              mx-auto
              bg-black/25
              backdrop-blur-md
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >

            {/* Districts */}

            <div
              className="
                p-5
                border-b
                md:border-b-0
                md:border-r
                border-white/10
              "
            >
              <p className="text-2xl md:text-3xl font-extrabold">
                31
              </p>

              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Districts
              </p>
            </div>

            {/* Destinations */}

            <div
              className="
                p-5
                border-b
                md:border-b-0
                md:border-r
                border-white/10
              "
            >
              <p className="text-2xl md:text-3xl font-extrabold">
                179+
              </p>

              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Destinations
              </p>
            </div>

            {/* Hotels */}

            <div
              className="
                p-5
                border-r
                border-white/10
              "
            >
              <p className="text-2xl md:text-3xl font-extrabold">
                95+
              </p>

              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Hotels
              </p>
            </div>

            {/* Rating */}

            <div className="p-5">
              <p className="text-2xl md:text-3xl font-extrabold">
                ⭐ 4.5+
              </p>

              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Rated Experiences
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          text-white/70
        "
      >
        <span className="text-xs mb-1">
          Explore
        </span>

        <ChevronDown
          size={22}
          className="animate-bounce"
        />
      </div>

    </section>
  );
}

export default Hero;