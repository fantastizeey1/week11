import React from "react";

type Props = {
  onSelect: (algorithm: string) => void;
};

const AlgorithmSelector: React.FC<Props> = ({ onSelect }) => {
  const algorithms = [
    "Linear Search",
    "Binary Search",
    "Jump Search",
    "Bubble Sort",
    "Quick Sort",
  ];

  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 rounded border"
      name="select"
    >
      <option value="">Select an Algorithm</option>
      {algorithms.map((algo) => (
        <option key={algo} value={algo}>
          {algo}
        </option>
      ))}
    </select>
  );
};

export default AlgorithmSelector;
