// 8. Crie a função between que recebe uma data, uma data de inicio, outra de fim e uma terceira data. Teste se a data está no meio desse intervalo. Adicione um objeto desestruturado opcional no quarto parâmetro para permitir os parâmetros opcionais inclusiveStart e inclusiveEnd

const between = (date, start, end, { inclusiveStart = false, inclusiveEnd = false } = {}) => {
    return (inclusiveStart ? start <= date : start < date) && (inclusiveEnd ? date <= end : date < end);
}

console.log(between(new Date(2022, 1, 1), new Date(2021, 1, 1), new Date(2023, 1, 1), { inclusiveStart: true, inclusiveEnd: true }));
