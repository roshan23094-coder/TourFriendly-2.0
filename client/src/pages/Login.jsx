import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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
      const data = await loginUser(form);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-5"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;