// Conjunto de instruções que faz determinada tarefa ou calcula algum valor.
/*
    1 - Functions declaration:
    function nomeDafuncao(argumentos){chaves - onde está os códigos}
    
    2 - Functions expression:

    3 - Arrow Functions: 
*/
// Functions declation
function isValidDeclaration(){
    const soma  = 1 + 2
    
    if(soma == 3) {
        return true;
    }

    return false;
}
console.log(isValid())
// Functions expression:
const isValidExpress = function(){
    return true;
}
// Arrow Functions:
const isValidArrow = () => {
    let mult = 2 * 2;
    return mult;
}; 
// Argumentos
const Soma = (num1 = NaN, num2 = NaN) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        let soma = num1 + num2;
        return soma;
    }
    let msg = "Dados diferentes, tente novamente."
    return msg;
}
console.log(Soma(5,5))
// Function x Arrow Function
// O Hoisting funciona com as Functions, mas Arrow não.
// Hoisting:
// Não se pode chamar a Arrow Functions antes dela ser criada, mas as functions sim.
console.log(HelloArrow())
console.log(HelloFunction())

const HelloArrow = () => {
    return console.log("Hello!")
}

function HelloFunction(){
    return console.log("Hello")
}
