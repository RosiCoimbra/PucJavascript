/* Crie uma lista com alguns valores e imprima:
Os valores positivos
A média de todos os valores */

let lista = [3, 26, 29, 71, 79, -5, -10 ]
soma = 0;
media = 0;

for (let i of lista){
    soma += i;
}

for (let i of lista){
    if (i > 0){
        console.log(i)
    }
}

media = soma/lista.length;
console.log(`A média é ${media.toFixed(2)}`)
