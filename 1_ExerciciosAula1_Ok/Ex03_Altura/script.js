
let chico = 1.50;
let ze = 1.10;
let ano = 0;

while (chico >= ze) {
  chico += 0.02;
  ze += 0.03;
  ano++;
  console.log(`Chico: ${chico.toFixed(2)}m | Zé: ${ze.toFixed(2)}m | Ano: ${ano}`);
}
console.log(`Zé será maior que Chico em ${ano} anos.`);