
/*9. Sobreponha o método toString() da sua classe Circulo para
imprimi-la como Circulo de raio ${raio}
10. Crie um método estático criar que aceita uma lista como
parâmetro e gera um círculo para cada número positivo em seu
interior, ignore os parâmetros que não puderem ser convertidos
para números.*/

class Circulo{
    #raio;
    constructor(raio){
        this.#raio = raio;
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
    toString(){
        return `Circulo de raio ${this.#raio}`;
    }
}

let circulo2 = new Circulo(5);
circulo2.raio = -10;
console.log(circulo2.toString());