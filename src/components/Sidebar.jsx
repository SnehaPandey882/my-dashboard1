import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, FileText, Settings, Menu, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";   // ⭐ NEW

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);   // ⭐ NEW

  return (
    <aside
      className={`
        h-screen p-4 transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        ${darkMode ? "bg-gray-900 text-white" : "bg-blue-700 text-white"}
      `}
    >
      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`
          mb-6 p-2 rounded-lg 
          ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-900 hover:bg-blue-800"}
        `}
      >
        <Menu size={20} />
      </button>

      {/* Navigation Menu */}
      <nav className="space-y-3">

        {/* Home */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
              flex items-center gap-3 p-2 rounded-lg
              ${isActive 
                ? darkMode ? "bg-gray-700" : "bg-blue-900" 
                : darkMode ? "hover:bg-gray-800" : "hover:bg-blue-800"
              }
            `
          }
        >
          <Home size={20} />
          {!collapsed && <span>Home</span>}
        </NavLink>

        {/* Users */}
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `
              flex items-center gap-3 p-2 rounded-lg
              ${isActive 
                ? darkMode ? "bg-gray-700" : "bg-blue-900"
                : darkMode ? "hover:bg-gray-800" : "hover:bg-blue-800"
              }
            `
          }
        >
          <Users size={20} />
          {!collapsed && <span>Users</span>}
        </NavLink>

        {/* Documents */}
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            `
              flex items-center gap-3 p-2 rounded-lg
              ${isActive 
                ? darkMode ? "bg-gray-700" : "bg-blue-900"
                : darkMode ? "hover:bg-gray-800" : "hover:bg-blue-800"
              }
            `
          }
        >
          <FileText size={20} />
          {!collapsed && <span>Documents</span>}
        </NavLink>

        {/* Settings */}
        <div
          className={`
            flex items-center justify-between
            p-2 rounded-lg cursor-pointer
            ${darkMode ? "hover:bg-gray-800" : "hover:bg-blue-800"}
          `}
        >
          <div className="flex items-center gap-3">
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </div>

          {/* 🌙 Dark Mode Toggle Button */}
          {!collapsed && (
            <button
              onClick={toggleTheme}
              className="ml-auto p-2 rounded-full hover:bg-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>

      </nav>
    </aside>
  );
}
