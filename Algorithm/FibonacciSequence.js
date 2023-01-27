// TODO // Fibonacci sequence :- A sequence in which each number is the sum of two preceeding ones.

//? For the given number 'n' , find the first n elements of the fibonacci sequence.



//! Fibonacci sequence upto 'N' natural number inside Array using Arrow function.
let fibonacciArray = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return console.log(fib);
}
//// console.log(fibonacciArray(10));
fibonacciArray(10);
//* Time Complexity :-  O(n) - Linear



//! Fibonacci sequence upto 'N' natural number using Arrow function.
let fibonacci = (n) => {
    let first_number = 0;
    let second_number = 1;
    console.log(first_number);
    console.log(second_number);

    let third_number;
    for (let i = 3; i <= n; i++) {
        third_number = first_number + second_number;
        console.log(third_number);
        first_number = second_number;
        second_number = third_number;
    }
}
fibonacci(10);
//* Time Complexity :-  O(n) - Linear
