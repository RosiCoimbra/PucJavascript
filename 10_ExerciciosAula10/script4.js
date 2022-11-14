/* 4. Escreva uma função testNum que receba um número como um argumento e
retorne um Promise que resolve em caso o número seja maior que dez, ou
rejeite caso contrário. Use-o exibindo uma mensagem em cada caso. */

const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Número maior que 10");
        } else {
            reject("Número menor que 10");
        }
    });
}

console.log(testNum(15));
console.log(testNum(5));