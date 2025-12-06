import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserDetails() {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !phone || !age || !location) {
      alert("Please fill all fields");
      return;
    }

    // Save all user details in global context
    setUser((prev) => ({
      ...prev,
      name,
      phone,
      age,
      location,
    }));

    // Move to Dashboard
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          User Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your city or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg
                       hover:bg-purple-700 transition"
          >
            Continue to Dashboard
          </button>

        </form>
      </div>
    </div>
  );
}
