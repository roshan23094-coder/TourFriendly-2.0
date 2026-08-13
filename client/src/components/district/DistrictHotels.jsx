import { Link } from "react-router-dom";

function DistrictHotels({ hotels }) {
  return (
    <section className="mt-20">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-4xl font-bold">
          🏨 Hotels
        </h2>

        <span className="text-lg text-gray-500">
          {hotels.length} Hotels
        </span>

      </div>

      {hotels.length === 0 ? (

        <div className="bg-gray-100 rounded-2xl p-12 text-center">

          <h2 className="text-2xl font-bold">
            No Hotels Available
          </h2>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {hotels.map((hotel) => (

            <Link
              key={hotel._id}
              to={`/hotel/${hotel._id}`}
            >

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 hover:-translate-y-2">

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    📍 {hotel.location}
                  </p>

                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {hotel.description}
                  </p>

                  <div className="flex justify-between mt-6">

                    <span className="text-yellow-500 font-bold">
                      ⭐ {hotel.rating}
                    </span>

                    <span className="text-blue-600 font-bold">
                      ₹ {hotel.pricePerNight}/night
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      )}

    </section>
  );
}

export default DistrictHotels;