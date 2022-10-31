
const costoChiamata=0.20;

interface ISmartphone{
    //quanto credito 
    carica:number;
    numeroChiamate:number;
    ricarica(unaRicarica:number):void;
    chiamata(minuti:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}

abstract class Smartphone implements ISmartphone{
    carica: number=0;
    numeroChiamate:number=0;
    minutiChiamate:number=0;

    ricarica(unaRicarica:number):void{
        this.carica += unaRicarica;
    }

    chiamata(minutiDurata: number): void {
        if(this.carica>=minutiDurata*costoChiamata){
            // this.carica=this.carica-(minutiDurata*costoChiamata);
            // this.numeroChiamate++;
            this.minutiChiamate+=minutiDurata;
            console.log("chiamata effettuata")
        }else{
            console.log("non hai credito");
        }

    }
    numero404(): number {
        return this.carica;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate=0;
    }
}

class Iphone extends Smartphone{}
class Galaxy extends Smartphone{}

class Utente {
    name:string;
    lastname:string;
    smartphone?:Smartphone;

    constructor(name:string,lastname:string){
        this.name=name;
        this.lastname=lastname;
    }

    compraTel(smartphone: Smartphone){
        this.smartphone=smartphone;
    }
      
}


 

let iphone= new Iphone();
let galaxy= new Galaxy();

let ut1= new Utente("simone","ponzani");
ut1.compraTel(iphone);

let ut2= new Utente("maria","ponzani");
ut2.compraTel(galaxy);

console.log(ut1);
ut1.smartphone?.ricarica(15);
ut1.smartphone?.chiamata(6);
console.log(ut1.smartphone?.numero404());
console.log(ut1.smartphone?.getNumeroChiamate());

console.log(ut2);
ut2.smartphone?.ricarica(25);
ut2.smartphone?.chiamata(8);
console.log(ut2.smartphone?.numero404());
console.log(ut2.smartphone?.getNumeroChiamate());


let hrs=0;
let min=0;
let sec=0;

function cronometro(){
    //vado ad aumentare i sec
    sec++;
    if(sec >=60){
        sec=0;
        min++;
        if(min>=60){
            min=0;
            hrs++;
        }

    }
    printCronometro();
    ut1.smartphone?.chiamata(min+1);
}

function printCronometro(){
  let crono= document.querySelector('#crono') as HTMLParagraphElement;
    crono.innerHTML= hrs+":" +min+":"+sec;
}

// setInterval(cronometro, 1000)
let clear= setInterval(cronometro, 1000);
let stopClear= clearInterval(clear);