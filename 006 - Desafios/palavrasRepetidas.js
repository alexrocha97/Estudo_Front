/*
    Criamos uma variável e deixamos tudo minusculo e 
    fizemos replaceAll para retirar os espaços
*/
const nome = "Alex Ventura".toLowerCase().replaceAll(" ", "");

let letras = {}

for (let i = 0; i < nome.length; i++){
    if (letras[nome[i]]) {
        letras[nome[i]]++
    } else {
        letras[nome[i]] = 1;
    }
}
console.log(letras)
