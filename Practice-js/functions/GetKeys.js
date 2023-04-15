/**Write a function that takes an 
 * object and returns an array of all 
 * the keys in the object. */
function GetKeys(obj) {
     const keys = Object.keys(obj);

     return keys;
}

const persion = {
     name: "vikash",
     age: 25,
     gender: "male",
     city: "pilibhit",
};

for (keys in persion) {
     console.log(keys, persion[keys]);
}

