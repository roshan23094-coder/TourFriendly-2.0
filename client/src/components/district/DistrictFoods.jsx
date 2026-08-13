function DistrictFoods({ district }) {
  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-8">
        🍲 Famous Foods
      </h2>

      {district.famousFood?.length === 0 ? (

        <div className="bg-gray-100 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Food Information Coming Soon
          </h2>
        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {district.famousFood.map((food, index) => (

            <div
              key={index}
              className="bg-orange-50 rounded-2xl p-8 shadow-md hover:shadow-xl duration-300 text-center"
            >
              <div className="text-5xl mb-4">🍽️</div>

              <h3 className="text-xl font-bold">
                {food}
              </h3>
            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default DistrictFoods;