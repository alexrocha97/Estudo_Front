"use strict";

const strong = document.querySelector("strong");
const p = document.querySelector(".paragrafo");
// Ele busca o PAI da tag
// console.log(document.documentElement.parentNode === document);
// console.log(document.documentElement.parentElement === document);
// Ele sempre a camada de cima responsavel pela tag e mostra o pai dela.

// console.log(p.parentElement);
// console.log(p.parentNode);

// FILHOS
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
// const p = document.querySelector(".paragrafo");
// console.log(container.children); // HTML COLLECTION || Não server para usar com foreach
// console.log(container.childNodes); // NODEList

// // Alternativa para poder iterar os filhos
// const children = Array.from(container.children);
// // console.log(children);
// children.forEach((item) => {
//     console.log(item);
// });


// - Primeiro elemento filho
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(p.firstChild);
// console.log(p.firstElementChild);


// - Último filho
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(p.lastChild);
// console.log(p.lastElementChild);

// - Próximo irmão

// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);

// - Irmão anterior

// console.log(p.previousSibling);
// console.log(p.previousElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);


// Acrescenta elementos (APPEND / APPENDCHILD)
// container.append("Alex Rocha");
// container.append("<p>Hello word</p>")

// const newdiv = document.createElement("div");
// newdiv.innerText = "Olá Alex";
// container.appendChild(newdiv);


// const newH2 = document.createElement("h2");
// const paragrafo = document.querySelector(".paragrafo");

// newH2.innerText = "Novo h2";


// // container.insertBefore(newH2, paragrafo);
// container.insertBefore(newH2, h1);


// // after e before
// const newp = document.createElement("p");
// newp.innerText = "Olá Alex"
// // container.after("Olá Alex");

// // container.after(newp);
// container.before(newp);
