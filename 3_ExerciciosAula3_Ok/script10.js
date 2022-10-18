/*
10. Crie a função verbose que recebe uma função como parâmetro e retorna
outra, que imprime no console toda chamada que for feita na função original
com seu resultado. Exemplo:
const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 10
Dicas:
• A função join de uma lista pode ser usada para transforma-la em uma string
separada por vírgula: valores.join(",");
• Além disso, variáveis de função possuem a propriedade name que imprimem o
seu nome no momento da declaração.
Crie a função fixar que aceita uma função f e valores de parâmetros.
• Ela retorna outra função que chama f com esses parâmetros passados por primeiro
como se estivessem “fixos”.
• Exemplos:
function log(modulo, nivel, texto) {
console.log(`${nivel}: ${texto} (${modulo})`)
}
let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo"); //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR"); //Imprime INFO: PUCPR (aula.js)
let soma10 = fixar(soma, 10);
console.log(soma10(50)); //imprime 60
*/

function verbose(funcao) {  
    return function () {
        console.log(funcao.name + "(" + Array.prototype.join.call(arguments, ",") + ") = " + funcao.apply(null, arguments));
        return funcao.apply(null, arguments);
    }
}

function fixar(funcao, ...parametros) {
    return function (...parametros2) {
        return funcao.apply(null, parametros.concat(parametros2));
    }
}

function log(modulo, nivel, texto) {
    console.log(`${nivel}: ${texto} (${modulo})`)
}

const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 10

let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo"); //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR"); //Imprime INFO: PUCPR (aula.js)

let soma10 = fixar(sum, 10);
console.log(soma10(50)); //imprime 60


