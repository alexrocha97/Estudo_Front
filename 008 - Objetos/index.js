// Object
/*
    Objeto: Tenis(Propriedade) "cadarço", "palmilha",
    Objeto: Celular(Propriedade) "Fone de ouvido", "Capinha",
    Objeto: Drone(Propriedade)

    Propriedade / Atributos / Funcionalidade
*/

let Tenis = {
    tamanho: "G",
    tipo: "Tenis de corrida",
    estoque: false,
    personalizacao: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            profundidade: 40,
            largura: 45
        },
    },
    marca : 
    [
        {
            nome: "Nike"
        },
        {
            nome: "Adidas"
        }
    ],
    getMarca: function (param) 
    {
        return this.marca[param].nome;
    }
};


console.log(Tenis)


// Propriedades, Métodos e Valores Curtos

// PROPRIEDADE
function Tenis(tamanho, disponivel, preco) 
{
    // Calculos/Regras  
    return {
        tamanho: tamanho,
        disponivel: disponivel,
        preco: preco,
    };
}
console.log(Tenis(35, false, "R$ 59.90"))

// VALORES CURTOS
const tam = 35;
const est = true;
const valor = "R$ 59.90"

const Tenis02 = {
    tam: tam,
    est: est,
    valor: valor
}

// MÉTODOS
const Tenis03 = {
    getTamanho(){
        return 35
    }
}

console.log(Tenis03.getTamanho());


// Acessando valores de objetos
const Sapatos = {
    tamanho: 45,
    marca: "Nike",
};

console.log(Sapatos.marca);
console.log(Sapatos.tamanho);


// Destructuring
const Tenis04 = {
    tamanho: 45,
    estoque: true,
    // marcas: [
    //     { nome: "Nike"},
    //     { nome: "Adidas"},
    // ],
    secret: 123456,
    n: 5,
    link: { a: "a", b: { c: "c"}}
}

const { tamanho, estoque, marcas = "Não possui marcas" } = Tenis04;

console.log(tamanho,estoque,marcas);

// Podemos criar apelidos em variavies que o nome está irreconhecivel
const { secret: randomNumber, n: notas } = Tenis04;
console.log(randomNumber);
console.log(notas);

// Acessando mais fundo um objetos
const { link: { a, b: { c } } } = Tenis04;
// console.log(link);
console.log(Tenis04.link.b.c);


// Verificação de propriedade de valor no objeto
// hasOwnProperty | propertyName in Tenis
const Tenis05 = {
    tamanho: 15,
    cor: "Azul",
}

//  hasOwnProperty
if (Tenis05.hasOwnProperty("tamanho")){
    console.log("Existe tamanho!");
} else {
    console.log("Não existe tamanho");
};

// propertyName in Tenis
console.log("tamanho" in Tenis05);

// Adicionando e Atualizando dados do Objetos
const Tenis06 = {
    tamanho: 45,
    estoque: true
}

Tenis06.tamanho = 42; // Atualizar valores de propriedade
Tenis06.preco = "R$ 59.99" // Adicionar propriedades de valores

console.log(Tenis06);

// Removendo propriedade de objetos

delete Tenis06.estoque;
delete Tenis06.preco;

console.log(Tenis06);

// Mesclando e clonando Objetos
let Tenis07 = {
    tamanho: 45,
    estoque: true
}


let link = { link: { a: "a", b: { c: "c"} } }

let clone01 = Tenis07;
console.log(clone01);

let mesclar01 = Object.assign(Tenis07, link);

console.log(mesclar01);


let mesclar02 = { ...Tenis07, ...link};
console.log(mesclar02);
