/*
Crie uma função mapear que aceite um array e uma função de
mapeamento. Essa função recebe um elemento do array, realiza sobre ele
qualquer cálculo, retornando outro.
• Exemplo:
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro); //[2,4,6,8]
*/

const mapear = (array, funcao) => {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

const dobro = mapear([1,2,3,4], x => x / 2);
console.log(dobro); //[2,4,6,8]