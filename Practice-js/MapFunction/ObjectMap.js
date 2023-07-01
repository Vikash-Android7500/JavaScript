const people = [
     {name: 'vikash', age: 24},
     {name: 'vicky', age: 20},
     {name: 'VK', age: 25}
];
const Names = people.filter(person => person.age === 25).map(person => person.name);
console.log(Names);