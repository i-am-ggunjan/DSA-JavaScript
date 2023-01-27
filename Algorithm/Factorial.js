// TODO // Factorial :- Factorial of a non-negative integer 'N', denoted 'N!', is the product of all positive integer less than or equal to 'N'. 

//? Factorial of zero(0) is 1.

//! factorial of any 'N' positive integer
let factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
        // fact = fact * i;
    }
    return console.log(fact);
}

factorial(5);
factorial(0);
//* Time Complexity :- Big-O = O(n) i.e. Linear

