//me creo la variable global
var rockets: Rockets;
var box1= <HTMLElement>document.querySelector('#datos1');
var box2= <HTMLElement>document.querySelector('#datos2');
console.log(box1);
function createRocket(code:string, thrusters: number){
    rockets= new Rockets(code,thrusters);
    paintRockets(box1);
}

function paintRockets(box:any){
    console.log(rockets.code);
}
createRocket('32WESSDS', 3);