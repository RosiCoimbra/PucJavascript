/*let i = 0;
let  nome = '';
let cor = "";
const pessoas = [];

while(i <= 15) {
    nome = prompt('Digite o seu nome: ');
    cor = prompt('Digite sua cor: [branca, negra, parda, outro]');
    while (cor != 'branca' && cor != 'negra' && cor != 'parda' && cor != 'outro') { 
        cor = prompt('Digite sua cor: [branca, negra, parda, outro]');  
    }
    pessoas.push({nome, cor});
   i++;
}*/

const pessoas = [
  {nome: "Joao", cor: "branca"},
  {nome: "Maria", cor: "negra"},
  {nome: "Ro", cor: "parda"},
  {nome: "Lu", cor: "outro"},
  {nome: "Sergio", cor: "branca"},
  {nome: "Carlos", cor: "branca"},
  {nome: "Manoel", cor: "negra"},
  {nome: "Cris", cor: "parda"},
  {nome: "Chico", cor: "outro"},
  {nome: "Lourdes", cor: "branca"},
  {nome: "Zé", cor: "branca"},
  {nome: "Mané", cor: "negra"},
  {nome: "Alfredo", cor: "parda"},
  {nome: "Julio", cor: "outro"},
  {nome: "Meire", cor: "branca"}
]

const quantCores = pessoas.reduce(function(object, item) {
    if (!object[item.cor]) {
        object[item.cor] = 1;
        } else {
            object[item.cor] += 1;}
            return object;
}, {})

console.log("Deu certo! Glória a Deus!!!");

for (let i in quantCores) {
    console.log(`A cor, ${i}, aparece, ${quantCores[i]}, vezes.`);
}