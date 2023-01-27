//! Linear search algorithm

function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return console.log(i);
        }
    }
    return console.log(-1);
}

linearSearch([-5, 2, 10, 4, 6], 10);
linearSearch([-5, 2, 10, 4, 6], 6);
linearSearch([-5, 2, 10, 4, 6], 20);

//* Time Complexity :- Big-O = O(n)