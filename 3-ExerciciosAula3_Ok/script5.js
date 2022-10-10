/*
5. Escreva sua própria versão da função join. Esta função recebe uma lista e um
separador (por padrão ",") e gera o texto dos objetos em seu interior separados por
esse separador. Não se esqueça que o separador não ocorre após o último objeto da
lista
*/

function join(lista, separador = ",") {  
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto += lista[i];
        if (i < lista.length - 1) {
            texto += separador;
        }
    }
    return texto;
}

console.log(join(["a", "b", "c"]));