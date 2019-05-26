document.addEventListener("DOMContentLoaded", function(event) {


//me creo la variable global
var rockets: Rockets;

var datos1= <HTMLElement>document.querySelector('#datos1');
var datos2= <HTMLElement>document.querySelector('#datos2');

var button1=<HTMLObjectElement>document.querySelector('#rockInfo1');
var button2=<HTMLObjectElement>document.querySelector('#rockInfo2');

   

function createRocket(code:string, thrusters: number, power:number[],datos:any){
    rockets= new Rockets(code,thrusters,power);
    paintRockets(rockets.code,rockets.thrusters,datos);
    paintPower(rockets.power, datos);
    paintVel(datos);
}

//pinto codigo y numero de propulsores
function paintRockets(code:string,thrusters:number, boxData:any){   
    var pCode= document.createElement('p');
    var pThruster=document.createElement('p');
    var textCode= document.createTextNode("Código: " + code );
    var textThrusters= document.createTextNode("Nº propulsores: " + thrusters);
    pCode.append(textCode);
    pThruster.append(textThrusters);
    boxData.append(pCode);
    boxData.append(pThruster);
}
//pinto potencia máxima
function paintPower(power:number[], boxData:any){
    var pPowers=document.createElement('p');
    var textPower= document.createTextNode("Pótencia máxima: ");
    var powerText= power.join(", ");
    pPowers.append(textPower);
    boxData.append(pPowers);
    boxData.append(powerText);
    
}
//Pinto velocidad m
function paintVel(boxData:any){
    var pVel=document.createElement('p');
    var textVel= document.createTextNode("Velocidad máxima: ");
    pVel.append(textVel);
    boxData.append(pVel);
    boxData.append(rockets.powerTotal()); 
}

createRocket('32WESSDS', 3, [10,20,30], datos1); 
createRocket('LDSFJA32', 6 , [30,40,50,50,30,10], datos2);


//funciones para mostrar u ocultar la información

  button1.addEventListener('click', function(){
    mostrarOcultar(datos1, this);
    });
  button2.addEventListener('click', function(){
        mostrarOcultar(datos2, this);
    });  


function mostrarOcultar(box:any, button:any){
    if(box.style.display=="none"){
        box.style.display="block";
        button.innerHTML="HIDE ROCKET INFO";
    }else{
        box.style.display="none";
        button.innerHTML="PRINT ROCKET INFO";   
    }
} 



});//load