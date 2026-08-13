import { Link } from "react-router-dom";

const gradients = [
  "from-blue-600 to-cyan-500",
  "from-green-600 to-emerald-500",
  "from-purple-600 to-pink-500",
  "from-orange-500 to-red-500",
  "from-indigo-600 to-violet-500",
  "from-teal-600 to-green-500",
  "from-yellow-500 to-orange-500",
  "from-sky-600 to-blue-500",
];

function DistrictCard({ district }) {
  const gradient =
    gradients[district.name.length % gradients.length];

  return (
    <Link to={`/district/${district._id}`}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        {/* Gradient Banner */}

        <div
          className={`h-56 bg-gradient-to-br ${gradient} flex flex-col justify-center items-center text-white`}
        >
          <div className="text-7xl mb-3">🏛️</div>

          <h2 className="text-4xl font-bold text-center px-4">
            {district.name}
          </h2>

          <p className="mt-2 text-lg opacity-90">
            Karnataka
          </p>
        </div>

        {/* Content */}

        <div className="p-6">

          <p className="text-gray-700 line-clamp-3 leading-7">
            {district.description}
          </p>

          <div className="flex justify-between items-center mt-8">

            <span className="text-yellow-500 font-bold text-xl">
              ⭐ {district.rating}
            </span>

            <span className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition">
              Explore →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default DistrictCard;