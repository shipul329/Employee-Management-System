function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">EMS</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Dashboard</a>
        <a href="/employees" className="hover:underline">Employees</a>
      </div>
    </nav>
  );
}

export default Navbar;
