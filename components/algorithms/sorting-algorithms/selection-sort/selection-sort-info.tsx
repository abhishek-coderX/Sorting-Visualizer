import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import Info from "@/components/shared/info";

const SelectionSortInfo = () => {
  const pseudocode = (
    <Prism component="pre" className="language-markup" style={dracula}>
      {`selectionSort(array, low, high)
  if low < high
    pivotIdx = partition(array, low, high)
    selectionSort(array, low, pivotIdx - 1)
    selectionSort(array, pivotIdx + 1, high)

partition(array, low, high)
  pivot = array[high]
  i = low - 1

  for j = low to high - 1
    if array[j] <= pivot
      i++
      swap array[i] and array[j]
  
  swap array[i + 1] and array[high]
  return i + 1
`}
    </Prism>
  );

  const codePY = (
    <Prism language="python" style={dracula}>
      {`def selection_sort(arr, low, high):
    if low < high:
        pivot_idx = partition(arr, low, high)
        selection_sort(arr, low, pivot_idx - 1)
        selection_sort(arr, pivot_idx + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
`}
    </Prism>
  );

  const codeJS = (
    <Prism language="javascript" style={dracula}>
      {`function selectionSort(array, low, high) {
    if (low < high) {
        const pivotIdx = partition(array, low, high);
        selectionSort(array, low, pivotIdx - 1);
        selectionSort(array, pivotIdx + 1, high);
    }
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}
`}
    </Prism>
  );

  const codeTS = (
    <Prism language="typescript" style={dracula}>
      {`function selectionSort(array: number[], low: number, high: number): void {
    if (low < high) {
        const pivotIdx = partition(array, low, high);
        selectionSort(array, low, pivotIdx - 1);
        selectionSort(array, pivotIdx + 1, high);
    }
}

function partition(array: number[], low: number, high: number): number {
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}
`}
    </Prism>
  );

  return (
    <Info
      heading="Selection Sort"
      pseudocode={pseudocode}
      codePY={codePY}
      codeJS={codeJS}
      codeTS={codeTS}
    />
  );
};

export default SelectionSortInfo;
