import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";   // ⭐ NEW
import { ChevronDown, LogOut, Settings, User, Moon, Sun } from "lucide-react";

export default function ProfileMenu({ onLogout, onProfile }) {
  const { user } = useContext(UserContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);   // ⭐ NEW
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-3 px-4 py-2 shadow rounded-full hover:shadow-lg transition
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
        `}
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
          {user.name ? user.name[0].toUpperCase() : "U"}
        </div>

        <span className="font-medium">{user.name || "User"}</span>

        <ChevronDown size={18} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={`absolute right-0 mt-2 w-52 shadow-lg rounded-xl border z-20 animate-fadeIn
            ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black"}
          `}
        >
          {/* User Info */}
          <div
            className={`px-4 py-3 border-b 
              ${darkMode ? "border-gray-700" : "border-gray-200"}
            `}
          >
            <p className="font-semibold">{user.name || "User"}</p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
              {user.email}
            </p>
          </div>

          {/* Profile */}
          <button
            className={`w-full flex gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
            onClick={() => {
              onProfile();
              setOpen(false);
            }}
          >
            <User size={18} /> Profile
          </button>

          {/* Settings */}
          <button
            className={`w-full flex gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Settings size={18} /> Settings
          </button>

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-full flex gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              onLogout();
              setOpen(false);
            }}
            className="w-full flex gap-3 px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
