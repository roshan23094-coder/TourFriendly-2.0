import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LocationMap from "../components/maps/LocationMap";

import { getDestinationById } from "../api/destinationApi";
import api from "../api/api";

const categoryConfig = {
  Temple: {
    icon: "🛕",
    gradient: "from-purple-700 to-pink-500",
  },
  Beach: {
    icon: "🌊",
    gradient: "from-blue-600 to-cyan-500",
  },
  Waterfall: {
    icon: "💦",
    gradient: "from-cyan-500 to-sky-500",
  },
  Wildlife: {
    icon: "🦁",
    gradient: "from-green-700 to-emerald-500",
  },
  Lake: {
    icon: "🚣",
    gradient: "from-sky-600 to-blue-500",
  },
  Trekking: {
    icon: "🥾",
    gradient: "from-emerald-600 to-lime-500",
  },
  Fort: {
    icon: "🏰",
    gradient: "from-orange-600 to-amber-500",
  },
  Garden: {
    icon: "🌸",
    gradient: "from-pink-500 to-rose-500",
  },
  Museum: {
    icon: "🏛️",
    gradient: "from-gray-600 to-slate-500",
  },
  "Hill Station": {
    icon: "🌄",
    gradient: "from-orange-500 to-yellow-400",
  },
};

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [nearbyHotels, setNearbyHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchDestination();
    fetchReviews();
    fetchNearbyHotels();
  }, [id]);

  const fetchDestination = async () => {
    try {
      const data = await getDestinationById(id);
      setDestination(data.destination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await api.get(`/reviews/destination/${id}`);

      setReviews(res.data.reviews);
      setAverageRating(res.data.averageRating);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNearbyHotels = async () => {
    try {
      const res = await api.get("/hotels");

      const hotels = res.data.hotels.filter(
        (hotel) =>
          hotel.destination &&
          hotel.destination._id === id
      );

      setNearbyHotels(hotels);
    } catch (error) {
      console.log(error);
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please Login First");
      return;
    }

    try {
      await api.post("/reviews", {
        user: user._id,
        destination: id,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
      });

      alert("Review Added Successfully");

      setReviewForm({
        rating: 5,
        comment: "",
      });

      fetchReviews();
    } catch (error) {
      console.log(error);
      alert("Failed To Add Review");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="text-4xl font-bold">
            Loading...
          </h1>
        </div>
      </>
    );
  }

  if (!destination) {
    return (
      <>
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="text-4xl font-bold">
            Destination Not Found
          </h1>
        </div>
      </>
    );
  }

  const hero =
    categoryConfig[destination.category] || {
      icon: "📍",
      gradient: "from-blue-600 to-indigo-500",
    };

  return (
    <>
      <Navbar />

      <div
        className={`w-full h-[500px] bg-gradient-to-br ${hero.gradient} flex flex-col justify-center items-center text-white`}
      >
        <div className="text-9xl mb-6">
          {hero.icon}
        </div>

        <h1 className="text-6xl font-bold text-center px-6">
          {destination.title}
        </h1>

        <p className="text-2xl mt-4">
          {destination.category}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold">
          {destination.title}
        </h1>

        <p className="text-xl text-gray-500 mt-3">
          📍 {destination.location}, {destination.state}
        </p>

        <div className="flex flex-wrap gap-8 mt-6">

          <span className="text-yellow-500 text-xl font-bold">
            ⭐ {destination.rating}
          </span>

          <span className="text-green-700 text-xl font-bold">
            ⭐ Reviews : {averageRating}
          </span>

          <span className="text-blue-700 font-bold text-xl">
            ₹ {destination.entryFee || 0}
          </span>

        </div>

        <h2 className="text-3xl font-bold mt-12">
          About
        </h2>

        <p className="text-lg leading-9 mt-4 text-gray-700">
          {destination.description}
        </p>

        <h2 className="text-3xl font-bold mt-12">
          Best Time To Visit
        </h2>

        <p className="mt-4 text-lg">
          {destination.bestTime || "Available Throughout The Year"}
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          🗺 Location
        </h2>

        <LocationMap
          latitude={destination.latitude}
          longitude={destination.longitude}
          title={destination.title}
        />
                {/* Nearby Hotels */}

        <h2 className="text-3xl font-bold mt-16 mb-8">
          🏨 Nearby Hotels
        </h2>

        {nearbyHotels.length === 0 ? (

          <p>No Nearby Hotels Added Yet.</p>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {nearbyHotels.map((hotel) => (

              <div
                key={hotel._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl duration-300"
              >

                <div className="h-52 bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center text-white">

                  <div className="text-6xl">
                    🏨
                  </div>

                  <h3 className="text-2xl font-bold mt-3 text-center px-4">
                    {hotel.name}
                  </h3>

                </div>

                <div className="p-5">

                  <p className="mt-2 text-gray-500">
                    📍 {hotel.location}
                  </p>

                  <div className="flex justify-between mt-4">

                    <span className="text-yellow-500 font-bold">
                      ⭐ {hotel.rating}
                    </span>

                    <span className="text-blue-700 font-bold">
                      ₹ {hotel.pricePerNight}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Write Review */}

        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-6">
            Write A Review
          </h2>

          <form
            onSubmit={submitReview}
            className="space-y-5"
          >

            <select
              value={reviewForm.rating}
              onChange={(e) =>
                setReviewForm({
                  ...reviewForm,
                  rating: Number(e.target.value),
                })
              }
              className="w-full border p-4 rounded-xl"
            >

              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>

            </select>

            <textarea
              rows="5"
              value={reviewForm.comment}
              onChange={(e) =>
                setReviewForm({
                  ...reviewForm,
                  comment: e.target.value,
                })
              }
              placeholder="Share your experience..."
              className="w-full border p-4 rounded-xl"
            />

            <button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
            >
              Submit Review
            </button>

          </form>

        </div>

        {/* Reviews */}

        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-8">
            Visitor Reviews
          </h2>

          {reviews.length === 0 ? (

            <h3>No Reviews Yet.</h3>

          ) : (

            reviews.map((review) => (

              <div
                key={review._id}
                className="bg-gray-100 rounded-xl p-6 mb-6"
              >

                <div className="flex justify-between">

                  <h3 className="text-xl font-bold">
                    {review.user?.name}
                  </h3>

                  <span className="text-yellow-500 font-bold">
                    ⭐ {review.rating}
                  </span>

                </div>

                <p className="mt-4 text-gray-700">
                  {review.comment}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default DestinationDetails;
