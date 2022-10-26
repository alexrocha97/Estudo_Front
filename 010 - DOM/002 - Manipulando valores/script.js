const p = document.querySelector('p');
const div = document.querySelector("div");
const input = document.querySelector("#name");
const ul = document.querySelector("ul");

/*
    textContent ==> retorna com as formatações, mas sem elementos HTML
    innerText ==> retorna somente o texto, sem formatações e sem elementos.
    Nenhum dos dois você consegue adicionar tags
*/

// p.textContent = "Alex Ventura"
// p.innerText = "Alex Rocha"

// console.log(p.textContent);
// console.log(p.innerText); 

// console.log(1, div);

// // div.innerHTML += "<strong>Esse é meu texto alterado</strong>"
// div.innerHTML = `${div.innerHTML} <br><strong>Esse é meu texto alterado</strong>`;
// console.log(2, div);

// const elementUL = document.createElement("ul");

// [1,2,3].forEach((item) => {
//     const elementLi = document.createElement("li");
//     elementLi.innerText = item;
//     elementUL.appendChild(elementLi);
//     // console.log(elementLi);
// });


// div.appendChild(elementUL);
// console.log(elementUL);


// Input value

// console.log(input.value);

// setTimeout(() => {
//     input.value = "Ventura"
//     console.log(input.value);
// }, 1000)


// Atributos
// console.log(div);

// div.setAttribute('id', "teste");
// div.setAttribute('class', `${div.getAttribute("class")} active`);
// div.setAttribute('class', `${div.getAttribute("class")} background-red`);
// // console.log(div.getAttribute("id"));
// div.removeAttribute("id");
// div.removeAttribute("class");
// console.log(div);

// Document fragment

/*
    dom[principal]
    fragment [secundario] --> fora do dom principal
*/

// console.log(ul);
// const fragment = document.createDocumentFragment();
// // console.log(fragment);
// const lanches = [ "lanche 01", "lanche 02", "lanche 03"];

// lanches.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     // ul.append(li);
//     fragment.append(li);
// });

// // console.log(fragment);
// ul.append(fragment);


// Removendo elementos

// const um = document.querySelector("h1");
// const li = document.querySelectorAll("li");
// um.remove();
// li[02].remove();
// console.log(um);
// console.log(li);
