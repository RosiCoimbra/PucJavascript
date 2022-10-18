// 9. Crie uma função que recebe uma data inicial, um número n e um intervalo de tempo. Ela deve retornar uma lista, contando as n próximas datas considerando esse intervalo de tempo.

const nextDates = (date, n, interval) => {
    const dates = [];
    for (let i = 0; i < n; i++) {
        dates.push(new Date(date.getTime() + i * interval));
    }
    return dates;
}

console.log(nextDates(new Date(2019, 1, 1), 5, 1000 * 60 * 60 * 24));