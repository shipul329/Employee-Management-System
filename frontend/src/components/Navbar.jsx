import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/employees">Employees</Link> |{" "}
      <Link to="/add">Add Employee</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
