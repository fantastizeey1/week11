export const sortingAlgorithms = {
  "Bubble Sort": (arr: number[]): number[] => {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - i - 1; j++) {
        if (sorted[j] > sorted[j + 1]) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
    return sorted;
  },
  "Quick Sort": (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter((x) => x <= pivot);
    const right = arr.slice(1).filter((x) => x > pivot);
    return [
      ...sortingAlgorithms["Quick Sort"](left),
      pivot,
      ...sortingAlgorithms["Quick Sort"](right),
    ];
  },
  "Merge Sort": (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = sortingAlgorithms["Merge Sort"](arr.slice(0, mid));
    const right = sortingAlgorithms["Merge Sort"](arr.slice(mid));
    const merge = (left: number[], right: number[]): number[] => {
      let result: number[] = [];
      while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift()! : right.shift()!);
      }
      return [...result, ...left, ...right];
    };
    return merge(left, right);
  },
};
