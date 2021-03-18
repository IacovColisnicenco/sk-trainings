function Evaluate(a, b){
    let c;
    if (a > 0 || !(a < 10)) { 
        c = a + b * 3;
      } else {
        // a==0
        c = a * 2 + b * 4;
      }
      return c;
}

let a = 0;
let b = 2;
let c = 0;



if (a != null) {
  console.log("ok was pressed");
  a = parseInt(prompt("Input your digit", "0"));
  c = Evaluate(a, 1);
} else {
  console.log("cancel was pressed");
}

let d = (a>0) ? a+b: a*b;
alert(c);

/* 
function Evaluate(a) {

}
let  number = 0;

number = prompt("Enter number", "0");

switch(number) {

case 1: 
console.log("a");
break;

}
 */







/* var age = 20;
age = prompt("Enter number: ", "0");

var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer" */

/* let a = 0;
let b = 2;
let c = 0;

a = prompt("Input your digit", '0'); //плюс перед промт будет число, без плюса строка
if (a != null) {
    console.log("ok, was pressed");
    a = parseInt(a);
    if (a > 0) {
        c = a + b * 3;
    } else if (a < 0) {
        c = a * 2 + b * 2;
    } else { //a == 0
        c = a * 2 + b * 4;
    }
}
else {
    console.log("cancel, was pressed");
}


console.log(c); */


