/*1. Escreva duas funções com async e await que retornem Promises:
• A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela rejeitará caso o array contenha um dado que não seja string.
• A segunda, sortWords(), ordenará as palavras em ordem alfabética.
• Em seguida, teste-as*/

const makeAllCaps = async (words) => {
    if (words.every((word) => typeof word === "string")) {
        return words.map((word) => word.toUpperCase());
    } else {
        throw "Não é um array de strings";
    }
}

const sortWords = async (words) => {
    if (words.every((word) => typeof word === "string")) {
        return words.sort();
    } else {
        throw "Não é um array de strings";
    }
}

const words = ["oi", "você", "está", "bem", "?"];
makeAllCaps(words)
    .then(sortWords)
    .then(console.log)
    .catch(v => console.log("Não é um texto: " + v));


