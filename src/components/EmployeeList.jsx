import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function EmployeeList({ fetchEmployees }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${API_BASE_URL}/employees`);
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${API_BASE_URL}/employees/${id}`);
    fetchData();
  };

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(e => (
          <li key={e.id}>
            {e.name} - {e.email} 
            <button onClick={() => deleteEmployee(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
