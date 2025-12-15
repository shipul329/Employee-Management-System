import { useEffect, useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";

function EmployeeForm({ editing, setEditing, refresh }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setDepartment(editing.department);
    }
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name.trim() || !department.trim()) {
      toast.error("Name and Department are required!");
      return;
    }

    try {
      if (editing) {
        await axios.put(`/employees/${editing.id}`, { name, department });
        toast.success("Employee updated successfully!");
        setEditing(null);
      } else {
        await axios.post("/employees", { name, department });
        toast.success("Employee added successfully!");
      }
      setName("");
      setDepartment("");
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {editing ? "Update" : "Add"}
      </button>
      {editing && (
        <button
          type="button"
          onClick={() => setEditing(null)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;
