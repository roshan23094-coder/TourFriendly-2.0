import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        TourFriendly
      </h1>

      <nav className="space-y-4">

        <Link
          to="/admin"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/admin/destinations"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          🏝 Destinations
        </Link>

        <Link
          to="/admin/hotels"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          🏨 Hotels
        </Link>

        <Link
          to="/admin/users"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          👤 Users
        </Link>

        <Link
          to="/admin/bookings"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          📅 Bookings
        </Link>

        <Link
          to="/"
          className="block hover:bg-red-600 p-3 rounded-lg mt-10"
        >
          🚪 Logout
        </Link>

      </nav>

    </div>
  );
}

export default AdminSidebar;