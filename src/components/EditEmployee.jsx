import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "./Navbar";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchEmployee = async () => {
    try {
      const res = await api.get(`/api/employees/${id}`);
      setName(res.data.name);
      setEmail(res.data.email);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/employees/${id}`, { name, email });
      navigate("/employees");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h2>Edit Employee</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
