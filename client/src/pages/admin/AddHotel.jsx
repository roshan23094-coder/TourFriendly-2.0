import { useEffect, useState } from "react";
import api from "../../api/api";

function AddHotel() {
  const [districts, setDistricts] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [form, setForm] = useState({
    name: "",
    district: "",
    destination: "",
    location: "",
    state: "Karnataka",
    description: "",
    pricePerNight: "",
    rating: 4.5,
    latitude: "",
    longitude: "",
    amenities: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchDistricts();
  }, []);

  useEffect(() => {
    if (form.district) {
      fetchDestinations(form.district);
    } else {
      setDestinations([]);
    }
  }, [form.district]);

  const fetchDistricts = async () => {
    try {
      const res = await api.get("/districts");
      setDistricts(res.data.districts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDestinations = async (districtId) => {
    try {
      const res = await api.get(`/districts/${districtId}/destinations`);
      setDestinations(res.data.destinations);
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

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("district", form.district);
      formData.append("destination", form.destination);
      formData.append("location", form.location);
      formData.append("state", form.state);
      formData.append("description", form.description);
      formData.append("pricePerNight", form.pricePerNight);
      formData.append("rating", form.rating);
      formData.append("latitude", form.latitude);
      formData.append("longitude", form.longitude);

      formData.append(
        "amenities",
        JSON.stringify(
          form.amenities
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item !== "")
        )
      );

      if (image) {
        formData.append("image", image);
      }

      const res = await api.post("/hotels", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      setForm({
        name: "",
        district: "",
        destination: "",
        location: "",
        state: "Karnataka",
        description: "",
        pricePerNight: "",
        rating: 4.5,
        latitude: "",
        longitude: "",
        amenities: "",
      });

      setImage(null);

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Failed to Add Hotel"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Add Hotel
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Hotel Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

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

          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">Nearby Tourist Place (Optional)</option>

            {destinations.map((destination) => (
              <option
                key={destination._id}
                value={destination._id}
              >
                {destination.title}
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
            name="pricePerNight"
            placeholder="Price Per Night"
            value={form.pricePerNight}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
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
            type="text"
            name="amenities"
            placeholder="Amenities (comma separated)"
            value={form.amenities}
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
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl"
          >
            Add Hotel
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddHotel;