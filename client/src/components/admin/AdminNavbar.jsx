function AdminNavbar() {
  return (
    <div className="bg-white shadow-md p-5 flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold">
          Admin Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-5">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 outline-none"
        />

        <button className="text-2xl">
          🔔
        </button>

        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />

      </div>

    </div>
  );
}

export default AdminNavbar;