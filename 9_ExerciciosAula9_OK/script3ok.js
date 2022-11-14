/* 1. Para praticar a sintaxe, experimente criar um objeto chamado
Circulo com raio 3.
2. Em seguida, programe os métodos para calcular a área
(PI*raio*raio) e o perímetro do círculo (2*PI*raio)
3. Altere seu objeto círculo para utilizar a sintaxe com uma função
construtora chamada Circulo
*/

function Circulo(raio) {
    this.raio = raio;
    this.area = function () {
        return Math.PI * this.raio * this.raio;
    };
    this.perimetro = function () {
        return 2 * Math.PI * this.raio;
    };
}

let circulo = new Circulo(5);
console.log(circulo.area().toFixed(2));
console.log(circulo.perimetro().toFixed(2));
