import api from "../api/axios";

export default function DeleteEmployee({ id, onDeleted }) {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure to delete this employee?")) return;
    try {
      await api.delete(`/employees/${id}`);
      onDeleted();
    } catch {
      alert("Failed to delete employee");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}
