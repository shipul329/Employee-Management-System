import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await API.get("/employees");
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Employees</h2>
      <Link to="/employees/new">Add Employee</Link>
      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.name} - {e.department} - <Link to={`/employees/${e.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;  
