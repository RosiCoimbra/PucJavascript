/* 6. Crie o atributo do raio. Torne-o privado.
7. Adicione em sua classe um setter em que, caso o raio seja negativo,
retire o sinal (um raio setado como -3 se tornaria 3) 
8. Adicione getters para o método raio e também para a área e o
perímetro.*/

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
    get perimetro(){
        return 2 * Math.PI * this.#raio;
    }
    set perimetro(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }
}

let circulo = new Circulo(5);
circulo.raio = 10;
console.log(circulo.perimetro.toFixed(2));