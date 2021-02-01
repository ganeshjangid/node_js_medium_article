const million = 100000;
const arr = Array(million);

console.time("⏳");
for (let i = arr.length; i > 0; i--) {} // for(reverse) :- 1.5ms
for (let i = 0; i < arr.length; i++) {} // for          :- 1.6ms

arr.forEach((v) => v); // foreach      :- 2.1ms
for (const v of arr) {
} // for...of     :- 11.7ms

console.timeEnd("⏳");

// Which for loop is faster?
// Answer: for (reverse)
// The most surprising thing is when I tested it on a local machine I started believing that for (reverse) is the fastest among all the for loops. Let me share one example. Take an array with over 1 million items and execute for a loop.
// Disclaimer: console.time() result accuracy highly de

// Conclusion
// for fastest, but poor in readability.
// foreach fast, control over iteration property.
// for...of slow, but sweeter.
// for...in slow, less handy.

//For Of
const arr1 = [3, 5, 7];
const str = "hello";

for (const i of arr1) {
  console.log(i);
}

for (const i of str) {
  console.log(i);
}

// Main Difference between for in and for of

let arr2 = [4, 5, 6];

for (let i in arr2) {
  console.log(i); // '0', '1', '2'
}

for (let i of arr2) {
  console.log(i); // '4', '5', '6'
}
