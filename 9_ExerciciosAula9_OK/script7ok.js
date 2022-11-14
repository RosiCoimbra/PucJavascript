/* 6. Crie o atributo do raio. Torne-o privado.
7. Adicione em sua classe um setter em que, caso o raio seja negativo,
retire o sinal (um raio setado como -3 se tornaria 3) */

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
console.log(circulo.area.toFixed(2));