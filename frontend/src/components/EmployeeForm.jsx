import { useState } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeForm({ isEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/employees/${id}`, { name, email, department });
      } else {
        await api.post("/employees", { name, email, department });
      }
      navigate("/employees");
    } catch {
      alert("Failed to save employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} required />
      <button type="submit">{isEdit ? "Update" : "Save"}</button>
    </form>
  );
}
