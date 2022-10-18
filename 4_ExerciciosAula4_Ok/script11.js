/*11. Crie a função paginador que recebe uma lista e um tamanho de página. Ela deve retonar outra função que quando chamada com um número de página, retorne apenas os elementos daquela página.
let pagina = paginador(albuns, 3); 
console.log(pagina(1));*/

const paginador = (list, pageSize) => {
    return (pageNumber) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return list.slice(startIndex, endIndex);
    }
}

const albums = [
    { id: 1, name: 'album 1' },
    { id: 2, name: 'album 2' },
    { id: 3, name: 'album 3' },
    { id: 4, name: 'album 4' },
    { id: 5, name: 'album 5' },
    { id: 6, name: 'album 6' },
    { id: 7, name: 'album 7' },
    { id: 8, name: 'album 8' },
    { id: 9, name: 'album 9' },
    { id: 10, name: 'album 10' },
    { id: 11, name: 'album 11' },
];

let page = paginador(albums, 1);
console.log(page(1));




