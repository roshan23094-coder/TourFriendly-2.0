import { Link } from "react-router-dom";

function HotelResults({ hotels }) {

  if (hotels.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-100 rounded-xl">

        <h2 className="text-3xl font-bold">
          No Hotels Found 😔
        </h2>

        <p className="text-gray-500 mt-4">
          Try another search keyword or filter.
        </p>

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {hotels.map((hotel) => (

        <Link
          key={hotel._id}
          to={`/hotel/${hotel._id}`}
        >

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {hotel.name}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {hotel.location}, {hotel.district?.name}
              </p>

              <p className="mt-4 text-gray-700 line-clamp-3">
                {hotel.description}
              </p>

              <div className="flex justify-between mt-5">

                <span className="text-yellow-500 font-bold">
                  ⭐ {hotel.rating}
                </span>

                <span className="text-blue-700 font-bold">
                  ₹ {hotel.pricePerNight}/night
                </span>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                {hotel.amenities?.slice(0, 3).map((item, index) => (

                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>
  );
}

export default HotelResults;