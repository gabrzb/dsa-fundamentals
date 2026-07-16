const bubbleSort = (arr: number[]): number[] => { 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const testBubbleSort = (arr: number[]) => { 
  console.log(`Original array: ${arr}`);
  const sortedArr = bubbleSort(arr);
  console.log(`Sorted array: ${sortedArr}`);
}

let arr = [64, 34, 25, 12, 22, 11, 90];
testBubbleSort(arr);