// STRING
console.log("Olá mundo") 
// esse método sempre pede uma string, padrão sempre utilizados aspas duplas

console.log('"Texto com aspas"')
console.log(`'"'"'`)
console.log(String(123))
// Saída: "Texto com aspas"

/*
    Como podemos escrever uma string
    'String'
    "String"
    `String`
*/


// NUMBER
// Sempre utilize Number mais Number, para não gerar bugs
console.log(typeof Number("123"));
console.log(typeof "123");
console.log(123)
console.log("123" + 1) // Com mais ele concatena
console.log(Number("123") + 1)
console.log("123" - 1) // Com menos ele diminue


// BOOLEAN
// Ele sempre retorna false ou true
// === é comparação
console.log(1 === 2)
console.log(2 === 2)

/*
    BOOLEAN é verdadeiro ou falso
*/


// UNDEFINED E NULL
console.log(undefined) // algo que não foi indefinido
console.log(null) // algo que não existe
console.log(null === undefined)

/*
    UNDEFINED = algo que não foi definido no momento
    NULL = algo que veio nulo
*/


// ARRAY
// 0 => "Dener", 1 => "Alex"
// length é usado para contar os valores na lista
console.log(["Dener", "Alex"].length)
console.log(["Dener", "Alex"])
console.log([1,2,3,45,"Olá mundo", true])
// Iteração
["Alex", "Ventura"].forEach((res, index) => {
        console.log(res, index)
});

// Object
/*
    Objeto: Tenis(Propriedade) "cadarço", "palmilha",
    Objeto: Celular(Propriedade) "Fone de ouvido", "Capinha",
    Objeto: Drone(Propriedade)

    Propriedade / Atributos / Funcionalidade
*/
console.log(
    [
        {
            tenis: ["cadarço", "palmilha"],
            celular: "Fone de ouvido",
            drone: {
                preco: 150,
                camera: "G56-M",
                personalizacao: {
                    cor: "Preto",
                    origem: "BR"
                },
                Isdisponivel: false
            }
        },
        {
            drone: {
                preco: 300,
                camera: "G300-X",
                personalizacao: {
                    cor: "Vermelho",
                    origem: "EUA"
                },
                Isdisponivel: true
            }
        }
    ]
)
