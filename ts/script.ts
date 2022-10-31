interface Smartphone{
    //quanto credito 
    carica:number;
    numeroChiamate:number;
    ricarica(unaRicarica:number):void
    chiamata(minuti:number):void
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamata():void;

}

class Utente1 implements Smartphone{

    carica:number=0;
    numeroChiamata:number=0;
    minutiChiamate:number=0;

      
    ricarica(unaRicarica:number):void{
        this.carica=this.carica+ this.unaRicarica;
    }

    chiamata(minutiChiamate:number):void{
        if(this.carica>=minutiDurata*costoChiamata){
            this.carica=this.carica=(minutiDurata*costoChiamata);
            this.numeroChiamata++;
            this.minutiChiamate += minutiDurata;
            console.log("chiamata effettuata");
        }
        else{
            console.log("finito il credito");
        }
       
    }

    numero404():number{
        return this.carica;
    }


    getNumeroChiamata():number{
        return this.numeroChiamata;
    }

    azzeraChiamata(): void {
        this.numeroChiamata=0;
    }

}

class iphone extends Smartphone{}
class glaxy extends Smartphone{}
 
class Utente{
    name:string;
    lastname:string;
    smartphone?:Smartphone;

}

compraTel(smartphone){
    this.smartphone=smartphone;
}



let ipone= new iphone();
let galaxy= new galaxy();
let ut1= new Utente("simone","ponzani");
ut1=compraTel(iphone);

let ut2= new Utente("maria","ponzani");
ut2=compraTel(iphone);

console.log(ut1);
ut1.smartphone?.ricarica(15);
ut1.smartphone?.chiamata(6);
console.log(ut1.smartphone?.numero404());
console.log(ut1.smartphone?.getNumeroChiamate());

console.log(ut1);
ut2.smartphone?.ricarica(15);
ut2.smartphone?.chiamata(6);
console.log(ut2.smartphone?.numero404());
console.log(ut2.smartphone?.getNumeroChiamate());


let hr=0;
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
            hr++;
        }

    }
    console.log(hr,min,sec);
    printChiamata();
    ut1.smartphone?.chiamata(min+1);
}

function printCronometro(){
  let crono= document.querySelector('#crono') as HTMLParagraphElement;
    crono.innerHTML="hour:"+hr+", min:"+min+ " , sec:"+ sec;
}

setInterval(cronometro, 1000)