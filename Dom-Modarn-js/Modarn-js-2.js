console.log('/** ...Spread Operator */');

setTimeout(()=> {
   let arr = [1, 2, 3, 4, 5];
   function abrege(a,b,c){
     return a*b*c;
   }
   let sum_add = abrege(...arr);
   console.log(sum_add);

   //copy array 
   let copy0 = [...arr];
   console.log('Copy Array: ' + copy0);

}, 1000);




const time_1 = performance.now();

/** Adding 100 Paragraph <p> */

// for (let item = 1; item <= 100; item++){
//      let newElement = document.createElement('p');
//      newElement.textContent = (item) + ' This is new para Elements';
//      document.body.appendChild(newElement);
//      newElement.style.color = 'blue';
// }
// const time_run_1 = performance.now();
// console.log('This time: ' + (time_run_1-time_1) + ' ms');



//optimision a bit

const time_2 = performance.now();

let myDiv = document.createDocumentFragment();

for (let item2 = 1; item2 <= 100; item2++) {
     let element = document.createElement('p');
     element.textContent = item2 + ' This is new para';
     myDiv.appendChild(element);
     element.style.color = 'red';
}
document.body.appendChild(myDiv);
const time_run_2 = performance.now();
console.log('This is first code run: ' + (time_run_2-time_2) + ' ms')






/** Time performance practice*/
function addPara() {
     var count = 1;
    for (let para = 1; para <= 10; para++){
       let p1 = document.createElement('p');
       p1.textContent = count++ + ' Sigle para '; 
       document.body.appendChild(p1);
    }
}


// create button in use for function and for loop
function appendNewMessage() {
   for (let btn = 1; btn <= 5; btn++){
     let p2 = document.createElement('button');
     p2.textContent = 'new button';
     document.body.appendChild(p2);
     
     p2.addEventListener('click', function(){
          p2.style.backgroundColor = 'orange';
          p2.style.margin = '20px';
          p2.style.border = 'none';
          p2.style.padding = '10px';
          p2.style.borderRadius = '8px';
     })

   }
}

addPara();
appendNewMessage();



