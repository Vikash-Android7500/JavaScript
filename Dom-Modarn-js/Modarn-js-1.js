/**Data faching */
const heading = document.getElementById('heading1');
heading.style.color = 'darkred';
heading.style.fontSize = '2rem';
console.log(heading);

//Tag Name:
const tsgs = document.getElementsByTagName('button');
console.log(tsgs[2]);

// class Name:
const classes = document.getElementsByClassName('pera');
console.log(classes);


//querysellacter: id and class selecter for use in css code style
const qury = document.querySelector('#btn3');
console.log(qury);

//querysellacterAll:
const quryall = document.querySelectorAll("#textM");
console.log(quryall);

/**geting data */

//parentNode:
const parent1 = document.querySelector('.btn5');
const parent0 = parent1.parentNode;
console.log(parent0);

//childNode:
const childernNode = document.querySelector('.parent');
const child = childernNode.childNodes;
console.log(child);


//first Child 
const text7 = document.querySelector('#textM');
const text0 = text7.firstElementChild;
console.log(text0);


//lastElementChild:
const ul = document.querySelector('.ULlist');
const ulline = ul.lastElementChild;
console.log(ulline);


// nextElementSibling: only id to id our class to class selecter
const sibling = document.querySelector('#one');
const next = sibling.nextElementSibling;
console.log(next);

//previousElementSibling:
const pre = document.querySelector('#four');
const pre1 = pre.previousElementSibling;
console.log(pre1);



/** Manipulations */
// innerHTML 
const heading5 = document.querySelector('#btn1');
heading5.innerHTML  = 'button change !';
heading5.style.color = 'red';
heading5.style.fontSize = 'xx-large';


//Class list add and Remove:
const clas = document.querySelector('.text1');
clas.classList.add('title');
clas.classList.remove('text1');
console.log(clas);


/*** appendChild new Create html Element  add element in last*/
const div1 = document.createElement('div');
div1.innerHTML = 'Create javascript Element div 6 ';
//add hmtl element in class
const parent00 = document.querySelector('.class0');
parent00.appendChild(div1);
div1.style.color = 'red';
console.log(div1);



/*        appendChild  set element ऊपर नीचे
(1) afterbegin
(2) afterend
(3) beforebegin
(4) beforeend
*/

const subheading = document.createElement('p');
subheading.innerHTML = 'subheading in peragraph P TAG';

const sub = document.querySelector('.text2');
sub.insertAdjacentElement('afterbegin', subheading);
subheading.style.color = 'darkblue'
console.log(subheading);


/*** addEventListener */
const clickme = document.querySelector('.btn5');
const subheading0 = document.querySelector('.pera5');

clickme.addEventListener('click', function(event) {
     if (subheading0 != clickme) {
          subheading0.style.color = 'red';
          subheading0.style.fontSize = '2rem';
     } 
     console.log('button click', event);
});




