import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "./Navbar";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/employees", { name, email });
      navigate("/employees");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Add Employee</h2>
      <form onSubmit={handleAdd}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
