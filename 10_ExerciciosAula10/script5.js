/*5. Escreva duas funções puras que retornem Promises:
• A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela rejeitará caso o array contenha um dado que não seja string.
• A segunda, sortWords(), ordenará as palavras em ordem alfabética.
• Em seguida, teste-as*/

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every((word) => typeof word === "string")) {
            resolve(words.map((word) => word.toUpperCase()));
        } else {
            reject("Não é um array de strings");
        }
    });
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every((word) => typeof word === "string")) {
            resolve(words.sort());
        } else {
            reject("Não é um array de strings");
        }
    });
}

const words = ["oi", "você", "está", "bem", "?"];
console.log(makeAllCaps(words));
console.log(sortWords(words));

