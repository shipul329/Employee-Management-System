import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/employees" className="hover:underline">Employees</Link>
        <Link to="/employees/add" className="hover:underline">Add Employee</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
