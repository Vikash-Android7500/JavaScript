/***Write a function that takes an array
 * of numbers as an argument and returns the sum
 * of all the numbers in the array. */
function SumArrayNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(SumArrayNumbers(numbers1));

const numbers2 = [10, 20, 30];
console.log(SumArrayNumbers(numbers2));

const numbers3 = [-1, 2, -3, 4, -5];
console.log(SumArrayNumbers(numbers3));
