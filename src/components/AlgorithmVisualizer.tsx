import React, { useState } from "react";
import { sortingAlgorithms } from "../algorithms/sort";
import { searchAlgorithms } from "../algorithms/search";

// Define the union type for algorithm names
type AlgorithmNames =
  | "Bubble Sort"
  | "Quick Sort"
  | "Merge Sort"
  | "Linear Search"
  | "Binary Search";

type AlgorithmVisualizerProps = {
  selectedAlgorithm: AlgorithmNames;
};

const AlgorithmVisualizer: React.FC<AlgorithmVisualizerProps> = ({
  selectedAlgorithm,
}) => {
  const [input, setInput] = useState<string>(""); // JSON input
  const [result, setResult] = useState<string | null>(null);

  const isValidJSON = (input: string): boolean => {
    try {
      JSON.parse(input);
      return true;
    } catch {
      return false;
    }
  };

  const handleRun = () => {
    if (!isValidJSON(input)) {
      setResult("Invalid input! Please enter valid JSON.");
      return;
    }

    try {
      const parsedInput = JSON.parse(input);
      let output;

      if (selectedAlgorithm in searchAlgorithms) {
        if (
          !Array.isArray(parsedInput.arr) ||
          parsedInput.target === undefined
        ) {
          setResult(
            'Invalid input for search! Please provide JSON in the format: { "arr": [array], "target": value }'
          );
          return;
        }
        const { arr, target } = parsedInput;
        output = searchAlgorithms[selectedAlgorithm]?.(arr, target);
      } else if (selectedAlgorithm in sortingAlgorithms) {
        if (!Array.isArray(parsedInput)) {
          setResult(
            "Invalid input for sorting! Please provide an array in JSON format: [array]"
          );
          return;
        }
        output = sortingAlgorithms[selectedAlgorithm]?.(parsedInput);
      }

      setResult(JSON.stringify(output, null, 2));
    } catch (error) {
      setResult("An error occurred while running the algorithm.");
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Selected Algorithm: {selectedAlgorithm}
      </h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          selectedAlgorithm in searchAlgorithms
            ? selectedAlgorithm === "Binary Search"
              ? 'Enter input as JSON (e.g., { "arr": [1, 2, 3, 7, 8], "target": 7 })'
              : 'Enter input as JSON (e.g., { "arr": [3, 1, 2], "target": 2 })'
            : selectedAlgorithm in sortingAlgorithms
            ? "Enter input as JSON (e.g., [3, 1, 2, 8, 7])"
            : "Enter input as JSON"
        }
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleRun}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Run Algorithm
      </button>
      {result && (
        <pre className="mt-4 bg-gray-200 text-gray-800 p-4 rounded-lg whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </div>
  );
};

export default AlgorithmVisualizer;
