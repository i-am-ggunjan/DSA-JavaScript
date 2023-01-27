//! Bubble Sort Algorithm

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

let a = [30, 2, 40, 21, 50, 2, 0, 64, 789, 410];
bubbleSort(a);

//* Time Complexity :- Big-O = O(n^2)
