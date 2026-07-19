const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
};

const testBinarySearch = (arr: number[], target: number) => {
  let result = binarySearch(arr, target);

  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found");
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
testBinarySearch(arr, target);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target2 = 11;
testBinarySearch(arr2, target2);