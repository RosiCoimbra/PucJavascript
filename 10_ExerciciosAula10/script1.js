/* 1. Crie um timer que imprima o texto “PUCPR” a cada meio segundo.
Pare o timer após 5 execuções.*/

let i = 0;

let timer = setInterval(function() {
    console.log("PUCPR");
    i++;
    if (i == 5) {
        clearInterval(timer);
    }
}, 500);