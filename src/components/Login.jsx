import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async e => {
    e.preventDefault();
    const res = await axios.post(`${API_BASE_URL}/auth/register`, { username, password });
    localStorage.setItem("token", res.data.token || "dummy"); // replace with real JWT later
    alert("User registered/logged in!");
  };

  return (
    <form onSubmit={login}>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login/Register</button>
    </form>
  );
}
