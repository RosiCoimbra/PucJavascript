/*
Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista
com todos os valores desse campo sem repetição.
*/

function unique(lista, campo) {
    let valores = [];
    for (let i = 0; i < lista.length; i++) {
        if (!valores.includes(lista[i][campo])) {
            valores.push(lista[i][campo]);
        }
    }
    return valores;
}

console.log(unique([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 4}], "a"));
