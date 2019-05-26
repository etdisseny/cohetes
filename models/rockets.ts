class Rockets{
    code :string;
    thrusters: number;
    power:number[];


    constructor(code:string,thrusters:number,power:number[]){
        this.code=code;
        this.thrusters=thrusters;
        this.power=power;
    }
  public powerTotal(){
   var numTotal=0;
    for(let i=0; i<this.power.length; i++){
       numTotal= numTotal + this.power[i];
    }
    return numTotal;
    
  }
    
}