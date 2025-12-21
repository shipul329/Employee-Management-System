import { useEffect, useState } from "react";
import axios from "../api/axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#FF6666"];

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const empRes = await axios.get("/employees");
      const userRes = await axios.get("/users");
      setEmployees(empRes.data);
      setUsers(userRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Fetch initially
    fetchData();

    // Set up live polling every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Department data for charts
  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(departmentCounts).map(([name, value]) => ({ name, value }));
  const barData = Object.entries(departmentCounts).map(([department, count]) => ({
    department,
    count,
  }));

  // Last 5 employees/users
  const recentEmployees = employees.slice(-5).reverse();
  const recentUsers = users.slice(-5).reverse();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Employees</h2>
          <p className="text-3xl">{employees.length}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl">{users.length}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <p className="text-3xl">{Object.keys(departmentCounts).length}</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Recent Employees</h2>
          <ul className="mt-2 text-sm">
            {recentEmployees.map((emp) => (
              <li key={emp.id}>{emp.name}</li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Recent Users</h2>
          <ul className="mt-2 text-sm">
            {recentUsers.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Employees by Department (Pie)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Employees per Department (Bar)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
