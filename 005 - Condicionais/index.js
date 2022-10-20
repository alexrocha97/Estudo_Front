let soma = -10;

if(soma >= 0){
    console.log("Positivo")
} else {
    console.log("Negativo")
}


if(1 === 0){
    console.log("Não é igual")
} else if(1 === 1) {
    console.log("É igual!")
} else {
    console.log("Tentamos de tudo...")
}

// falsy e thuthy
/*
    Falsy = false, 0, "", NaN, underfined e null
    Truthy = Todos os outros diferentes do [ falsy ]
    ! = operador not
*/
if(!null){
    console.log("Bom dia!")
} else {
    console.log("Boa noite!")
}

// OPERADOR TERNÁRIO
const velocidade = 75;
const warn = 85;
// condição ? true : false;
const condicao = velocidade >= warn ? console.log("Recebeu uma multa!") : console.log("Continue andando..")


// SWITCH
const mes = 13;

// if(mes === 1) {
//     console.log("Janeiro")
// } else if (mes === 2) {
//     console.log("Fevereiro")
// }
// Na condição podemos colocar nomes, regras,...
switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 5:
        console.log("Maio")
        break;
    default:
        console.log("Não encontramos o mês relacionado ao número.")
        break;
}
