import React, { useState } from "react";
import AlgorithmSelector from "./components/AlgorithmSelector";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";
import CodeDisplay from "./components/CodeDisplay";

const App: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Algorithm Visualizer</h1>
      <AlgorithmSelector onSelect={setSelectedAlgorithm} />
      {selectedAlgorithm && (
        <>
          <AlgorithmVisualizer selectedAlgorithm={selectedAlgorithm} />
          <CodeDisplay selectedAlgorithm={selectedAlgorithm} />
        </>
      )}
    </div>
  );
};

export default App;
