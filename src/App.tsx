import React, { useState } from "react";
import AlgorithmSelector from "./components/AlgorithmSelector";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";
import CodeDisplay from "./components/CodeDisplay";

const App: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<any>("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Algorithm Visualizer
        </h1>

        {/* Algorithm Selector */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <AlgorithmSelector onSelect={setSelectedAlgorithm} />
          </div>
        </div>

        {/* Algorithm Visualizer and Code Display */}
        {selectedAlgorithm && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
              <AlgorithmVisualizer selectedAlgorithm={selectedAlgorithm} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <CodeDisplay selectedAlgorithm={selectedAlgorithm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
