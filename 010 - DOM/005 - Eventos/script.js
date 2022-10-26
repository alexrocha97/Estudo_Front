"use strict";

// const acionarAlerta = (value) => {
//     const nome = "Olá Alex!"
//     alert(nome)
// }

// const btn = document.querySelector("button");
// const body = document.querySelector("body");
// // btn.onclick = function alert01() {
// //     alert("Olá Alex Ventura");
// // }

// btn.addEventListener("click", (event) => {
//     // console.log(event);
//     // console.log(event.clientX, event.clientY);
//     body.style.background = "red";
// });

// // btn.addEventListener("mouseover", () => {
// //     body.style.background = "blue";
// // });

// btn.addEventListener("mouseleave", () => {
//     body.style.background = "#FFF";
// });

// Removendos os manipulador de eventos
// const btn = document.querySelector("button");

// const acionarAlerta = () => {
//     let validador = false;
//     alert("Olá");
//     validador = true;
//     if(validador){
//         btn.removeEventListener("click", acionarAlerta);
//     }
// }

// btn.addEventListener("click", acionarAlerta);

// Preventing Default
// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//     event.preventDefault();
//     const msg = "Evento previnido!";
//     alert(msg);
// });

// Event Delegation

const dados_da_pagina = document.querySelector("#dadosDaPagina");

dados_da_pagina.addEventListener("click", (event) => {
    const { target } = event;
    const body = document.querySelector("body");
    
    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "blue";
            break;
        case "sobre":
            body.style.background = "red";
            break;
        case "contato":
            body.style.background = "black";
            break;
        default:
            body.style.background = "#FFF";
            break;
    }
});


// Validando eventos

// const dados_da_pagina = document.querySelector("#dadosDaPagina");

// dados_da_pagina?.addEventListener("click", (event) => {
//     const { target } = event;
//     const body = document.querySelector("body");

//     switch (target.getAttribute("class")) {
//         case "home":
//             body.style.background = "blue";
//             break;
//         case "sobre":
//             body.style.background = "red";
//             break;
//         case "contato":
//             body.style.background = "black";
//             break;
//         default:
//             body.style.background = "#FFF";
//             break;
//     }
// });
