const originalString = "vikash";

function ReverseString(str) {
     const ReverseString = str.split("").reverse().join("");
     return ReverseString;
}
console.log(`Reverse String: ${ReverseString(originalString)}`);