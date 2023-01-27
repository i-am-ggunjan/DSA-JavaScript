//! Binary search algorithm

function binarySearch(arr, target) {
    let left_index = 0;
    let right_index = arr.length - 1;

    while (left_index <= right_index) {
        let middle_index = Math.floor((left_index + right_index) / 2)

        if (target === arr[middle_index]) {
            return console.log(middle_index);;
        }
        if (target < arr[middle_index]) {
            right_index = middle_index - 1;
        } else {
            left_index = middle_index + 1;
        }
    }
    return console.log(-1);;
}

binarySearch([5,-2,20,2,10], 10);
binarySearch([5,-2,20,2,10], 2);
binarySearch([5,-2,20,2,10], -20);
binarySearch([5,-2,20,2,10], 30);


