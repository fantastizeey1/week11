import React, { useState } from "react";
import { sortingAlgorithms } from "../algorithms/sort";
import { searchAlgorithms } from "../algorithms/search";

// Define the union type for algorithm names
// type AlgorithmNames =
//   | "Bubble Sort"
//   | "Quick Sort"
//   | "Merge Sort"
//   | "Linear Search"
//   | "Binary Search";

type AlgorithmNames =
  | keyof typeof searchAlgorithms
  | keyof typeof sortingAlgorithms;

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
        output = searchAlgorithms[
          selectedAlgorithm as keyof typeof searchAlgorithms
        ]?.(arr, target);
      } else if (selectedAlgorithm in sortingAlgorithms) {
        if (!Array.isArray(parsedInput)) {
          setResult(
            "Invalid input for sorting! Please provide an array in JSON format: [array]"
          );
          return;
        }
        output =
          sortingAlgorithms[
            selectedAlgorithm as keyof typeof sortingAlgorithms
          ]?.(parsedInput);
      }

      setResult(JSON.stringify(output, null, 2));
    } catch (error) {
      setResult("An error occurred while running the algorithm.");
    }
  };

  return (
    <div className="bg-white shadow-xl p-8 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Selected Algorithm:{" "}
        <span className="text-blue-600">{selectedAlgorithm}</span>
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
        className="w-full h-32 border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
      />

      <button
        onClick={handleRun}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
      >
        Run Algorithm
      </button>

      {result && (
        <pre className="mt-6 bg-gray-100 text-gray-800 p-4 rounded-lg whitespace-pre-wrap shadow-md border-l-4 border-blue-500">
          {result}
        </pre>
      )}
    </div>
  );
};

export default AlgorithmVisualizer;
