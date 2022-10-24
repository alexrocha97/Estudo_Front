/*
    Array
    1 - Conjunto de dados 
    2 - Lista de dados
*/
const arr = [1, 2, 3, "Hello word", true, "Alex Rocha"];

// console.log(arr);
console.table(arr); // Vair mostrar os índice
console.log(arr[5]);
console.table(arr.length); // Quantidade de valores no array


const [a,b,c] = ["Arroz", "Feijão", "Bife"]
console.log(a);
console.log(b);
console.log(c);

// Spread Operator 
const num = [1,2,3,4,5];
// Os três pontinhos vai tirar do array e mostrar apenas o valor
console.log(...num);
console.log(Math.max(...num));

// Adicionando elementos
let listaDados = [1,2,3,4,5];
listaDados.push(6); // Add no final
listaDados.unshift(0); // Adicionando o valor no inicio

// console.log(listaDados); 

// Removendo elementos
let listaDedados = [1,2,3,4,5]
console.table(listaDedados);

listaDedados.shift(); // Ele remove o primeiro elemento de um array e retorna esse elemento
listaDados.pop(); // Ele remove o último elemento de um array e retorna esse elemento

console.table(listaDedados);

// Removendo elementos parte dois
/*
    slice -> pega os dados dentro de um range sem quebrar o Array
    splice -> remove os dados do Array dentro de um range
*/
let listaTelefonicas = [
    { nome: "Alex", telefone: "(99) 99-999-999"},
    { nome: "Ventura", telefone: "(99) 99-999-999"},
    { nome: "Rocha", telefone: "(99) 99-999-999" },
    { nome: "Maria", telefone: "(99) 99-999-999" },
    { nome: "Alexsandro", telefone: "(99) 99-999-999" },
]

console.table(listaTelefonicas);

// const novoArray = listaTelefonicas.slice(0, 3); // Ele faz apenas uma cópia
// console.table(novoArray);

listaTelefonicas.splice(3, 1); // Ele remove os item do array
console.log(listaTelefonicas.splice(3, 1));

console.table(listaTelefonicas)


// Ordenar e reverter valores 
const StringArray = ["A","B","C"]

console.log(StringArray.sort());
console.log(StringArray.reverse());

const NumberArray = [1,2,3,4,5]

// Esta formulas que passamos ele vai fazer uma comparação
console.log(NumberArray.sort((a, b) => a - b));
console.log(NumberArray.sort((a, b) => b - a));
console.log(NumberArray.sort((a, b) => a - b).reverse());

// Manipulação com objetos
const ObjArray = [
    { 
        nome: "Alex Ventura",
        idade: 56
    },
    { 
        nome: "Rocha Araujo",
        idade: 35
    },
    { 
        nome: "Tailane Prado",
        idade: 15
    },
]

console.log(ObjArray.sort((a, b) => a.nome.localeCompare(b.nome)));


// For..for in..for of
const myArray = [1,2,3,4,5,6];

// for ([inicialização]; [condição]; [expressão final])
for (let i = 0; i < ObjArray.length; i++){
    console.log(ObjArray[i].nome, ObjArray[i].idade);
}

// For of
for(let item of ObjArray) {
    console.log(item.nome);
}

// for in 
const obj = { nome: "Patolino", sobrenome: "Pato"};

for(let item in obj) {
    console.log(obj[item]);
}

// Continue e break
const Nomes = [
    {
        nome: "Alex Ventura",
        idade: 56
    },
    {
        nome: "Rocha Araujo",
        idade: 35
    },
    {
        nome: "Tailane Prado",
        idade: 15
    },
]

for (let item of Nomes) {
    if (item.nome == "Rocha Araujo") {
        console.log("Continua");
        continue;
    }
    if (item.nome === "Tailane Prado" ){
        console.log("Lembrar de enviar email");
        break;
    }
        
}


// Foreach
Nomes.forEach((item, index) => {
    console.log(index, item.nome)
});


// Map
const pedidos = [
    {
        id: 420,
        nome: "Dener",
        alimento: "Sandubão de Bacon",
        bebida: "Suco Limão",
    },
    {
        id: 152,
        nome: "Naiady",
        alimento: "Sandubão Vegano",
        bebida: "Suco de Laranja",
    },
    { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
    },
    { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante" },
];

pedidos.map((item, index) => {
    if(item.id === 29){
        return (item.alimento = "kibe")
    }
});

console.log(pedidos);

// Filter - Retorna todos que encontrarem iguais
const pedidosFilter = [
    {
        id: 420,
        nome: "Dener",
        alimento: "Sandubão de Bacon",
        bebida: "Suco Limão",
        preco: 100,
    },
    {
        id: 152,
        nome: "Naiady",
        alimento: "Sandubão Vegano",
        bebida: "Suco de Laranja",
        preco: 200,
    },
    { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 200,
    },
    { 
        id: 55, 
        nome: "José", 
        alimento: "Pizza", 
        bebida: "Refrigerante",
        preco: 100,
    },
];

const filterRefri = pedidosFilter.filter((item, index) => {
    return item.bebida === "Refrigerante";
});

console.log(filterRefri);


// Find - Apenas retorna apenas uma busca, mesmo tendo diversos iguais a busca.
const findId = pedidosFilter.find((element) => {
    return element.bebida === "Refrigerante";
});

console.log(findId);


// Every
const IsRefri = pedidosFilter.every((element) => {
    return element.bebida === "Refrigerante";
});

console.log(IsRefri);

// Some 
const existAlimento = pedidosFilter.some((item, index) => {
    return item.alimento === "Pizza"
});

console.log(existAlimento);

// Reduce 
// Pegar todos os valores de array e condensá-los em um só.
const balancoDiario = pedidosFilter.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancoDiario);
