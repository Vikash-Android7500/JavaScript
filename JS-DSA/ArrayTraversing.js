/* Array Traversing */

const data = [97,878,52,5,48,2,1,2,88,66,55,22,11,25,8989];
const names = ['vikash', 'vikram', 'vicky', 'vk'];
for (let i = 0; i < data.length; i++) {
     console.log(`Array:  ${data[i]}`);
}

const newvalue = 3;
console.log(`Array length:  ${data[newvalue]}`); 


const Actionfeacher = () => {
     const element = document.getElementById('element').value;

     // if (element < data.length &&
     //      typeof parseInt(element) === 'number') {
     //      alert(`This value:  ${data[element]}`);
     // }
     if (element < data.length && element > 0) {
          alert(`This value: 😄  ${data[element]}`);
     }
     else {
          alert(`Pleace enter valid input Number ? (-_^)`)
     }
}


