function BookingForm({
  booking,
  setBooking,
  handleBooking,
}) {
  return (
    <form
      onSubmit={handleBooking}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-8">
        Book Your Stay
      </h2>

      {/* Check In */}

      <label className="block font-semibold mb-2">
        Check In
      </label>

      <input
        type="date"
        value={booking.checkIn}
        onChange={(e) =>
          setBooking({
            ...booking,
            checkIn: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4 mb-5"
        required
      />

      {/* Check Out */}

      <label className="block font-semibold mb-2">
        Check Out
      </label>

      <input
        type="date"
        value={booking.checkOut}
        onChange={(e) =>
          setBooking({
            ...booking,
            checkOut: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4 mb-5"
        required
      />

      {/* Guests */}

      <label className="block font-semibold mb-2">
        Guests
      </label>

      <input
        type="number"
        min="1"
        value={booking.guests}
        onChange={(e) =>
          setBooking({
            ...booking,
            guests: Number(e.target.value),
          })
        }
        className="w-full border rounded-xl p-4 mb-5"
      />

      {/* Rooms */}

      <label className="block font-semibold mb-2">
        Rooms
      </label>

      <input
        type="number"
        min="1"
        value={booking.rooms}
        onChange={(e) =>
          setBooking({
            ...booking,
            rooms: Number(e.target.value),
          })
        }
        className="w-full border rounded-xl mb-8 p-4"
      />

      <button
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-xl font-bold"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;