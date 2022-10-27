"use strict";


const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const nome = form.nome.value;
//     const password = form.senha.value;
//     const formdata = new FormData(form);

//     console.log(form);
//     formdata.set("name", nome);
//     formdata.set("password", password);

//     console.log(formdata.has("nome"));
//     console.log(formdata.has("password"));

//     if(formdata.has("nome") || formdata.has("senha")){

//     }
// });

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const name  = form.nome.value;

//     const newDivElement = document.createElement("div");
//     newDivElement.innerText = name;
//     form.nextElementSibling.remove();
//     form.after(newDivElement);
// });


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const radio = form.radio;
//     submit.innerHTML = radio.value;



//     // radio.forEach(item => {
//     //     if(item.checked){
//     //         console.log(item);
//     //     }
//     // });
//     // console.log(radio.value);
// });

// form.radio.forEach((item) => {
//     item.addEventListener("change", (event) => {
//         const { target } = event
//         if (target.checked){
//             // console.log(target.value);
//             change.innerHTML = target.value;
//         }
//     });
// });

let checkedValue = [];

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const checkbox = form.checkbox;
//     checkedValue = [];

//     checkbox.forEach(element => {
//         if(element.checked){

//             checkedValue.push(element.value);
//             console.log(checkedValue);
//         }
//     });

//     submit.innerHTML = checkedValue;
// });
