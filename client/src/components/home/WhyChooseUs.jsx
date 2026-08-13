import {
  Map,
  Compass,
  Hotel,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function WhyChooseUs() {
  const features = [
    {
      icon: Map,
      title: "Explore Every District",
      description:
        "Discover all 31 districts of Karnataka and uncover temples, hills, waterfalls, heritage sites and hidden gems.",
      gradient: "from-blue-600 to-cyan-500",
      link: "/districts",
      linkText: "Explore Districts",
    },
    {
      icon: Compass,
      title: "179+ Destinations",
      description:
        "Find amazing places across Karnataka with detailed information, ratings, locations and travel details.",
      gradient: "from-purple-600 to-indigo-500",
      link: "/destinations",
      linkText: "Explore Places",
    },
    {
      icon: Sparkles,
      title: "Smart Trip Planning",
      description:
        "Use our intelligent trip planner to create a personalized itinerary based on your days, budget and interests.",
      gradient: "from-orange-500 to-pink-500",
      link: "/ai-trip-planner",
      linkText: "Plan My Trip",
    },
    {
      icon: Hotel,
      title: "Find Great Stays",
      description:
        "Discover hotels across Karnataka, compare ratings and prices, and choose a stay that fits your trip.",
      gradient: "from-emerald-600 to-green-500",
      link: "/hotels",
      linkText: "Find Hotels",
    },
    {
      icon: Heart,
      title: "Save Your Favorites",
      description:
        "Create your own collection of favorite destinations and hotels using the wishlist feature.",
      gradient: "from-rose-500 to-red-500",
      link: "/my-wishlist",
      linkText: "View Wishlist",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
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
          right-0
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

        <div className="text-center max-w-3xl mx-auto mb-14">

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
              text-sm
              font-bold
              mb-5
            "
          >
            <Sparkles size={17} />

            WHY TOURFRIENDLY?
          </div>

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
            Everything You Need
            <br />

            <span className="text-blue-600">
              For Your Journey.
            </span>
          </h2>

          <p
            className="
              text-gray-600
              text-lg
              md:text-xl
              mt-5
              leading-relaxed
            "
          >
            TourFriendly brings Karnataka's
            destinations, travel planning, hotels and
            personalized experiences together in one
            simple platform.
          </p>

        </div>

        {/* ===================================================
            FEATURE CARDS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  group
                  bg-white
                  rounded-3xl
                  border
                  border-gray-100
                  shadow-lg
                  hover:shadow-2xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  ${
                    index === 3
                      ? "lg:col-start-1 lg:ml-[50%]"
                      : ""
                  }
                `}
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className={`
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    ${feature.gradient}
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  <Icon size={30} />
                </div>

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div
                  className="
                    mt-6
                    text-sm
                    font-bold
                    text-gray-400
                  "
                >
                  0{index + 1}
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    mt-2
                    group-hover:text-blue-600
                    transition
                  "
                >
                  {feature.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    text-gray-600
                    mt-4
                    leading-relaxed
                  "
                >
                  {feature.description}
                </p>

                {/* =================================================
                    LINK
                ================================================= */}

                <Link
                  to={feature.link}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-blue-600
                    font-bold
                    group-hover:gap-3
                    transition-all
                  "
                >
                  {feature.linkText}

                  <ArrowRight size={18} />
                </Link>

              </div>
            );
          })}

        </div>

        {/* ===================================================
            TRUST STRIP
        =================================================== */}

        <div
          className="
            mt-16
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            rounded-3xl
            p-8
            md:p-10
            text-white
            shadow-xl
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
              text-center
            "
          >

            <div>
              <p className="text-3xl md:text-4xl font-extrabold">
                31
              </p>

              <p className="text-blue-100 mt-1">
                Karnataka Districts
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-extrabold">
                179+
              </p>

              <p className="text-blue-100 mt-1">
                Tourist Places
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-extrabold">
                95+
              </p>

              <p className="text-blue-100 mt-1">
                Hotels
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-extrabold">
                🤖
              </p>

              <p className="text-blue-100 mt-1">
                Smart Trip Planner
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;