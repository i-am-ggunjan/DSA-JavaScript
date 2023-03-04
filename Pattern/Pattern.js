let n = 5;
//? let n = prompt("Enter the numnber for print pattern")

//! PatternSolidReactangle
let string1 = "";
for (let i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

//! Pattern Half Pyramid along +ve X-axis
let string2 = "";
for (let i = 0; i < n; i++) {
  for (j = 0; j < i + 1; j++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);

//! Pattern Inverted Half Pyramid along +ve X_axis
let string3 = "";
for (let i = 0; i < n; i++) {
  for (j = n; j > i; j--) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);

//! Pattern Half Pyramid along -ve X-axis
let string4 = "";
for (let i = 0; i < n; i++) {
  for (let j = n; j > i + 1; j--) {
    string4 += " ";
  }
  for (j = 0; j < i + 1; j++) {
    string4 += "*";
  }
  string4 += "\n";
}
console.log(string4);

//! Pattern Inverted Half Pyramid along -ve X_axis
let string5 = "";
for (let i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    string5 += " ";
  }
  for (j = n; j > i; j--) {
    string5 += "*";
  }
  string5 += "\n";
}
console.log(string5);

//! Diamond
console.log("Diamond");
let string6 = "";
for (let i = 0; i < n; i++) {
  for (let j = n; j > i + 1; j--) {
    string6 += " ";
  }
  for (j = 0; j < i + 1; j++) {
    string6 += "* ";
  }
  string6 += "\n";
}
for (let i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    string6 += " ";
  }
  for (j = n - 1; j > i; j--) {
    string6 += " *";
  }
  string6 += "\n";
}
console.log(string6);

// ! New Diamond
console.log("New Diamond");
let string7 = "";
for (let i = 0; i < n; i++) {
  for (let j = n; j > i + 1; j--) {
    string7 += " ";
  }
  for (j = 0; j < i + 1; j++) {
    string7 += "*";
  }
  for (j = 0; j < i; j++) {
    string7 += "*";
  }
  string7 += "\n";
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    string7 += " ";
  }
  for (j = n - 1; j > i; j--) {
    string7 += "*";
  }
  for (j = n - 2; j > i; j--) {
    string7 += "*";
  }
  string7 += "\n";
}

console.log(string7);
