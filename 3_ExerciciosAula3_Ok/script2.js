/*
2. Crie uma função chamada menos. Caso seja passado apenas 1 parâmetro, retorne o valor negativo. Caso sejam passados 2, retorne a subtração dos dois. Exemplo:
console.log(menos(10)); //Imprime -10console.log(menos(5,2)); //Imprime 3
*/
const menos = (x , y=false) =>{
    if (!y){
        return -x
    }
    return x-y
  }

console.log(menos(5));
console.log(menos(5,3));

function menos1 (x, y=false){
    if (!y){
        return -x
    }
    return x-y
}

console.log(menos1(7));
console.log(menos1(7,3));

const menos2 = function(x,y){
    if (!y){
        return -x
    }
    return x-y
  }

  console.log(menos2(8));
  console.log(menos2(8,3));