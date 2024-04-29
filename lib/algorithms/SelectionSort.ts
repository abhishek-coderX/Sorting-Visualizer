import { swap } from "./utils";
import Algorithm from "./Algorithm";

class SelectionSort extends Algorithm {
    constructor() {
        super([[0, 0, 1]]);
    }

    resetAttributes(): void {
        this.sortingSteps = [];
        this.colorSortingSteps = [];
        this.comparisons = [[0, 0, 1]];
        this.numSwaps = [];
        this.sortedIdxs = [];
    }

    sort(array: number[]): void {
        this.comparisons = [];
        this.sortedIdxs = [];
        this.sortingSteps.push([...array]);
        this.quickSort(array, 0, array.length - 1);
        this.sortingSteps.push([...array]);
    }

    sortColors(array: ColorValue[]): void {
        this.comparisons = [];
        this.sortedIdxs = [];
        this.colorSortingSteps.push([...array]);
        this.quickSortColors(array, 0, array.length - 1);
        this.colorSortingSteps.push([...array]);
    }

    quickSort(array: number[], low: number, high: number): void {
        if (low < high) {
            const pi = this.partition(array, low, high);
            this.quickSort(array, low, pi - 1);
            this.quickSort(array, pi + 1, high);
        }
    }

    partition(array: number[], low: number, high: number): number {
        const pivot = array[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                this.swap(array, i, j);
            }
            this.comparisons.push([i, high, j]);
        }
        this.swap(array, i + 1, high);
        return i + 1;
    }

    quickSortColors(array: ColorValue[], low: number, high: number): void {
        if (low < high) {
            const pi = this.partitionColors(array, low, high);
            this.quickSortColors(array, low, pi - 1);
            this.quickSortColors(array, pi + 1, high);
        }
    }

    partitionColors(array: ColorValue[], low: number, high: number): number {
        const pivot = array[high][1];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (array[j][1] < pivot) {
                i++;
                this.swapColors(array, i, j);
            }
            this.comparisons.push([i, high, j]);
        }
        this.swapColors(array, i + 1, high);
        return i + 1;
    }

    swap(array: any[], i: number, j: number): void {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        this.numSwaps.push(this.numSwaps.length);
        this.sortedIdxs.push(-1);
        this.sortingSteps.push([...array]);
    }

    swapColors(array: any[], i: number, j: number): void {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        this.numSwaps.push(this.numSwaps.length);
        this.sortedIdxs.push(-1);
        this.colorSortingSteps.push([...array]);
    }

    isSky(idx: number, stepIdx: number): boolean {
        return stepIdx < this.comparisons.length && this.comparisons[stepIdx][0] === idx && !this.isOrange(idx, stepIdx);
    }

    isOrange(idx: number, stepIdx: number): boolean {
        return stepIdx < this.comparisons.length && this.comparisons[stepIdx][1] === idx;
    }

    isRose(idx: number, stepIdx: number): boolean {
        return stepIdx < this.comparisons.length && this.comparisons[stepIdx][2] === idx;
    }

    isSorted(idx: number, stepIdx: number): boolean {
        return this.sortedIdxs.slice(0, stepIdx).includes(idx) || this.allSorted(stepIdx) && !this.isOrange(idx, stepIdx);
    }

    allSorted(stepIdx: number): boolean {
        return stepIdx !== 0 && stepIdx >= this.sortedIdxs.length;
    }

}

export default SelectionSort;
