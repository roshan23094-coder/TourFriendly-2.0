function BookingSummary({
  hotel,
  booking,
}) {

  const checkIn = new Date(booking.checkIn);
  const checkOut = new Date(booking.checkOut);

  let nights = 0;

  if (booking.checkIn && booking.checkOut) {
    nights = Math.ceil(
      (checkOut - checkIn) /
        (1000 * 60 * 60 * 24)
    );
  }

  if (nights < 1) nights = 1;

  const total =
    nights *
    hotel.pricePerNight *
    booking.rooms;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Booking Summary
      </h2>

      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-56 rounded-xl object-cover"
      />

      <h3 className="text-2xl font-bold mt-6">
        {hotel.name}
      </h3>

      <p className="text-gray-500 mt-2">
        📍 {hotel.location}
      </p>

      <div className="space-y-4 mt-8">

        <div className="flex justify-between">

          <span>Price / Night</span>

          <span className="font-bold">
            ₹ {hotel.pricePerNight}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Nights</span>

          <span className="font-bold">
            {nights}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Rooms</span>

          <span className="font-bold">
            {booking.rooms}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Guests</span>

          <span className="font-bold">
            {booking.guests}
          </span>

        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold text-blue-700">

          <span>Total</span>

          <span>
            ₹ {total}
          </span>

        </div>

      </div>

    </div>
  );
}

export default BookingSummary;