import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", department: "" });

  useEffect(() => {
    if (id) setEmployee({ name: "John Doe", department: "IT" });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/employees");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          value={employee.department}
          onChange={(e) =>
            setEmployee({ ...employee, department: e.target.value })
          }
          placeholder="Department"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm; 
