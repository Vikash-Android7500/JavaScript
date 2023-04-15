/**Write a function called 'countLetters' 
 * that takes a string parameter and returns an 
 * object that contains a count of each letter in the string. */
function CountLetters(str) {

  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (counts[char]) {
      // If it is, increment the count by 1
      counts[char]++;
    }
    else {
      // If it's not, add it to the object with a count of 1
      counts[char] = 1;
    }
  }
  return counts;
}
const strLetters = CountLetters("WebDevelopment");
console.log(strLetters);