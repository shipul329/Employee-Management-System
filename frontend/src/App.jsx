import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

import Login from "./pages/Login";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/employees"
          element={isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />}
        />

        <Route
          path="/add"
          element={isAuthenticated ? <AddEmployee /> : <Navigate to="/login" />}
        />

        <Route
          path="/edit/:id"
          element={isAuthenticated ? <EditEmployee /> : <Navigate to="/login" />}
        />

        <Route
          path="/delete/:id"
          element={isAuthenticated ? <DeleteEmployee /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
