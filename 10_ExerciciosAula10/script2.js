/* 2. Crie um timer que mostre no console a palavra “Pontifícia
Universidade”. Ele deve disparar um segundo timer, que mostre no
console o texto “Católica do”. Repita para um terceiro timer que mostre
o texto “Paraná”.*/

setTimeout(() => {
    console.log("Pontifícia Universidade");
    setTimeout(() => {
        console.log("Católica do");
        setTimeout(() => {
            console.log("Paraná");
        }, 1000);
    }, 1000);
}, 1000);