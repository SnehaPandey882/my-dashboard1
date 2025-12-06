import { useState } from "react";

export default function Users() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Sneha Pandey", email: "sneha@gmail.com", status: "Active" },
    { id: 2, name: "Rohan Sharma", email: "rohan@gmail.com", status: "Inactive" },
    { id: 3, name: "Priya Mehta", email: "priya@gmail.com", status: "Active" },
    { id: 4, name: "Amit Joshi", email: "amit@gmail.com", status: "Pending" },
  ];

  // Filter by search
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 text-white">

      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-700 bg-[#1e1e22] text-white px-4 py-2 rounded-lg shadow-sm placeholder-gray-400"
        />
      </div>

      {/* Users Table */}
      <div className="bg-[#1a1a1d] rounded-xl shadow-md p-6">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-[#2a2a2d] text-gray-300">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-700 hover:bg-[#2d2d31] transition"
                >
                  <td className="p-3 text-gray-200">{user.id}</td>
                  <td className="p-3 text-gray-200">{user.name}</td>
                  <td className="p-3 text-gray-200">{user.email}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-white ${
                        user.status === "Active"
                          ? "bg-green-600"
                          : user.status === "Inactive"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-gray-500" colSpan="4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}
