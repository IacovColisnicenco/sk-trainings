/* функция принимает два параметра (числа) и возвращает больший из
них */

/* function getMaxNumber(number1 = 1, number2 = 1) {
  
  if (number1 > number2) {
    console.log(number1)
  } else if (number1 < number2) {
    console.log(number2)
  } else {
    console.log("числа равны");
  }
} */

function getMaxNumber(number1 = 1, number2 = 1) {
  
  if (number1 > number2) {
     return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
   return "Числа равны"; }

}

/*
вывести в консоль с помощью цикла квадраты чисел от 1 до 9
// 1,4,9, ... 81
*/

/* for(let i=1; i<=9; i++) {

  //let j = Math.pow(i, 2);
  let j = i*i;
  console.log(j);

} */

/* let i = 1;
while (i<=9) {
  let j = i*i;
  console.log(j);
  i++;

} */

/* let message = 'Pruvit';
function showMessage () {
message = 'Hello'; // глобальная переменная

alert (message);
}

showMessage(); */







/**
 * написать оператор if..else который принимает значение с prompt и
выводит в консоль
1, если значение больше нуля,
1, если значение меньше нуля,
0, если значение равно нулю.
● переписать в тернарный оператор
var a = 1;
var n;
if (a > 0) {
  n = true;
}
else {
  n = false;
}

1. Принимает значение с promt
2. Выводит в консоль: 1, если a>0 ИЛИ 1, если a < 0
3. Иначе если значение равно 0, вывести ноль.
 *
 */


/* let a = 1;

a = +prompt("Enter number", " ");

if (a > 0 || a < 0) {
  console.log("1");
}
else if(a===0){
  console.log("0");
}
else {
  console.log("Вы ввели строку, а ожидаеться число! :(");
} */

/* let a = 2 + 8;

switch (a) {
case 3:
alert ('Маловато');
break;
case 4:
alert ('В точку!');
break;
case 5:
alert ('Перебор');
break;
default:
alert ('Я таких значений не знаю');
} */


/* let a = 2 + 9;
switch (a) {
case 4:
alert ('Вірно!');
break;

case 3: // (*)
case 5: // (**)
alert ('Невірно!');
alert ('Трохи помилилися, буває.');
break;

default:
alert ('Дивний результат, дуже дивний');
} */



/* С помощью конструкции switch записать следующие условия:
- если ввели 1, то вывести в консоль 'a'
- если ввели 2 - "b"
- если ввели 3 - "c"
- иначе - "z" */

/* let number = 0;

number = +prompt("Please enter number:", ' ');

switch(number) {

  case 1:
  alert('a');
  break;
  case 2:
  alert("b");
  break;
  case 3:
  alert("c");
  break;
  default:
    alert("z");
}
 */
/*
for (let i = 0; i < 3; i++) {
 console.log( i );
  } */



















/* function Evaluate(a, b){
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

*/

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


