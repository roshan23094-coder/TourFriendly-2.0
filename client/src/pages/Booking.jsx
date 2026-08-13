import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";

import api from "../api/api";
import { createBooking } from "../api/bookingApi";

function Booking() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
  });

  useEffect(() => {
    fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    try {
      const res = await api.get(`/hotels/${id}`);
      setHotel(res.data.hotel);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (!booking.checkIn || !booking.checkOut) {
      alert("Please select Check-In and Check-Out dates.");
      return;
    }

    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);

    if (checkOut <= checkIn) {
      alert("Check-Out date must be after Check-In date.");
      return;
    }

    const nights = Math.ceil(
      (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    );

    const totalPrice =
      nights *
      hotel.pricePerNight *
      booking.rooms;

    try {
      await createBooking({
        user: user._id,
        hotel: hotel._id,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        guests: booking.guests,
        rooms: booking.rooms,
        totalPrice,
      });

      alert("🎉 Booking Successful!");

      navigate("/my-bookings");

    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            Loading Hotel...
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  if (!hotel) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-5xl font-bold">
            Hotel Not Found
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
          Hotel Booking
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Complete your booking in a few simple steps.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          <BookingForm
            booking={booking}
            setBooking={setBooking}
            handleBooking={handleBooking}
          />

          <BookingSummary
            hotel={hotel}
            booking={booking}
          />

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Booking;