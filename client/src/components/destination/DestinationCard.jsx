import { Link } from "react-router-dom";

import {
  MapPin,
  Star,
  Heart,
  Landmark,
  Trees,
  Waves,
  Mountain,
  Compass,
  Camera,
  Utensils,
  ShoppingBag,
  MapPinned,
  ArrowRight,
  Castle,
  Flower2,
} from "lucide-react";

import { addWishlist } from "../../api/wishlistApi";

// =====================================================
// CATEGORY DESIGN
// =====================================================

const categoryConfig = {
  // ---------------- TEMPLE ----------------

  Temple: {
    icon: Landmark,
    gradient: "from-purple-600 to-pink-500",
  },

  // ---------------- HERITAGE ----------------

  Heritage: {
    icon: Landmark,
    gradient: "from-amber-600 to-orange-500",
  },

  // ---------------- NATURE ----------------

  Nature: {
    icon: Trees,
    gradient: "from-green-700 to-emerald-500",
  },

  // ---------------- BEACH ----------------

  Beach: {
    icon: Waves,
    gradient: "from-blue-600 to-cyan-500",
  },

  // ---------------- WATERFALL ----------------

  Waterfall: {
    icon: Waves,
    gradient: "from-cyan-500 to-sky-400",
  },

  // ---------------- WILDLIFE ----------------

  Wildlife: {
    icon: Trees,
    gradient: "from-green-700 to-lime-500",
  },

  // ---------------- LAKE ----------------

  Lake: {
    icon: Waves,
    gradient: "from-sky-600 to-blue-400",
  },

  // ---------------- TREKKING ----------------

  Trekking: {
    icon: Mountain,
    gradient: "from-emerald-700 to-lime-500",
  },

  // ---------------- ADVENTURE ----------------

  Adventure: {
    icon: Compass,
    gradient: "from-red-600 to-orange-500",
  },

  // ---------------- FORT ----------------

  Fort: {
    icon: Castle,
    gradient: "from-amber-700 to-orange-500",
  },

  // ---------------- GARDEN ----------------

  Garden: {
    icon: Trees,
    gradient: "from-pink-500 to-rose-400",
  },

  // ---------------- MUSEUM ----------------

  Museum: {
    icon: Landmark,
    gradient: "from-gray-600 to-slate-400",
  },

  // ---------------- HILL STATION ----------------

  "Hill Station": {
    icon: Mountain,
    gradient: "from-orange-500 to-yellow-400",
  },

  // ---------------- PHOTOGRAPHY ----------------

  Photography: {
    icon: Camera,
    gradient: "from-indigo-600 to-purple-500",
  },

  // ---------------- SPIRITUAL ----------------

  Spiritual: {
    icon: Flower2,
    gradient: "from-yellow-600 to-orange-500",
  },

  // ---------------- FOOD ----------------

  Food: {
    icon: Utensils,
    gradient: "from-red-600 to-yellow-500",
  },

  // ---------------- MARKET ----------------

  Market: {
    icon: ShoppingBag,
    gradient: "from-pink-600 to-purple-500",
  },

  // ---------------- TOURIST ----------------

  Tourist: {
    icon: MapPinned,
    gradient: "from-blue-600 to-indigo-500",
  },
};

// =====================================================
// COMPONENT
// =====================================================

function DestinationCard({ destination }) {

  // ===================================================
  // WISHLIST
  // ===================================================

  const saveWishlist = async (e) => {

    e.preventDefault();
    e.stopPropagation();

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      return;
    }

    try {

      await addWishlist({
        user: user._id || user.id,
        destination: destination._id,
      });

      alert("Added to Wishlist");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Already Added to Wishlist"
      );

    }
  };

  // ===================================================
  // CATEGORY
  // ===================================================

  const category =
    destination.category || "Tourist";

  const config =
    categoryConfig[category] || {
      icon: MapPinned,
      gradient: "from-blue-600 to-indigo-500",
    };

  const CategoryIcon = config.icon;

  // ===================================================
  // ENTRY FEE
  // ===================================================

  const entryFee =
    Number(destination.entryFee || 0);

  // ===================================================
  // UI
  // ===================================================

  return (

    <Link
      to={`/destination/${destination._id}`}
      className="block"
    >

      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-lg
          hover:shadow-2xl
          transition-all
          duration-300
          hover:-translate-y-2
          border
          border-gray-100
        "
      >

        {/* =================================================
            CATEGORY BANNER
        ================================================= */}

        <div
          className={`
            relative
            h-72
            bg-gradient-to-br
            ${config.gradient}
            flex
            flex-col
            justify-center
            items-center
            text-white
            overflow-hidden
          `}
        >

          {/* Decorative Background Circle */}

          <div
            className="
              absolute
              -top-16
              -right-16
              w-40
              h-40
              bg-white/10
              rounded-full
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-16
              w-48
              h-48
              bg-white/10
              rounded-full
            "
          />

          <div
            className="
              absolute
              top-1/2
              -left-10
              w-20
              h-20
              bg-white/5
              rounded-full
            "
          />

          {/* =================================================
              WISHLIST
          ================================================= */}

          <button
            onClick={saveWishlist}
            aria-label="Add to wishlist"
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
              z-20
            "
          >

            <Heart
              className="text-red-500"
              size={22}
            />

          </button>

          {/* =================================================
              CATEGORY ICON
          ================================================= */}

          <div
            className="
              relative
              z-10
              mb-4
              p-5
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
              border
              border-white/20
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >

            <CategoryIcon
              size={68}
              strokeWidth={1.6}
            />

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            className="
              relative
              z-10
              text-3xl
              font-bold
              text-center
              px-5
            "
          >
            {destination.title}
          </h2>

          {/* =================================================
              CATEGORY NAME
          ================================================= */}

          <p
            className="
              relative
              z-10
              mt-2
              text-lg
              font-medium
              opacity-90
            "
          >
            {category}
          </p>

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-6">

          {/* =================================================
              LOCATION
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-500
              mb-4
            "
          >

            <MapPin
              size={18}
              className="text-blue-600"
            />

            <span>
              {destination.location}

              {destination.state && (
                <>
                  , {destination.state}
                </>
              )}
            </span>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              text-gray-600
              line-clamp-3
              leading-relaxed
            "
          >
            {destination.description}
          </p>

          {/* =================================================
              RATING + ENTRY FEE
          ================================================= */}

          <div
            className="
              flex
              justify-between
              items-center
              mt-6
            "
          >

            {/* RATING */}

            <div
              className="
                flex
                items-center
                gap-2
                text-yellow-500
                font-bold
              "
            >

              <Star
                size={20}
                fill="currentColor"
              />

              <span>
                {destination.rating || "4.5"}
              </span>

            </div>

            {/* ENTRY FEE */}

            {entryFee === 0 ? (

              <span
                className="
                  bg-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                Free Entry
              </span>

            ) : (

              <span
                className="
                  bg-blue-100
                  text-blue-700
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                ₹{entryFee}
              </span>

            )}

          </div>

          {/* =================================================
              EXPLORE BUTTON
          ================================================= */}

          <div
            className="
              w-full
              mt-6
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              py-3
              rounded-xl
              font-semibold
              text-center
              group-hover:from-blue-700
              group-hover:to-indigo-700
              transition
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <span>
              Explore Destination
            </span>

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </div>

        </div>

      </div>

    </Link>
  );
}

export default DestinationCard;