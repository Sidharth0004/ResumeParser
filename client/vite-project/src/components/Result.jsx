const Result = ({ result }) => {
  if (!result) return null;

  const job = result.matchingJobs?.[0];

  return (
    <div className="mt-6 bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-4 text-blue-700">
        Result
      </h2>

      <p className="mb-2">
        <strong>Matching Score:</strong> {job?.matchingScore || 0}%
      </p>

      <h3 className="font-semibold mt-4 mb-2">Skills Analysis:</h3>

      <ul>
        {job?.skillsAnalysis?.map((item, index) => (
          <li key={index} className="flex justify-between border-b py-1">
            <span>{item.skill}</span>
            <span>
              {item.presentInResume ? "✅" : "❌"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;