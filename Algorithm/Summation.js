//! Sum of 'n' Natural number 
function sum(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return console.log(res);
}
sum(5);
//// console.log(sum(5));
//// sum(prompt("Enter the number for summation upto that number"));
// Time Complexity :-  O(n) - Linear



//! Sum of 'n' Natural number
function summation(n) { 
    return (n * (n + 1)) / 2;
}
console.log(summation(100));
// Time Complexity :-  O(1) - Constant



//! Sum of value of Array  using Normal Named Function
function sumOfArray(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return console.log(res);
}
sumOfArray([10, 20, 5, 4, 60]);
// Time Complexity :-  O(n) - Linear



//! Sum of value of Array Using Arrow Function
let sumArray = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return console.log(res);
}
sumArray([10, 20, 5, 4, 60])
// Time Complexity :-  O(n) - Linear



//! Simple Program for summation  of Array
let ar = [10, 30, 50, 60];
let res = 0;
for (let i = 0; i < ar.length; i++) {
    res += ar[i];
}
console.log(res);
// Time Complexity :-  O(n) - Linear
