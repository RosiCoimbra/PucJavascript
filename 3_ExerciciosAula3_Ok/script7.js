/*
Escreva a versão não recursiva e a recursiva de uma função para calcular o nésimo
termo da sequencia de fibonnaci:
1, 𝑠𝑒 𝑛 = 0
1, 𝑠𝑒 𝑛 = 1
𝑓𝑖𝑏 𝑛 − 1 + 𝑓𝑖𝑏(𝑛 − 2), 𝑠𝑒 𝑛 > 1
Ex.: Fib(6) = 13, pois:
1,1,2,3,5,8,13,21...
*/

function fibonnaci(n) { 
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonnaci(n-1) + fibonnaci(n-2);
    }
}

function fibonnaci1 (n) {
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fibonnaci(6));
console.log(fibonnaci1(6));
