import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function ManageDestinations() {
  const [destinations, setDestinations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await api.get("/destinations");
      setDestinations(res.data.destinations);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDestination = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this destination?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/destinations/${id}`);

      alert("Destination Deleted Successfully");

      fetchDestinations();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Manage Tourist Places
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">Image</th>
              <th>Name</th>
              <th>District</th>
              <th>Location</th>
              <th>Category</th>
              <th>Entry Fee</th>
              <th>Rating</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {destinations.map((destination) => (

              <tr
                key={destination._id}
                className="border-b text-center"
              >

                <td className="p-4">

                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-24 h-16 object-cover rounded-lg mx-auto"
                  />

                </td>

                <td className="font-semibold">
                  {destination.title}
                </td>

                <td>
                  {destination.district?.name || "-"}
                </td>

                <td>
                  {destination.location}
                </td>

                <td>
                  {destination.category}
                </td>

                <td>
                  ₹ {destination.entryFee}
                </td>

                <td>
                  ⭐ {destination.rating}
                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        navigate(
                          `/admin/edit-destination/${destination._id}`
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteDestination(destination._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageDestinations;