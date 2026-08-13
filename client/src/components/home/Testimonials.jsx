function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      place: "Bengaluru",
      review:
        "TourFriendly made our family trip so easy. The destination recommendations were amazing!",
    },
    {
      name: "Priya Nair",
      place: "Kochi",
      review:
        "Beautiful interface and smooth experience. I found great hotels within my budget.",
    },
    {
      name: "Rahul Verma",
      place: "Delhi",
      review:
        "The AI Trip Planner saved us a lot of time. Looking forward to more features!",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-5">
          What Our Travelers Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by travelers across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold">{review.name}</h3>

              <p className="text-blue-600 mb-4">{review.place}</p>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;