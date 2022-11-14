/* 6. Crie o atributo do raio. Torne-o privado.*/


class Circulo { 
    #raio;
    constructor(raio){
        this.#raio = raio;
    }
    get area(){
        return Math.PI * this.#raio * this.#raio;
    } 
    set area(area){
        this.raio = Math.sqrt(area/Math.PI);
    }
    get raio() {
        return this.#raio
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
}

let circulo = new Circulo(5);
circulo.raio = -10;
console.log(`raio = ${circulo.raio}`);