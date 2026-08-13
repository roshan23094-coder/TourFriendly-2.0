import { useEffect, useState } from "react";
import api from "../../api/api";

function AddDestination() {
  const [districts, setDistricts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    district: "",
    location: "",
    state: "Karnataka",
    country: "India",
    description: "",
    category: "",
    rating: 4.5,
    entryFee: "",
    bestTime: "",
    latitude: "",
    longitude: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const res = await api.get("/districts");
      setDistricts(res.data.districts);
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

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (image) {
        formData.append("image", image);
      }

      const res = await api.post("/destinations", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      setForm({
        title: "",
        district: "",
        location: "",
        state: "Karnataka",
        country: "India",
        description: "",
        category: "",
        rating: 4.5,
        entryFee: "",
        bestTime: "",
        latitude: "",
        longitude: "",
      });

      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Failed to Add Destination");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Add Tourist Place
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Tourist Place Name"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          {/* District Dropdown */}

          <select
            name="district"
            value={form.district}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          >
            <option value="">Select District</option>

            {districts.map((district) => (
              <option
                key={district._id}
                value={district._id}
              >
                {district.name}
              </option>
            ))}

          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="number"
            name="entryFee"
            placeholder="Entry Fee"
            value={form.entryFee}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="bestTime"
            placeholder="Best Time To Visit"
            value={form.bestTime}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={form.latitude}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={form.longitude}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full border p-3 rounded-xl"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-60 object-cover rounded-xl"
            />
          )}

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl"
          >
            Add Tourist Place
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddDestination;