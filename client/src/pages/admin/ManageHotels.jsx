import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function ManageHotels() {
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await api.get("/hotels");
      setHotels(res.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHotel = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/hotels/${id}`);

      alert("Hotel Deleted Successfully");

      fetchHotels();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Manage Hotels
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">Image</th>

              <th>Hotel</th>

              <th>District</th>

              <th>Tourist Place</th>

              <th>Location</th>

              <th>Price / Night</th>

              <th>Rating</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {hotels.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
                >
                  No Hotels Found
                </td>

              </tr>

            ) : (

              hotels.map((hotel) => (

                <tr
                  key={hotel._id}
                  className="border-b text-center hover:bg-gray-50"
                >

                  <td className="p-4">

                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-16 object-cover rounded-lg mx-auto"
                    />

                  </td>

                  <td className="font-semibold">
                    {hotel.name}
                  </td>

                  <td>
                    {hotel.district?.name || "-"}
                  </td>

                  <td>
                    {hotel.destination?.title || "-"}
                  </td>

                  <td>
                    {hotel.location}
                  </td>

                  <td className="font-semibold text-green-700">
                    ₹ {hotel.pricePerNight}
                  </td>

                  <td className="text-yellow-500 font-bold">
                    ⭐ {hotel.rating}
                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          navigate(
                            `/admin/edit-hotel/${hotel._id}`
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteHotel(hotel._id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageHotels;