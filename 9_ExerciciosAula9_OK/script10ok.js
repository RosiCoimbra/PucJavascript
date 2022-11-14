/* 10. Crie um método estático criar que aceita uma lista como
parâmetro e gera um círculo para cada número positivo em seu
interior, ignore os parâmetros que não puderem ser convertidos
para números.*/

class Circulo{
    #raio;
    constructor(raio){
        this.#raio = raio;
    }
    toString(){
        return `Circulo de raio ${this.#raio}`;
    }
    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new Circulo(raio));
        }
}

const circulos = Circulo.criar(1,2,"eee",3,4,5);
circulos.forEach(c => console.log(c.toString()));