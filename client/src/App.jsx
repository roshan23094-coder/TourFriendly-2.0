import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= USER PAGES =================
import Home from "./pages/Home";

import Districts from "./pages/Districts";
import DistrictDetails from "./pages/DistrictDetails";

import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";

import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";

import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import MyWishlist from "./pages/MyWishlist";

import SearchResults from "./pages/SearchResults";

import Register from "./pages/Register";
import Login from "./pages/Login";

import About from "./pages/About";
import Contact from "./pages/Contact";

import AITripPlanner from "./pages/AITripPlanner";

// ================= ADMIN =================
import AdminDashboard from "./pages/admin/AdminDashboard";

// District Admin
import AddDistrict from "./pages/admin/AddDistrict";
import ManageDistricts from "./pages/admin/ManageDistricts";
import EditDistrict from "./pages/admin/EditDistrict";

// Destination Admin
import AddDestination from "./pages/admin/AddDestination";
import ManageDestinations from "./pages/admin/ManageDestinations";
import EditDestination from "./pages/admin/EditDestination";

// Hotel Admin
import AddHotel from "./pages/admin/AddHotel";
import ManageHotels from "./pages/admin/ManageHotels";
import EditHotel from "./pages/admin/EditHotel";

// Booking Admin
import ManageBookings from "./pages/admin/ManageBookings";

// Users
import ManageUsers from "./pages/admin/ManageUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= USER ================= */}

        <Route path="/" element={<Home />} />

        {/* Districts */}
        <Route path="/districts" element={<Districts />} />
        <Route path="/district/:id" element={<DistrictDetails />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />

        {/* Hotels */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />

        {/* Booking */}
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Wishlist */}
        <Route path="/my-wishlist" element={<MyWishlist />} />

        {/* Search */}
        <Route path="/search" element={<SearchResults />} />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-trip-planner" element={<AITripPlanner />} />

        {/* ================= ADMIN ================= */}

        <Route path="/admin" element={<AdminDashboard />} />

        {/* District CRUD */}
        <Route
          path="/admin/add-district"
          element={<AddDistrict />}
        />

        <Route
          path="/admin/manage-districts"
          element={<ManageDistricts />}
        />

        <Route
          path="/admin/edit-district/:id"
          element={<EditDistrict />}
        />

        {/* Destination CRUD */}
        <Route
          path="/admin/add-destination"
          element={<AddDestination />}
        />

        <Route
          path="/admin/destinations"
          element={<ManageDestinations />}
        />

        <Route
          path="/admin/edit-destination/:id"
          element={<EditDestination />}
        />

        {/* Hotel CRUD */}
        <Route
          path="/admin/add-hotel"
          element={<AddHotel />}
        />

        <Route
          path="/admin/hotels"
          element={<ManageHotels />}
        />

        <Route
          path="/admin/edit-hotel/:id"
          element={<EditHotel />}
        />

        {/* Booking Management */}
        <Route
          path="/admin/bookings"
          element={<ManageBookings />}
        />

        {/* Users */}
        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;