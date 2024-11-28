# Algorithm Visualizer

A React application to demonstrate and visualize various algorithms, including search and sorting techniques. This project is designed to help users understand how algorithms work by inputting data and seeing results in real-time.

## Features

- **Sorting Algorithms**:
  - Bubble Sort
  - Quick Sort
  - Merge Sort
- **Search Algorithms**:
  - Linear Search
  - Binary Search
  - Jump Search
- Dynamic input handling for arrays and target values.
- Real-time results display.
- Clean and modular code structure with reusable components.
- Styled using Tailwind CSS.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Algorithm Logic**: Implemented in JavaScript/TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/algorithm-visualizer.git

   cd algorithm-visualizer

   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install

   ```

3. Start the application:

```bash
npm start
# or
yarn start
```

Open your browser and navigate to [http://localhost:3000](<http://localhost:300>

## Usage

1. Select an algorithm from the dropdown menu.
2. Input the required data:

   - For sorting algorithms, provide an array (e.g., [3, 1, 2]).
   - For search algorithms, provide an array and a target value (e.g., [3, 1, 2] and 2).

3. Click the Run button to see the results.
4. View the output in the results panel.

## File Structure

```bash
src/
├── algorithms/
│   ├── search.ts       # Search algorithms logic
│   ├── sort.ts         # Sorting algorithms logic
├── components/
│   ├── codeDisplay.tsx
│   ├── AlgorithmVisualizer.tsx # Main visualization component
├── App.tsx             # Main app component
└── index.tsx           # React entry point
```

## Algorithms Included

### Sorting Algorithms

- Bubble Sort: A simple comparison-based sorting algorithm.
- Quick Sort: A divide-and-conquer algorithm for efficient sorting.
- Merge Sort: A divide-and-conquer algorithm that merges sorted subarrays.

### Search Algorithms

- Linear Search: Sequentially checks each element for a match.
- Binary Search: Searches in a sorted array using a divide-and-conquer approach.
- Jump Search: Searches in a sorted array by jumping steps.

## Future Enhancements

## Add more algorithms

- Graph algorithms (e.g., BFS, DFS, Dijkstra's).
  - String algorithms (e.g., Rabin-Karp, KMP).
  - Add animations for visualizing algorithm steps.
- Support for more data types (e.g., strings, objects).
- Enhanced UI/UX with light and dark themes.

## License

This project is licensed under the MIT License.
