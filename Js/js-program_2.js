/* Object Orinted Programming JS 
   Object
*/
let retangale = {
    length: 1,
    breath: 2,

    draw : function () {
         console.log('drawing retangle');
    }
}



/* primite data type are copy by thare value. Object*/
let a = { value: 10};
let b = a;
a.value++;
console.log('This first value is ' + a.value);
console.log('This second value is ' + b.value);



// no copy value 
let A = 20;
function inch(a){
  a++;
}
inch(a);
console.log('number' + a);



/*Object use in For-in Loop */
let mause = {
     btn_1: 10,
     btn_2: 20
};
// for-in loop
for (const key in mause) {
    console.log('for-in value: ' + key, mause [key]);
}



/*Object use in for-of loop */
for (let key of Object.entries(mause)) {
     console.log('for-of value: ' + key);
}



/* Object use for if else */
if ('btn_1' in mause) {
     console.log('true');
}
else{
  console.log('false');
}



/* Object clone. using for-in loop*/
let src = {
  box1: 10,
  box2: 20,
  box3: 30
};
let dest = {};
for(let key in src){
  dest[key] = src[key];
}
console.log(dest);
// Difference /!No Farak dest object
src++;
console.log(dest);



// -------------return keyword-------------
let user = {
    first_name: 'vikash',
    last_name: 'kushwaha',

    user_function : function(){
        return ('This Name of the user is ${user.first_name} ${user.last_name}'); 
    },

    //object
    phone_number : {
     mobile: '9876543210',
    }
}
console.log('User Name: ' + user.user_function());
console.log('User Mobile Number: ' + user.phone_number.mobile);



/* Factory Function */
function createRetangle(len, bre) {

  return retangale = {
    length: len,
    breath: bre,
 
    draw : function () {
        console.log('drawing retangle');
    }
  }; 
  
}
let retangaleObj_1 = createRetangle(5, 4);
let retangaleObj_2 = createRetangle(50, 40);



/* Constructor Function use for 'this' keyword our 'new'*/
function Retangle(L, B) {
  this.length = L;
  this.breath = B;
  this.draw = function() {
    console.log('Drawing');
  }
}
let retangaleObj_costructor_1 = new Retangle(80, 50);
let retangaleObj_costructor_2 = new Retangle(20, 30);



/* JS Class */
class Box {
  constructor(L, B) {
    this.length = L;
    this.breath = B;
    this.draw = function () {
      console.log('JS Class');
    };
  }
}
let retangaleObj_class_1 = new Box(120, 150);
let retangaleObj_class_2 = new Box(520, 130);