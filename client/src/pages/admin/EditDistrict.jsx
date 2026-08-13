import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getDistrictById,
  updateDistrict,
} from "../../api/districtApi";

function EditDistrict() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    state: "",
    description: "",
    image: "",
    famousFor: "",
    rating: 4.5,
  });

  useEffect(() => {
    fetchDistrict();
  }, []);

  const fetchDistrict = async () => {
    try {
      const data = await getDistrictById(id);

      const district = data.district;

      setForm({
        name: district.name,
        state: district.state,
        description: district.description,
        image: district.image,
        famousFor: district.famousFor.join(", "),
        rating: district.rating,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const updatedData = {
        ...form,
        famousFor: form.famousFor
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      const res = await updateDistrict(id, updatedData);

      alert(res.message);

      navigate("/admin/manage-districts");

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Edit District
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            rows="5"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="famousFor"
            value={form.famousFor}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl"
          >
            Update District
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditDistrict;