"use strict";
class Utente1 {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    getCarica() {
        return this.carica;
    }
    getRicarica(ricarica) {
        return ricarica;
    }
    getNumber404(ricarica) {
        return this.carica += ricarica;
    }
    getTotChiamata(minuti) {
        let costoChiamata = this.carica - (0.20 * minuti);
        if (costoChiamata > this.carica) {
            console.log("credito esaurito");
        }
        return costoChiamata;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    getAzzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}
let simone = new Utente1(10, 20);
// credito iniziale 10 euro
console.log("credito iniziale :" + simone.getCarica());
//numero chimate effettuate
console.log("numero chiamate effettuate " + simone.getNumeroChiamate());
//ricarico il cellulare di 100 euro
console.log("hai caricato il cell di euro :" + simone.getRicarica(100));
console.log("il tuo credito è:" + simone.getNumber404(100));
// il costo della chimata lunga 10min
console.log("il tuo credito residuo è di:" + simone.getTotChiamata(10.0));
//chiamata otre i minuti  supera il costo del credito
console.log("il tuo credito residuo dopo aver chiamato:" + simone.getTotChiamata(600.0));
// console.log("il tuo credito residuo:" + simone.getCarica());
