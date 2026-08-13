import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import { getAllBookings } from "../../api/bookingApi";

function ManageBookings() {

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const res = await getAllBookings();

      setBookings(res.bookings);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  };

  if (loading)
    return (
      <div className="text-center mt-40 text-3xl">
        Loading...
      </div>
    );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold mb-10">

          Manage Bookings

        </h1>

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-xl shadow">

            <thead className="bg-blue-700 text-white">

              <tr>

                <th className="p-4">User</th>

                <th className="p-4">Hotel</th>

                <th className="p-4">Check In</th>

                <th className="p-4">Check Out</th>

                <th className="p-4">Guests</th>

                <th className="p-4">Rooms</th>

                <th className="p-4">Total</th>

                <th className="p-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking._id}
                  className="border-b"
                >

                  <td className="p-4">

                    {booking.user?.name}

                  </td>

                  <td className="p-4">

                    {booking.hotel?.name}

                  </td>

                  <td className="p-4">

                    {new Date(
                      booking.checkIn
                    ).toLocaleDateString()}

                  </td>

                  <td className="p-4">

                    {new Date(
                      booking.checkOut
                    ).toLocaleDateString()}

                  </td>

                  <td className="p-4">

                    {booking.guests}

                  </td>

                  <td className="p-4">

                    {booking.rooms}

                  </td>

                  <td className="p-4 font-bold">

                    ₹{booking.totalPrice}

                  </td>

                  <td className="p-4 text-blue-700 font-bold">

                    {booking.bookingStatus}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ManageBookings;