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


// Function Arrow possuem this léxico enquanto o modelo normal possui this dinâmico.
const lanches = {
    cardapio: [
        { nome: "Pão", preço: "R$ 10" },
        { nome: "Presunto", preço: "R$ 5" },
    ],

    // A function ela pega o contexto do seu "pai" ou contexto global
    meuPedidoFunction: function (select) {
        return console.log(this.cardapio[select]);
    },

    // O contexto da arrow function é dentro dele, fora não funcionará
    // o this sempre vai pegar a herança do seu pai numa function
    meuPedidoFunctionArrow: (select) => {
        this.cardapio = [
            { nome: "Pão", preço: "R$ 10" },
            { nome: "Presunto", preço: "R$ 5" },
        ]

        return console.log(this.cardapio[select]);
    },

    // Usando o bind você poderá acessar o contexto de fora caso passe para outra function dentro de outra function
    meuPedidoFunctionTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000)
    },
};


// IIFE (Expressão de função invocada imediatamente)
(function (num1, num2) { 
    const cal = num1 + num2
    console.log(cal)
 })(1,2);


// Strict mode elimina alguns erros silenciosos 
// que passariam batido do JavaScript e os faz emitir erros
"use strict";

(() => {
    teste = "Hello"
})();

console.log(teste)


// Funções Construtoras
function Name(name, sobrenome) {
    this.name = name;
    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`
        return nomeCompleto;
    };
}
const dener = new Name("Alex", "Rocha");
// const teste2 = new Name("Rocha");

function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.sobretracao = (num1, num2) => {
        return `${num1 - num2}`;
    }
}

const opcaoCal = new Calculadora();
console.log(opcaoCal.soma(1, 2))
console.log(opcaoCal.sobretracao(1, 2))


// console.log(dener);
// console.log(dener.sobreNome());
// console.log(dener.name);
// console.log(teste2.name);
