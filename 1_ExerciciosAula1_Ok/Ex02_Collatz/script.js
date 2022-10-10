const prompt = require('prompt-sync')();

const num = prompt('Digite um número: ');

let collatz = (num) => {
    // loop till the given num is not 1
    while(num > 1){
      //print the num
      console.log(num);
      //if the number is even
      if(num % 2 == 0){
        num = parseInt(num / 2); 
      }else{
        //if the number is odd
        num = (num * 3) + 1;
      }
    }
  // print the last number
  console.log(num);
}
collatz(num)

