/**Write a function that takes an array 
 * of objects and returns an array 
 * of all the values of a specified property name */
function GetPropertyValues(arr, propName) {
     const values = arr.map( (obj) => obj[propName]);
     return values;
}

const people = [
  {
    name: "vikash",
    age: 20,
    gendar: "male",
    name: "vicky",
    age: 25,
    gendar: "male",
    name: "Vk",
    age: 23,
    gendar: "male"
  }
];

console.log(GetPropertyValues(people, "name"));
console.log(GetPropertyValues(people, "age"));
console.log(GetPropertyValues(people, "gendar"));