"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    //me creo la variable global
    var rockets;
    var datos1 = document.querySelector('#datos1');
    var datos2 = document.querySelector('#datos2');
    var button1 = document.querySelector('#rockInfo1');
    var button2 = document.querySelector('#rockInfo2');
    var inputVel = document.querySelector('#veloTotal');
    var inputVel2 = document.querySelector('#veloTotal2');
    var acelerateButton = document.querySelector('#acelerate');
    var delerateButton = document.querySelector('#decelerate');
    var acelerateButton2 = document.querySelector('#acelerate2');
    var delerateButton2 = document.querySelector('#decelerate2');
    var velMax1;
    var velMax2;
    var initVel = 0;
    var initVel2 = 0;
    function createRocket1(code, thrusters, power, datos) {
        rockets = new Rockets(code, thrusters, power);
        velMax1 = rockets.powerTotal();
        paintRockets(rockets.code, rockets.thrusters, datos);
        paintPower(rockets.power, datos);
        paintVel(datos, velMax1);
    }
    function createRocket2(code, thrusters, power, datos) {
        rockets = new Rockets(code, thrusters, power);
        velMax2 = rockets.powerTotal();
        paintRockets(rockets.code, rockets.thrusters, datos);
        paintPower(rockets.power, datos);
        paintVel(datos, velMax2);
    }
    //pinto codigo y numero de propulsores
    function paintRockets(code, thrusters, boxData) {
        var pCode = document.createElement('p');
        var pThruster = document.createElement('p');
        var textCode = document.createTextNode("Código: " + code);
        var textThrusters = document.createTextNode("Nº propulsores: " + thrusters);
        pCode.append(textCode);
        pThruster.append(textThrusters);
        boxData.append(pCode);
        boxData.append(pThruster);
    }
    //pinto potencia máxima
    function paintPower(power, boxData) {
        var pPowers = document.createElement('p');
        var textPower = document.createTextNode("Pótencia máxima: ");
        var powerText = power.join(", ");
        pPowers.append(textPower);
        boxData.append(pPowers);
        boxData.append(powerText);
    }
    //Pinto velocidad m
    function paintVel(boxData, vel) {
        var pVel = document.createElement('p');
        var textVel = document.createTextNode("Velocidad máxima: ");
        pVel.append(textVel);
        boxData.append(pVel);
        boxData.append(vel);
    }
    createRocket1('32WESSDS', 3, [10, 20, 30], datos1);
    console.log(velMax1);
    createRocket2('LDSFJA32', 6, [30, 40, 50, 50, 30, 10], datos2);
    console.log(velMax2);
    //funciones para mostrar u ocultar la información
    button1.addEventListener('click', function () {
        mostrarOcultar(datos1, this);
    });
    button2.addEventListener('click', function () {
        mostrarOcultar(datos2, this);
    });
    function mostrarOcultar(box, button) {
        if (box.style.display == "none") {
            box.style.display = "block";
            button.innerHTML = "HIDE ROCKET INFO";
        }
        else {
            box.style.display = "none";
            button.innerHTML = "PRINT ROCKET INFO";
        }
    }
    acelerateButton.addEventListener('click', function () {
        aceleration1(velMax1, inputVel);
    });
    delerateButton.addEventListener('click', function () {
        deceleration1(inputVel);
    });
    acelerateButton2.addEventListener('click', function () {
        aceleration2(velMax2, inputVel2);
    });
    delerateButton2.addEventListener('click', function () {
        deceleration2(inputVel2);
    });
    function aceleration1(vel, input) {
        if (initVel < vel) {
            initVel = initVel + 10;
            input.innerHTML = initVel;
            if (initVel > 40) {
                input.style.color = "red";
            }
        }
    }
    function aceleration2(vel, input) {
        if (initVel2 < vel) {
            initVel2 = initVel2 + 10;
            input.innerHTML = initVel2;
            if (initVel2 > 180) {
                input.style.color = "red";
            }
        }
    }
    function deceleration1(input) {
        if (initVel > 0) {
            initVel = initVel - 10;
            input.innerHTML = initVel;
            if (initVel > 40) {
                input.style.color = "red";
            }
            else {
                input.style.color = "black";
            }
        }
    }
    function deceleration2(input) {
        if (initVel2 > 0) {
            initVel2 = initVel2 - 10;
            input.innerHTML = initVel2;
            if (initVel2 > 180) {
                input.style.color = "red";
            }
            else {
                input.style.color = "black";
            }
        }
    }
}); //load
