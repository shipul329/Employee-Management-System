import React from "react";
import { ToastContainer } from "react-toastify";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <div>
      <EmployeeList />
      <ToastContainer />
    </div>
  );
}

export default App; 
