import React from "react";
import { searchAlgorithms } from "../algorithms/search";
import { sortingAlgorithms } from "../algorithms/sort";

type Props = {
  selectedAlgorithm: string;
};

const CodeDisplay: React.FC<Props> = ({ selectedAlgorithm }) => {
  const code =
    searchAlgorithms[
      selectedAlgorithm as keyof typeof searchAlgorithms
    ]?.toString() ||
    sortingAlgorithms[
      selectedAlgorithm as keyof typeof sortingAlgorithms
    ]?.toString() ||
    "Algorithm not found.";

  return (
    <pre className="bg-gray-800 text-white p-4 rounded mt-4 overflow-auto">
      <code>{code}</code>
    </pre>
  );
};

export default CodeDisplay;
