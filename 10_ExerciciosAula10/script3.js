/* 3. Crie 3 timers A (0.5s), B (0.2s) e C (0.8s). Os timers devem produzir os
valores a=5, b=10 e c=2, respectivamente. Ao final dos 3 timers, deve ser
calculada a expressão: a + b * c. O programa deve continuar funcionando
mesmo se alterarmos os tempos dos timers entre uma execução e outra.*/

let a = 0;
let b = 0;
let c = 0;

setTimeout(() => {
    a = 5;
}, 500);

setTimeout(() => {
    b = 10;
}, 200);        

setTimeout(() => {
    c = 2;
}, 800);

setTimeout(() => {
    console.log(a + b * c);
}
, 1000);
