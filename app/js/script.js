let users = [];

for (let i = 0; 1; i++) {
  let str = prompt("Input your name", "");
  if (str == null) {
    console.log("cancel was pressed");
    break;
  } else {
    users.push(str);
  }
}

console.log(users);

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, perspiciatis.';

let words = str.split(' ');
let tmp = words[8]
for(let i = 0; i< tmp.length;i++){
  if ( tmp[i] != '.' && tmp[i] != ',' ) {
    console.log(tmp[i]);
  }

}


/* 
let users = [];

for(let i=0;1;i++) {

let str = prompt("Input your name", '');
users.push(str);
}
 */

/* let matrix = [
    [1, 2, 3, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];
  // console.log(matrix[2][2] + matrix[2][1] );
  
  let sum = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j=0;j < matrix[i].length;j++)
    {
      console.log(matrix[i][j]);
      sum+=matrix[i][j];
    }
  }
  
  console.log(sum);
   */