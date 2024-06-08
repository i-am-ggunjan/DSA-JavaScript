let n = 3;
let m = 4;

//! ========================
let str1 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    str1 += j;
  }
  str1 += "\n";
}
console.log(str1);

//! ========================
let str2 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str2 += j;
  }
  str2 += "\n";
}
console.log(str2);

//! ========================
let str3 = "";
let temp3 = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    str3 += temp3;
    temp3++;
  }
  str3 += "\n";
}
console.log(str3);

//! ========================
let str4 = "";
let temp4 = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str4 += temp4;
    temp4++;
  }
  str4 += "\n";
}
console.log(str4);

//! ========================
let str5 = "";
let temp5 = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (j == m) {
      str5 += temp5;
      temp5++;
    } else {
      str5 += temp5 + "|";
      temp5++;
    }
  }
  str5 += "\n";
}
console.log(str5);

let arr = [10, 80, 90, 100, 60, 40, 50, 10, 50, 60, 90, 40];
let new_arr = arr.filter((value, index) => {
  if (arr.indexOf(value) == index) {
    return value;
  }
});
console.log(new_arr);

//! ======================
function uniquee(arr) {
  arr.map((value, index) => {
    if (arr.indexOf(value) == index) {
      console.log(value);
    }
  });
}
uniquee(arr);

// ! =====================
let set = new Set(arr);
console.log(Array.from(set));
