/*
1- Crie uma função chamada mais, que aceite 2 parâmetros e os some. Utilize as 3 sintaxes possíveis.
*/

function mais (x, y){
    return x + y;
}

console.log(mais(1,2));

const mais1 = (x,y) => {
    return x + y;
};

console.log(mais1(3,2));

const mais2 = function(x,y){
    return x+y;
  }

  console.log(mais2(5,2));