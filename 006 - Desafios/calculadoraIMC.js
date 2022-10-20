let peso = 100;
let altura = 1.7;
imc = Number((peso / (altura * altura)).toFixed(1));
console.log(imc)

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso")
        break;
    case imc > 17 && imc < 18.49:
        console.log("Abaixo do peso")
        break;
    case imc > 18.5 && imc < 24.99:
        console.log("Peso normal")
        break;
    case imc > 25 && imc <= 29.90:
        console.log("Acima do peso")
        break;
    case imc >= 30 && imc < 34.99:
        console.log("Obesidade I")
        break;
    case imc >= 35 && imc < 39.99:
        console.log("Obesidade II")
        break;
    default:
        console.log("Dados incorretos")
        break;
}
