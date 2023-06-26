
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1; 
    const currentVar = arr[i];
    while (j >= 0 && arr[j] > currentVar) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVar;
  }
  return arr;
}

const myArray = [3, 6, 2, 1, 8, 4];
console.log(insertionSort(myArray)); 
