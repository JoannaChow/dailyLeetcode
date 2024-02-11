// merge sort: nlogn
function sortArray(nums: number[]): number[] {
    function merge(left, middle, right) {
        let l1 = middle - left + 1;
        let l2 = right - middle;
        let arr1 = new Array(l1);
        let arr2 = new Array(l2);

        for (let i = 0; i < l1; i++) {
            arr1[i] = nums[left + i];
        }
        for (let i = 0; i < l2; i++) {
            arr2[i] = nums[middle + i + 1];
        }

        let i = 0, j = 0, k = left;
        while (i < l1 && j < l2) {
            if (arr1[i] < arr2[j]) {
                nums[k] = arr1[i];
                i++;
            } else {
                nums[k] = arr2[j];
                j++;
            }
            k++;
        }
        while (i < l1) {
            nums[k] = arr1[i];
            i++;
            k++;
        }
        while (j < l2) {
            nums[k] = arr2[j];
            j++;
            k++;
        }
    }
    function mergesort(left, right) {
        if (left >= right) return;

        let middle = Math.floor((left + right) / 2);
        mergesort(left, middle);
        mergesort(middle + 1, right);
        merge(left, middle, right);
    }
    mergesort(0, nums.length - 1);
    return nums;
}
/* quicksort: nlogn (average), n^2 (worst)
function sortArray(nums: number[]): number[] {
    function partition(low, high) {
        let pivot = nums[high];
        let i = low - 1;
        for (let j = low; j <= high - 1; j++) {
            if (nums[j] < pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
        return i + 1;
    }
    function quicksort(low, high) {
        if (low >= high) return;
        let pi = partition(low, high);
        quicksort(low, pi - 1);
        quicksort(pi + 1, high);
    }
    quicksort(0, nums.length - 1);
    return nums;
};
*/