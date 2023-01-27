//! A integer 'N' is power of two or not? 
function isPowerOfTwo(n) {
    if (n<1) {
        return console.log(false);;
    }
    while (n>1) {
        if (n%2!==0) {
            return console.log(false);;
        }
        n=n/2
    }
    return console.log(true);;
}

isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(5);
isPowerOfTwo(12);
isPowerOfTwo(16);

//* Time Complexity :- Big-O = O(logn)
