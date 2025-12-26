import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import DeleteEmployee from "../components/DeleteEmployee";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEmployees(); }, []);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={() => navigate("/employees/add")}>Add Employee</button>
      {employees.length === 0 ? <p>No employees found</p> : (
        <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <button onClick={() => navigate(`/employees/edit/${emp.id}`)}>Edit</button>
                  <DeleteEmployee id={emp.id} onDeleted={() => setEmployees(employees.filter(e => e.id !== emp.id))}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
