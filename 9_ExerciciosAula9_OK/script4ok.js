/* 4. Crie 2 círculos de raios diferentes. E imprima sua área e perímetro */

function Circulo(raio) {
    this.raio = raio;
    this.area = function () {
        return Math.PI * this.raio * this.raio;
    };
    this.perimetro = function () {
        return 2 * Math.PI * this.raio;
    };
}

let circulo1 = new Circulo(3);
console.log(circulo1.area().toFixed(2));
console.log(circulo1.perimetro().toFixed(2));
let circulo2 = new Circulo(5);
console.log(circulo2.area().toFixed(2));
console.log(circulo2.perimetro().toFixed(2));
