import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllDistricts,
  deleteDistrict,
} from "../../api/districtApi";

function ManageDistricts() {
  const [districts, setDistricts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const data = await getAllDistricts();
      setDistricts(data.districts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this district?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDistrict(id);

      alert("District Deleted Successfully");

      fetchDistricts();

    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Manage Districts
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4">Image</th>
              <th>Name</th>
              <th>State</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {districts.map((district) => (

              <tr
                key={district._id}
                className="border-b text-center"
              >

                <td className="p-4">

                  <img
                    src={district.image}
                    alt={district.name}
                    className="w-24 h-16 object-cover rounded-lg mx-auto"
                  />

                </td>

                <td>{district.name}</td>

                <td>{district.state}</td>

                <td>⭐ {district.rating}</td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        navigate(`/admin/edit-district/${district._id}`)
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(district._id)
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

export default ManageDistricts;