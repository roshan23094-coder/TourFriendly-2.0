import { Link } from "react-router-dom";

function DestinationResults({ destinations }) {
  if (destinations.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-100 rounded-xl">

        <h2 className="text-3xl font-bold">
          No Destinations Found 😔
        </h2>

        <p className="text-gray-500 mt-4">
          Try another search keyword or filter.
        </p>

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {destinations.map((destination) => (

        <Link
          key={destination._id}
          to={`/destination/${destination._id}`}
        >

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {destination.title}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {destination.location},{" "}
                {destination.district?.name}
              </p>

              <p className="mt-4 text-gray-700 line-clamp-3">
                {destination.description}
              </p>

              <div className="flex justify-between mt-5">

                <span className="text-yellow-500 font-bold">
                  ⭐ {destination.rating}
                </span>

                <span className="text-blue-700 font-bold">
                  ₹ {destination.entryFee}
                </span>

              </div>

              <div className="mt-4">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                  {destination.category}

                </span>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>
  );
}

export default DestinationResults;