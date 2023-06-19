'use strict';

let pEle = document.getElementById("par");
console.log(pEle);

let h1Ele = document.getElementsByTagName("h1");
console.log(h1Ele[0]);

let h1Ele2 = document.getElementsByClassName("heading2");
console.log(h1Ele2);

// let secEle = document.createElement("section");
// secEle.id = "sectionTag";

let secEle = document.getElementById("sectionTag");
console.log(secEle);

// 1-create the element
let h3Ele = document.createElement("h3");

// 2- add a text to that element
h3Ele.textContent = "JAVA students";
h3Ele.style.color = "red";
h3Ele.style.backgroundColor = "grey"
// 3- append to parent "section"

secEle.appendChild(h3Ele);


let imgEle = document.createElement("img");
imgEle.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwuKU2mxMSpKTlM6VyXkJIvTIaIpiQu31AQ&usqp=CAU";
secEle.appendChild(imgEle);




