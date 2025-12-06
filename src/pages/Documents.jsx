import { useState, useEffect } from "react";

export default function Documents() {

  // Load documents from localStorage OR use default list
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem("documents");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Aadhar Card", status: "Approved" },
          { id: 2, title: "PAN Card", status: "Done" },
          { id: 3, title: "Address Proof", status: "Done" }, // CHANGED from Rejected to Done
        ];
  });

  // Save to localStorage whenever documents update
  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);

  // Handle Upload
  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const newDoc = {
      id: documents.length + 1,
      title: file.name,
      status: "Done", // SET DONE
    };

    setDocuments([...documents, newDoc]);
  }

  return (
    <div className="p-8 bg-gray-950 min-h-screen text-gray-100">

      <h1 className="text-3xl font-bold mb-6">Documents</h1>

      {/* Upload Section */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-300">Upload Document</label>

        <input
          type="file"
          onChange={handleUpload}
          className="border border-gray-700 rounded-lg p-2 w-full cursor-pointer bg-gray-800 text-gray-200"
        />
      </div>

      {/* Documents Table */}
      <div className="bg-gray-900 rounded-xl shadow-md p-6">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-800 text-left text-gray-200">
              <th className="p-3">ID</th>
              <th className="p-3">Document Name</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-700">
                <td className="p-3">{doc.id}</td>
                <td className="p-3">{doc.title}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-white
                      ${
                        doc.status === "Approved"
                          ? "bg-green-600"
                          : doc.status === "Done"
                          ? "bg-yellow-500"
                          : "bg-blue-600"
                      }
                    `}
                  >
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
