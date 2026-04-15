import { useState } from "react";
import UploadForm from "../components/UploadForm";
import Result from "../components/Result";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Resume Matcher 🚀
      </h1>

      <UploadForm setResult={setResult} />
      <Result result={result} />
    </div>
  );
};

export default Home;