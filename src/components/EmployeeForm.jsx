import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function EmployeeForm({ fetchEmployees }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async e => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/employees`, { name, email, department: "IT", position:"Dev", salary: 5000 });
    setName(""); setEmail("");
    fetchEmployees();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
