/* 5. Refatore o seu código para o círculo utilizar a sintaxe de classes */

class Circulo { 
    raio;
    constructor(raio){
        this.raio = raio;
    }
    get area(){
        return Math.PI * this.raio * this.raio;
    }   
    set area(area){
        this.raio = Math.sqrt(area/Math.PI);
    }
    get perimetro(){
        return 2 * Math.PI * this.raio;
    }   
    set perimetro(perimetro) {
        this.raio = perimetro/(2*Math.PI);
    }
}

let circulo1 = new Circulo(3);
console.log(circulo1.area());
console.log(circulo1.perimetro());
circulo1.area = 35;
// let circulo2 = new Circulo(5);
// circulo2.raio = -10;
// console.log(`raio = ${circulo2.raio}`);