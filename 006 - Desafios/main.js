const tabuada = (multiplicador) => {
    for (let i = 1; i < 11; i++) {
        let mult = i * multiplicador;
        console.log(`${i} X ${multiplicador} = ${mult}`);
    }
}

const palavraRepetida = (nome) => {
    let letras = {}
    let palavra = nome.toLowerCase().replaceAll(" ", "");

    for (let i = 0; i < palavra.length; i++) {
        if (letras[palavra[i]]) {
            letras[palavra[i]]++
        } else {
            letras[palavra[i]] = 1;
        }
    }
    console.log(letras)
}

const calculadoraIMC = (peso, altura) => {
    imc = Number((peso / (altura * altura)).toFixed(1));
    console.log(`Seu imc - ${imc}kg`)
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
}

// tabuada(7);
// palavraRepetida("Alex Ventura");
calculadoraIMC(100,1.7);
