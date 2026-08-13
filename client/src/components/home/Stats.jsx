import { FaUsers, FaMapMarkerAlt, FaHotel, FaStar } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-600 text-5xl" />,
      number: "10,000+",
      title: "Happy Travelers",
    },
    {
      icon: <FaMapMarkerAlt className="text-green-600 text-5xl" />,
      number: "500+",
      title: "Destinations",
    },
    {
      icon: <FaHotel className="text-orange-500 text-5xl" />,
      number: "300+",
      title: "Hotels",
    },
    {
      icon: <FaStar className="text-yellow-500 text-5xl" />,
      number: "4.9",
      title: "Average Rating",
    },
  ];

  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-xl">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;