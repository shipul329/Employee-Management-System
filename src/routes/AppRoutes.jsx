import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Update imports to match your repo structure
import EmployeeList from "../pages/EmployeeList";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        {/* Add more routes here if you have other pages */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
