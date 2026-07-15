const linearSearch = (arr: number[], target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  
  return -1;
};

const testLinearSearch = (arr: number[], target: number) => {
  let result = linearSearch(arr, target);

  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array.");
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
testLinearSearch(arr, target);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target2 = 11;
testLinearSearch(arr2, target2);