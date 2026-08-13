import { Link, useNavigate } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto px-5 py-4">

        <div className="flex items-center justify-between gap-4">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-3 text-white font-bold shrink-0"
          >
            <FaGlobeAsia className="text-green-400 text-3xl" />

            <span className="text-3xl">
              TourFriendly
            </span>
          </Link>


          {/* ================= NAVIGATION ================= */}

          <div className="flex items-center gap-5">

            <Link
              to="/"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              to="/districts"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              Districts
            </Link>

            <Link
              to="/destinations"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              Tourist Places
            </Link>

            <Link
              to="/hotels"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              Hotels
            </Link>

            <Link
              to="/ai-trip-planner"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              AI Planner
            </Link>

            <Link
              to="/about"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-white font-medium hover:text-green-400 transition whitespace-nowrap"
            >
              Contact
            </Link>

          </div>


          {/* ================= LOGIN / USER ================= */}

          <div className="shrink-0">

            {user ? (

              <div className="flex items-center gap-3">

                <span className="text-white font-semibold whitespace-nowrap">
                  👋 {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition"
                >
                  Logout
                </button>

              </div>

            ) : (

              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition whitespace-nowrap"
              >
                Login
              </Link>

            )}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;