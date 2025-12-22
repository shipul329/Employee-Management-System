import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import Navbar from "./Navbar";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Employee List</h2>
        <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? employees.map(emp => (
              <tr key={emp.id} className="border-b">
                <td className="py-2 px-4">{emp.id}</td>
                <td className="py-2 px-4">{emp.name}</td>
                <td className="py-2 px-4">{emp.email}</td>
                <td className="py-2 px-4">
                  <Link className="text-blue-600 hover:underline" to={`/employees/edit/${emp.id}`}>Edit</Link>
                </td>
              </tr>
            )) : <tr><td colSpan="4" className="text-center py-4">No employees found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
