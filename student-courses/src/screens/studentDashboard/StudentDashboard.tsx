import React from "react";
import Dashboard from "../../components/Dashboard";

const StudentDashboard: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-blue-500 mb-5">
        Student Dashboard
      </h1>
      <Dashboard />
    </div>
  );
};

export default StudentDashboard;
