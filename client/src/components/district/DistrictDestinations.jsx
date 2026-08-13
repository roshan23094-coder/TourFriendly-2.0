import { Link } from "react-router-dom";

const categoryConfig = {
  Temple: {
    icon: "🛕",
    gradient: "from-purple-600 to-pink-500",
  },
  Beach: {
    icon: "🌊",
    gradient: "from-blue-600 to-cyan-500",
  },
  Waterfall: {
    icon: "💦",
    gradient: "from-cyan-500 to-sky-500",
  },
  Wildlife: {
    icon: "🦁",
    gradient: "from-green-700 to-emerald-500",
  },
  Lake: {
    icon: "🚣",
    gradient: "from-sky-600 to-blue-400",
  },
  Trekking: {
    icon: "🥾",
    gradient: "from-emerald-700 to-lime-500",
  },
  Fort: {
    icon: "🏰",
    gradient: "from-amber-700 to-orange-500",
  },
  Garden: {
    icon: "🌸",
    gradient: "from-pink-500 to-rose-400",
  },
  Museum: {
    icon: "🏛️",
    gradient: "from-gray-600 to-slate-400",
  },
  "Hill Station": {
    icon: "🌄",
    gradient: "from-orange-500 to-yellow-400",
  },
};

function DistrictDestinations({ destinations }) {
  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">
          🌍 Tourist Attractions
        </h2>

        <span className="text-lg text-gray-500">
          {destinations.length} Places
        </span>
      </div>

      {destinations.length === 0 ? (
        <div className="bg-gray-100 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold">
            No Tourist Places Available
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => {
            const config =
              categoryConfig[place.category] || {
                icon: "📍",
                gradient: "from-blue-600 to-indigo-500",
              };

            return (
              <Link
                key={place._id}
                to={`/destination/${place._id}`}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 hover:-translate-y-2">

                  {/* Gradient Header */}

                  <div
                    className={`h-60 bg-gradient-to-br ${config.gradient} flex flex-col justify-center items-center text-white`}
                  >
                    <div className="text-7xl mb-3">
                      {config.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-center px-4">
                      {place.title}
                    </h3>

                    <p className="mt-2 text-lg opacity-90">
                      {place.category}
                    </p>
                  </div>

                  <div className="p-6">

                    <p className="text-gray-500">
                      📍 {place.location}
                    </p>

                    <p className="text-gray-600 mt-4 line-clamp-3">
                      {place.description}
                    </p>

                    <div className="flex justify-between mt-6">

                      <span className="text-yellow-500 font-bold">
                        ⭐ {place.rating}
                      </span>

                      <span className="text-blue-600 font-bold">
                        Explore →
                      </span>

                    </div>

                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default DistrictDestinations;