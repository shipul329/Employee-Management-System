import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#1d4ed8", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Dashboard</Link>
      <Link to="/employees" style={{ color: "white", marginRight: "1rem" }}>Employees</Link>
      <button
        onClick={handleLogout}
        style={{
          marginLeft: "auto",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          padding: "0.3rem 0.6rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
