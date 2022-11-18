/*2. crie uma página que calcula o fibonacci de um número mostrando o cálculo passo a passo Usando async e await .*/

const fibonacci = async (n) => {
    let a = 0, b = 1, f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

const main = async () => {
    let n = 10;
    let result = await fibonacci(n);
    console.log(result);
}

main();



