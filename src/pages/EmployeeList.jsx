import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const res = await api.get("/api/employees"); // adjust endpoint
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await api.delete(`/api/employees/${id}`);
      toast.success("Employee deleted");
      fetchEmployees();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete employee");
    }
  };

  // Edit employee
  const startEdit = (emp) => {
    setEditing(emp.id);
    setName(emp.name);
    setEmail(emp.email);
  };

  const cancelEdit = () => {
    setEditing(null);
    setName("");
    setEmail("");
  };

  const saveEdit = async (id) => {
    try {
      await api.put(`/api/employees/${id}`, { name, email });
      toast.success("Employee updated");
      cancelEdit();
      fetchEmployees();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update employee");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>
                  {editing === emp.id ? (
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    emp.name
                  )}
                </td>
                <td>
                  {editing === emp.id ? (
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    emp.email
                  )}
                </td>
                <td>
                  {editing === emp.id ? (
                    <>
                      <button onClick={() => saveEdit(emp.id)}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(emp)}>Edit</button>
                      <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
