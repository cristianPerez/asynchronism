/**
 * Callback is a function which receive another function
 * for call inside.
 */

function add(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, add));

function data(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

data(printDate);