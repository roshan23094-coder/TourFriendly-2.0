import { Link } from "react-router-dom";

function AdminDashboard() {
  const cards = [
    {
      title: "Add District",
      description: "Add new districts",
      link: "/admin/add-district",
      color: "bg-indigo-600",
      icon: "🏙️",
    },
    {
      title: "Manage Districts",
      description: "View, Edit & Delete districts",
      link: "/admin/manage-districts",
      color: "bg-teal-600",
      icon: "🗺️",
    },
    {
      title: "Add Destination",
      description: "Add new tourist destinations",
      link: "/admin/add-destination",
      color: "bg-blue-600",
      icon: "🌍",
    },
    {
      title: "Manage Destinations",
      description: "View, Edit & Delete destinations",
      link: "/admin/destinations",
      color: "bg-green-600",
      icon: "📍",
    },
    {
      title: "Add Hotel",
      description: "Add new hotels",
      link: "/admin/add-hotel",
      color: "bg-purple-600",
      icon: "🏨",
    },
    {
      title: "Manage Hotels",
      description: "View, Edit & Delete hotels",
      link: "/admin/hotels",
      color: "bg-pink-600",
      icon: "🛏️",
    },
    {
      title: "Manage Users",
      description: "View all registered users",
      link: "/admin/users",
      color: "bg-orange-600",
      icon: "👤",
    },
    {
      title: "Bookings",
      description: "View hotel bookings",
      link: "/admin/bookings",
      color: "bg-cyan-600",
      icon: "📅",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white py-8 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          TourFriendly Admin Dashboard
        </h1>

        <p className="text-center mt-3 text-lg">
          Manage your travel website with ease
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <Link key={index} to={card.link}>
              <div
                className={`${card.color} rounded-2xl p-8 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 h-full`}
              >
                <div className="text-6xl mb-6">
                  {card.icon}
                </div>

                <h2 className="text-2xl font-bold">
                  {card.title}
                </h2>

                <p className="mt-3 opacity-90">
                  {card.description}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;