// Variáveis são formas para salvar dados que possam ser acessados ou manipulados posteriormente
/*
    var // não é mais utilizado, pois é usado globalmente
    let // Ele é gerado dentro de um escopo
    const // Aqui é armazenado apenas um vez.

    o let é semelhante ao var, você pode alterar no caminho.
    Sempre criar o nome da variável sempre descritiva para o uso dela.
*/
// Variáveis pode armazenar varios tipos de dados, pode ser: boolean, string, number, array
var cachorro = "Kiara"
console.log(cachorro);

let lanche = "Bolo"
console.log(lanche);

const nome = "Alex"
console.log(nome);
// Nomeando variáveis
/*
    Variável não pode ter espaços, números, 
    a junção de número com letras, nomes reservados e caractere especial
*/
let nomeSobrenome = "Alex Ventura"
let _nomeSobrenome = "Alex Ventura"
let nome_Sobrenome = "Alex Ventura"
// Multiplas variáveis:
let _nome, sobrenome, idade;
_nome = "Alex";
sobrenome = "Rocha";
idade = 25;


// ESCOPO
/*
    Ele determina quais dados os dados que podem
    ser acessados em uma determinada parte do código.
*/
if(true)
{
    console.log("Hello Word!")
}

// Dentro de um bloco de código
{
    let meuNome = "Alex";
    console.log(meuNome);
}
