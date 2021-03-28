let random = (min, max) => Math.floor(Math.random()  * (max - min +1) ) + min;
/* console.log(random(1, 100)); */
rnd = random(1, 100);

if (rnd % 2 == 0) {
  console.log("число четное");
  console.log(rnd) 

} else {
  console.log("число нечетное");
  console.log(rnd);

}




/*  let i = 0;
 
 function getNumber(num){
   return num;
 }

 console.log(getNumber(3)); */

/* 
 function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
  }
  function showOk() {
  alert( "Ви погоджуєтесь." );
  }
  function showCancel() {
  alert( "Ви відмінили." );
  }
  
  ask("Ви погоджуєтесь?", showOk, showCancel); */