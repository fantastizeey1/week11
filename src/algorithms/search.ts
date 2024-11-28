export const searchAlgorithms = {
  "Linear Search": (arr: number[], target: number) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  },
  "Binary Search": (arr: number[], target: number) => {
    const sortedArr = [...arr].sort((a, b) => a - b); // Sort array
    let left = 0,
      right = sortedArr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArr[mid] === target)
        return arr.indexOf(sortedArr[mid]); // Get original index
      else if (sortedArr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  },
  "Jump Search": (arr: number[], target: number) => {
    const sortedArr = [...arr].sort((a, b) => a - b); // Sort the array
    const n = sortedArr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (sortedArr[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
      if (prev >= n) return -1; // Target not found
    }

    while (sortedArr[prev] < target) {
      prev++;
      if (prev === Math.min(step, n)) return -1; // Target not found
    }

    return sortedArr[prev] === target ? arr.indexOf(sortedArr[prev]) : -1;
  },
};
