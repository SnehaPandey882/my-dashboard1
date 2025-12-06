export default function ProfileModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">

        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          User Profile
        </h2>

        <div className="space-y-4">

          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Full Name:</p>
            <p className="text-xl text-blue-700">{user.name}</p>
          </div>

          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Email:</p>
            <p className="text-xl text-purple-700">{user.email}</p>
          </div>

          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Phone:</p>
            <p className="text-xl text-green-700">{user.phone}</p>
          </div>

          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Age:</p>
            <p className="text-xl text-indigo-700">{user.age}</p>
          </div>

          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Location:</p>
            <p className="text-xl text-red-700">{user.location}</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Close
        </button>

      </div>
    </div>
  );
}
