//! Check number is Integer or not
function checkInteger(n) {
  if (n % 1 === 0) {
    console.log("Integer");
  } else {
    console.log("Not Integer");
  }
}
checkInteger(6);

//! Check number is Prime or not
function checkPrime(n) {
  let count = 0;
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
}
checkPrime(20);

//! Reverse the number
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  // console.log(rev);
  return rev;
}
console.log(reverseNumber(456));

console.log("==============");
//! Palindrome Number
function checkPalindrome(n) {
  if (n == reverseNumber(n)) {
    console.log("Palindrome Number");
  } else {
    console.log("Not Palindrome Number");
  }
}
checkPalindrome(15651);
