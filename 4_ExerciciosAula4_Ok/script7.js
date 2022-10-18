// 7. Crie as funções de comparação de datas: before e after. Adicione um parâmetro opcional inclusive com valor padrão false que permite considerar também a própria data.

function before(date1, date2, inclusive = false) {
    return inclusive ? date1 <= date2 : date1 < date2;
}

function after(date1, date2, inclusive = false) {
    return inclusive ? date1 >= date2 : date1 > date2;
}

console.log(after(new Date(2022, 1, 1), new Date(2021, 1, 1)));