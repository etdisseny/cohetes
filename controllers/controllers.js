"use strict";
//me creo la variable global
var rockets;
var box1 = document.querySelector('#datos1');
var box2 = document.querySelector('#datos2');
console.log(box1);
function createRocket(code, thrusters) {
    rockets = new Rockets(code, thrusters);
    paintRockets(box1);
}
function paintRockets(box) {
    console.log(rockets.code);
}
createRocket('32WESSDS', 3);
