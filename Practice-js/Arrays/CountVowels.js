/**Write a program that takes a string and prints out 
 * the number of vowels in the string. */
function CountVowels(str) {
     const vowels = ["v", "i", "k", "a", "s"];
     let count = 0;

     for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i].toLowerCase())) {
            count++;
          }
     }
     return count;
}

console.log(`
    ${CountVowels("CodeHelp")} \n 
    ${CountVowels("hello")} \n 
    ${CountVowels("World")} \n 
    ${CountVowels("vikas")} \n 
    ${CountVowels("JavaScript")} \n 
    ${CountVowels("Pramery")}
`);