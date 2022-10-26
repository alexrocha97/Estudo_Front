"use strict";

// Melhor uso é 
// querySelect
// querySelectAll => NodeList

const h101 = document.querySelector('p');
console.log(h1);

const h102 = document.querySelector('h1');
console.log(h1);

const Classp = document.querySelector('.paragrafo strong');
const idP = document.querySelector('#paragrafo');
console.log(Classp);
console.log(idP);


let timer = 0;
const title = document.querySelector('title');
setInterval(() => {
    title.innerText = timer; timer++
}, 1000);


const p01 = document.querySelectorAll('p');

p.forEach((item, index) => {
    item.style.color = "#FFF";

    if(index === 0) {
        item.style.background = "blue";
    }
    if(index === 1) {
        item.style.background = "red";
    }
    // console.log(item, index);
});

const p02 = document.getElementById("paragrafo");
console.log(p);

const p03 = document.getElementsByClassName("paragrafo");
console.log(p03);

for (let element of p03) {
    console.log(element);
}

const p04 = document.getElementsByTagName('p');
console.log(p04);

for (let element of p04) {
    console.log(element);
} 
