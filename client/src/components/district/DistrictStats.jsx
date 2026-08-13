function DistrictStats({ district }) {
  return (
    <section className="grid md:grid-cols-4 gap-6 my-14">

      <div className="bg-blue-50 rounded-2xl p-8 shadow">

        <h2 className="text-4xl">⭐</h2>

        <h3 className="text-3xl font-bold mt-4">
          {district.rating}
        </h3>

        <p>Average Rating</p>

      </div>

      <div className="bg-green-50 rounded-2xl p-8 shadow">

        <h2 className="text-4xl">🌤️</h2>

        <h3 className="text-2xl font-bold mt-4">
          {district.bestTime}
        </h3>

        <p>Best Time</p>

      </div>

      <div className="bg-yellow-50 rounded-2xl p-8 shadow">

        <h2 className="text-4xl">👥</h2>

        <h3 className="text-2xl font-bold mt-4">
          {district.population}
        </h3>

        <p>Population</p>

      </div>

      <div className="bg-purple-50 rounded-2xl p-8 shadow">

        <h2 className="text-4xl">📏</h2>

        <h3 className="text-2xl font-bold mt-4">
          {district.area}
        </h3>

        <p>Area</p>

      </div>

    </section>
  );
}

export default DistrictStats;