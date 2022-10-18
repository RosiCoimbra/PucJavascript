/*12. Crie a função media, que recebe uma lista e opcionalmente um
nome de campo.
• Caso o nome de campo seja fornecido, calcule a média dos valores desse
campo
• Caso não seja, faça a média utilizando os próprios elementos da lista
• Exemplo:
let avg = media(albuns, "nota");
let avg2 = media([1,2,3,4,5]);*/

const media = (list, field) => {
    if (field) {
        return list.reduce((acc, item) => acc + item[field], 0) / list.length;
    }
    return list.reduce((acc, item) => acc + item, 0) / list.length;
}

const albums = [
    { id: 1, name: 'album 1', nota: 1 },
    { id: 2, name: 'album 2', nota: 2 },
    { id: 3, name: 'album 3', nota: 3 },
    { id: 4, name: 'album 4', nota: 4 },
    { id: 5, name: 'album 5', nota: 5 },
    { id: 6, name: 'album 6', nota: 6 },
    { id: 7, name: 'album 7', nota: 7 },
    { id: 8, name: 'album 8', nota: 8 },
    { id: 9, name: 'album 9', nota: 9 },];

let avg = media(albums, "nota");
let avg2 = media([1, 2, 3, 4, 5]);

console.log(avg);
console.log(avg2);





