import { Link } from "react-router-dom";
import {
  FaGlobeAsia,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-1">

            <Link
              to="/"
              className="inline-flex items-center gap-3 text-3xl font-extrabold"
            >
              <FaGlobeAsia className="text-green-400" />

              TourFriendly
            </Link>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Discover Karnataka like never before.
              Explore destinations, find great stays
              and create unforgettable journeys with
              TourFriendly.
            </p>

            {/* Social */}

            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/districts"
                className="text-gray-400 hover:text-white transition"
              >
                Karnataka Districts
              </Link>

              <Link
                to="/destinations"
                className="text-gray-400 hover:text-white transition"
              >
                Tourist Places
              </Link>

              <Link
                to="/hotels"
                className="text-gray-400 hover:text-white transition"
              >
                Hotels
              </Link>

              <Link
                to="/ai-trip-planner"
                className="text-gray-400 hover:text-white transition"
              >
                AI Trip Planner
              </Link>

              <Link
                to="/search"
                className="text-gray-400 hover:text-white transition"
              >
                Search
              </Link>

            </div>

          </div>

          {/* =================================================
              ACCOUNT
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              Your TourFriendly
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/login"
                className="text-gray-400 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-gray-400 hover:text-white transition"
              >
                Create Account
              </Link>

              <Link
                to="/my-bookings"
                className="text-gray-400 hover:text-white transition"
              >
                My Bookings
              </Link>

              <Link
                to="/my-wishlist"
                className="text-gray-400 hover:text-white transition"
              >
                My Wishlist
              </Link>

            </div>

          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              TourFriendly
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </Link>

              <Link
                to="/ai-trip-planner"
                className="text-gray-400 hover:text-white transition"
              >
                Plan Your Trip
              </Link>

            </div>

            {/* Small CTA */}

            <Link
              to="/destinations"
              className="
                inline-flex
                items-center
                justify-center
                mt-6
                bg-blue-600
                hover:bg-blue-700
                px-5
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Start Exploring
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-3
            text-sm
          "
        >

          <p className="text-gray-500">
            © {new Date().getFullYear()} TourFriendly.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-center">
            Made with ❤️ for exploring Karnataka
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;