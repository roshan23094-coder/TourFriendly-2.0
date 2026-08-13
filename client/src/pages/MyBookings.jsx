import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  getUserBookings,
  cancelBooking,
} from "../api/bookingApi";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const data = await getUserBookings(user._id);

      if (data.success) {
        setBookings(data.bookings);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirm) return;

    try {
      await cancelBooking(id);

      alert("Booking Cancelled Successfully");

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Failed to cancel booking");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            Loading Bookings...
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          My Bookings
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          View and manage all your hotel bookings.
        </p>

        {bookings.length === 0 ? (

          <div className="bg-gray-100 rounded-3xl p-16 text-center">

            <h2 className="text-4xl font-bold">
              No Bookings Yet
            </h2>

            <p className="text-gray-600 mt-5">
              You haven't booked any hotels yet.
            </p>

            <Link
              to="/districts"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
            >
              Explore Districts
            </Link>

          </div>

        ) : (

          <div className="space-y-10">

            {bookings.map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-3"
              >

                <img
                  src={booking.hotel.image}
                  alt={booking.hotel.name}
                  className="w-full h-full object-cover"
                />

                <div className="lg:col-span-2 p-8">

                  <div className="flex justify-between items-start">

                    <div>

                      <h2 className="text-3xl font-bold">
                        {booking.hotel.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        📍 {booking.hotel.location}
                      </p>

                    </div>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                      {booking.bookingStatus}
                    </span>

                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">

                    <div>
                      <h3 className="font-bold">Check In</h3>
                      <p>
                        {new Date(
                          booking.checkIn
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold">Check Out</h3>
                      <p>
                        {new Date(
                          booking.checkOut
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold">Guests</h3>
                      <p>{booking.guests}</p>
                    </div>

                    <div>
                      <h3 className="font-bold">Rooms</h3>
                      <p>{booking.rooms}</p>
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Payment
                      </h3>

                      <p className="text-blue-700 font-bold">
                        {booking.paymentStatus}
                      </p>

                    </div>

                    <div>
                      <h3 className="font-bold">
                        Total Amount
                      </h3>

                      <p className="text-2xl text-green-700 font-bold">
                        ₹ {booking.totalPrice}
                      </p>

                    </div>

                  </div>

                  {booking.bookingStatus !==
                    "Cancelled" && (

                    <button
                      onClick={() =>
                        handleCancel(booking._id)
                      }
                      className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl"
                    >
                      Cancel Booking
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default MyBookings;