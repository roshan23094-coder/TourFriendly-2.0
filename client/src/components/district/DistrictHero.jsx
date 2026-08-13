function DistrictHero({ district, destinations, hotels }) {
  return (
    <div className="relative h-[520px]">

      <img
        src={district.image}
        alt={district.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="absolute bottom-12 left-10 text-white">

        <span className="bg-blue-600 px-5 py-2 rounded-full font-semibold">
          Karnataka
        </span>

        <h1 className="text-6xl font-extrabold mt-6">
          {district.name}
        </h1>

        <p className="text-2xl mt-4 max-w-2xl">
          {district.description}
        </p>

        <div className="flex gap-10 mt-8 text-xl">

          <div>
            ⭐ <strong>{district.rating}</strong>
          </div>

          <div>
            📍 {destinations.length} Places
          </div>

          <div>
            🏨 {hotels.length} Hotels
          </div>

        </div>

      </div>

    </div>
  );
}

export default DistrictHero;