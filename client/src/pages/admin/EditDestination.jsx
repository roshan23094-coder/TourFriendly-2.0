import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    state: "",
    country: "India",
    description: "",
    image: "",
    rating: 4.5,
    price: 0,
    bestTime: "",
  });

  useEffect(() => {
    fetchDestination();
  }, []);

  const fetchDestination = async () => {
    try {
      const res = await api.get(`/destinations/${id}`);
      setForm(res.data.destination);
    } catch (err) {
      console.log(err);
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
      await api.put(`/destinations/${id}`, form);

      alert("Destination Updated Successfully");

      navigate("/admin/destinations");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Edit Destination
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="5"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="rating"
            type="number"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="bestTime"
            value={form.bestTime}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700"
          >
            Update Destination
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditDestination;