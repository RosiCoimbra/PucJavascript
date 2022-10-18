/*
9. Crie a função Collatz que aceita como parâmetro o elemento inicial da
sequencia de Collatz e retorna uma função. A cada chamada dessa função,
retorne o próximo elemento da sequencia.
const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1
*/

function collatz(n) {
    return function () {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        return n;
    }
}

const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1