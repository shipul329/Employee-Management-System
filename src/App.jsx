import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeForm from "./components/EmployeeForm.jsx";

import { useState } from "react";

export default function App() {
  const [update, setUpdate] = useState(false);

  const fetchEmployees = () => setUpdate(!update);

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm fetchEmployees={fetchEmployees} />
      <EmployeeList fetchEmployees={fetchEmployees} />
    </div>
  );
}
