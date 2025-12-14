import { useEffect, useState } from "react";
import axios from "../services/api";
import EmployeeForm from "./EmployeeForm";

import { toast } from "react-toastify";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch employees!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await axios.delete(`/employees/${id}`);
      toast.success("Employee deleted!");
      fetchEmployees();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete employee!");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <EmployeeForm editing={editing} setEditing={setEditing} refresh={fetchEmployees} />
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.id}</td>
              <td className="border p-2">{emp.name}</td>
              <td className="border p-2">{emp.department}</td>
              <td className="border p-2">
                <button
                  onClick={() => setEditing(emp)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
