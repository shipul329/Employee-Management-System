import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/employees"
      element={
        <ProtectedRoute>
          <EmployeeList />
        </ProtectedRoute>
      }
    />
    <Route
      path="/employees/new"
      element={
        <ProtectedRoute>
          <EmployeeForm />
        </ProtectedRoute>
      }
    />
    <Route
      path="/employees/:id"
      element={
        <ProtectedRoute>
          <EmployeeForm />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
