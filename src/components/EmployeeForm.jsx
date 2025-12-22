import { useState, useEffect } from "react";
import api from "../api";

export default function EmployeeForm({ employee, onSave }) {
  const [name, setName] = useState(employee?.name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [department, setDepartment] = useState(employee?.department || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const empData = { name, email, department };
    try {
      if (employee?.id) {
        await api.put(`/employees/${employee.id}`, empData);
      } else {
        await api.post("/employees", empData);
      }
      onSave();
    } catch (err) {
      alert("Error saving employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  );
}
