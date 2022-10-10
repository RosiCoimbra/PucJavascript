let peso = 100
let altura = 1.64
let imc = (peso / (altura * altura)).toFixed(2)

if (imc >= 30) {
    let obeso = true;
    console.log(`Seu IMC é ${imc} e você está ${obeso ? 'obeso' : 'não obeso'}`)
}else {
    let obeso = false;
    console.log(`Seu IMC é ${imc} e você está ${obeso ? 'obeso' : 'não obeso'}`)
}