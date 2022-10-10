/*
3. Crie uma função eCrescente que teste se a lista informada é ou não crescente.
A sequencia não será considerada crescente se houver um número menor que seu antecessor imediato
*/

const eCrescente = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < lista[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(eCrescente([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(eCrescente([10, 2, 3, 4, 5, 6, 7, 8, 9, 100]));