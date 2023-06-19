'use strict';
let divEle = document.getElementById("box");
console.log(divEle);


divEle.addEventListener("dblclick", clickHandler);

function clickHandler(event) {
    console.log(event);
    alert("this is coming from click event");
    divEle.style.backgroundColor = "red"; 
}