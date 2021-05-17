// xndir 12

const taskOne = function(){
let n = +prompt("Enter n number","5");
let sum = 0;
if(n <= 0){
    n = +prompt("Enter n number","")
}
for(let i = 0;i <= n; i++){
    sum += i**2;
}
console.log(sum);
};
//taskOne();

//xndir 13

const taskTwo = function(){
    let n = +prompt("Enter a number","");
    let y = 1;
    for(let i = 1; i < n; i++){
        y = y *2;
    }
    console.log(y);
};
//taskTwo();

//xndir 14

const taskThree = function(){
    let n = +prompt("Enter n number","");
    let sum = 0;
    for(let i = 1;i <= n; i++){
        sum += i**2;
    }
    console.log(sum);
    };
    //taskThree();

 //xndir 15

 const taskFour = function () {
    let n = +prompt("Enter a A number", "");
    let s = 0;
    let z = 1;
    for (let i = 1; i <= n; i++) {
      z = z * 2;
      console.log(z);
      s += z;
      console.log(s);
    }
    console.log(s);
  };
  //taskFour();

  //xndir 16

const taskFive = function () {
    let n = +prompt("Enter a A number", "");
    let s = 0;
    let y = 0;
  
    for (let i = 1; i < n; i++) {
      y = y + Math.sin(i);
      s = s + i / y;
    }
    console.log(s);
  };
  //taskFive()
  