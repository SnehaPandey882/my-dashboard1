import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";  // ⭐ NEW
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import UserChart from "../components/UserChart";
import ProfileMenu from "../components/ProfileMenu";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);  // ⭐ NEW
  const navigate = useNavigate();

  const [showProfileCard, setShowProfileCard] = useState(false);

  // Logout function
  function handleLogout() {
    localStorage.removeItem("userData");

    setUser({
      email: "",
      name: "",
      phone: "",
      age: "",
      location: "",
    });

    navigate("/");
  }

  return (
    <div
      className={`
        min-h-screen flex 
        transition-all duration-300 
        ${darkMode ? "bg-gray-950 text-gray-200" : "bg-gray-100 text-gray-900"}
      `}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Bar */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">
            Welcome, {user.name || user.email || "User"} 👋
          </h1>

          {/* Profile Menu */}
          <ProfileMenu
            onLogout={handleLogout}
            onProfile={() => setShowProfileCard(true)}
          />
        </header>

        {/* Profile Card Modal */}
        {showProfileCard && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div
              className={`
                p-8 rounded-xl shadow-xl w-96 
                ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
              `}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                User Profile
              </h2>

              <div className="space-y-3">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Location:</strong> {user.location}</p>
              </div>

              <button
                onClick={() => setShowProfileCard(false)}
                className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* User Information Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            { title: "Full Name", value: user.name, color: "text-blue-400" },
            { title: "Email", value: user.email, color: "text-purple-400" },
            { title: "Phone", value: user.phone, color: "text-green-400" },
            { title: "Location", value: user.location, color: "text-red-400" },
            { title: "Age", value: user.age, color: "text-indigo-400" },
          ].map((item, i) => (
            <div
              key={i}
              className={`
                p-6 rounded-xl shadow-md transition 
                ${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"}
              `}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className={`text-2xl font-bold mt-2 ${item.color}`}>
                {item.value || "Not Entered"}
              </p>
            </div>
          ))}

        </section>

        {/* Analytics Section */}
        <section
          className={`
            mt-12 p-6 rounded-xl shadow-md transition
            ${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"}
          `}
        >
          <UserChart darkMode={darkMode} />
        </section>

      </main>
    </div>
  );
}
