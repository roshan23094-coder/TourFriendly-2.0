function DistrictMap({ district }) {
  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-8">
        📍 Location
      </h2>

      <div className="rounded-3xl overflow-hidden shadow-xl">

        <iframe
          title={district.name}
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${district.latitude},${district.longitude}&z=12&output=embed`}
        ></iframe>

      </div>

    </section>
  );
}

export default DistrictMap;