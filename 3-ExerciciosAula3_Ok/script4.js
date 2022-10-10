/*
4. Crie a função maior, que encontre o maior entre todos os valores passados em
seus argumentos.
console.log(maior(1,10,-1,5)); //Imprime 10
console.log(maior(1,-100,5)); //Imprime 5
5.
*/


const lista = [1,10,-1,5];
const lista1 = [1,-100,5];

function maior(numLista) {
    return Math.max.apply(null, numLista);
}

console.log(maior(lista));
console.log(maior(lista1));