// TODO // Prime Number :- A number that can be divided exactly only by itself and 1.

//? 1 is neither prime nor composite

//! Check prime without using count variable.
let isPrime = (n) => {
    if (n < 2) {
        return console.log(false);
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return console.log(false);
        }
        else {
            return console.log(true);
        }
    }
}
isPrime(1);
isPrime(5);
isPrime(4);
//* Time Complexity :- Big-O = O(n/2)



//! Check prime without using count variable and more optimized.
let isPrimeOptimize = (n) => {
    if (n < 2) {
        return console.log(false);
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return console.log(false);
        }
        else {
            return console.log(true);
        }
    }
}
isPrimeOptimize(1);
isPrimeOptimize(5);
isPrimeOptimize(4);
//* Time Complexity :- Big-O = O(sqrt(n))




//! Check prime using count variable.
function checkPrime(n) {
    if (n < 2) {
        return console.log(false);
    }
    let count = 0;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 0) {
        return console.log(true);;
    } else {
        return console.log(false);;
    }
}
checkPrime(4);
checkPrime(5);
checkPrime(1);
//* Time Complexity :- Big-O = O(n/2)



//! Check prime and print number is prime or not. 
function prime(n) {
    if (n < 2) {
        return console.log("1 is Neither Prime nor Composite");
    }
    let count = 0;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 0) {
        console.log("Number is prime");
    } else {
        console.log("Number is not prime");
    }
}
prime(4);
prime(5);
prime(1);
//* Time Complexity :- Big-O = O(n/2)
