import { useState } from "react";
import { addDistrict } from "../../api/districtApi";

function AddDistrict() {
  const [form, setForm] = useState({
    name: "",
    state: "Karnataka",
    description: "",
    image: "",
    famousFor: "",
    rating: 4.5,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...form,
        famousFor: form.famousFor
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      const res = await addDistrict(data);

      alert(res.message);

      setForm({
        name: "",
        state: "Karnataka",
        description: "",
        image: "",
        famousFor: "",
        rating: 4.5,
      });

    } catch (error) {
      console.log(error);
      alert("Failed to Add District");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Add District
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="District Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            rows="5"
            name="description"
            placeholder="District Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="famousFor"
            placeholder="Famous For (comma separated)"
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
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl"
          >
            Add District
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddDistrict;