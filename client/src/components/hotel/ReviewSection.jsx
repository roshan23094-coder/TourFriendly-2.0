import { useEffect, useState } from "react";
import {
  addReview,
  getHotelReviews,
} from "../../api/reviewApi";

function ReviewSection({ hotelId }) {
  const [reviews, setReviews] = useState([]);

  const [form, setForm] = useState({
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getHotelReviews(hotelId);
      setReviews(data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  const submitReview = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      await addReview({
        user: user.id,
        hotel: hotelId,
        rating: Number(form.rating),
        comment: form.comment,
      });

      setForm({
        rating: 5,
        comment: "",
      });

      fetchReviews();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Reviews
      </h2>

      <div className="bg-gray-100 p-6 rounded-xl">

        <input
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) =>
            setForm({
              ...form,
              rating: e.target.value,
            })
          }
          className="border p-3 rounded-lg w-full mb-4"
        />

        <textarea
          rows="4"
          placeholder="Write your review..."
          value={form.comment}
          onChange={(e) =>
            setForm({
              ...form,
              comment: e.target.value,
            })
          }
          className="border p-3 rounded-lg w-full"
        />

        <button
          onClick={submitReview}
          className="mt-5 bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Submit Review
        </button>

      </div>

      <div className="mt-10 space-y-6">

        {reviews.map((review) => (

          <div
            key={review._id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h3 className="font-bold">
              {review.user?.name || "User"}
            </h3>

            <p className="text-yellow-600">
              ⭐ {review.rating}/5
            </p>

            <p className="mt-3">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ReviewSection;