import { useState } from "react";

const UploadForm = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file || !jd.trim()) {
      alert("Please upload resume and enter JD");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jd);

    try {
      setLoading(true);

    const res = await fetch("https://resumeparser-l1w9.onrender.com/api/match", {
  method: "POST",
  body: formData,
});

      const data = await res.json();

      
      setResult({ ...data });

    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">

      {/* Resume Upload */}
      <label className="block mb-2 font-semibold">
        Upload Resume (PDF)
      </label>

      <input
        type="file"
        accept=".pdf"
        className="mb-4 w-full border p-2 rounded-lg"
        onChange={(e) => setFile(e.target.files[0])}
        key={file ? file.name : "empty"} 
      />

      {/* JD Input */}
      <label className="block mb-2 font-semibold">
        Paste Job Description
      </label>

      <textarea
        className="w-full h-32 border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Paste JD here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-2 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Matching..." : "Match Resume"}
      </button>
    </div>
  );
};

export default UploadForm;