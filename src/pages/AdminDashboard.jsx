const AdminDashboard = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="opacity-80">
          Next we add: product upload, stock tracking, sales totals, and approvals.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
