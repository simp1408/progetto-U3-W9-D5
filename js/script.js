"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
const costoChiamata = 0.20;
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.minutiChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        if (this.carica >= minutiDurata * costoChiamata) {
            // this.carica=this.carica-(minutiDurata*costoChiamata);
            // this.numeroChiamate++;
            this.minutiChiamate += minutiDurata;
            console.log("chiamata effettuata");
        }
        else {
            console.log("non hai credito");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class Iphone extends Smartphone {
}
class Galaxy extends Smartphone {
}
class Utente {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    compraTel(smartphone) {
        this.smartphone = smartphone;
    }
}
let iphone = new Iphone();
let galaxy = new Galaxy();
let ut1 = new Utente("simone", "ponzani");
ut1.compraTel(iphone);
let ut2 = new Utente("maria", "ponzani");
ut2.compraTel(galaxy);
console.log(ut1);
(_a = ut1.smartphone) === null || _a === void 0 ? void 0 : _a.ricarica(15);
(_b = ut1.smartphone) === null || _b === void 0 ? void 0 : _b.chiamata(6);
console.log((_c = ut1.smartphone) === null || _c === void 0 ? void 0 : _c.numero404());
console.log((_d = ut1.smartphone) === null || _d === void 0 ? void 0 : _d.getNumeroChiamate());
console.log(ut2);
(_e = ut2.smartphone) === null || _e === void 0 ? void 0 : _e.ricarica(25);
(_f = ut2.smartphone) === null || _f === void 0 ? void 0 : _f.chiamata(8);
console.log((_g = ut2.smartphone) === null || _g === void 0 ? void 0 : _g.numero404());
console.log((_h = ut2.smartphone) === null || _h === void 0 ? void 0 : _h.getNumeroChiamate());
let hrs = 0;
let min = 0;
let sec = 0;
function cronometro() {
    var _a;
    //vado ad aumentare i sec
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
    printCronometro();
    (_a = ut1.smartphone) === null || _a === void 0 ? void 0 : _a.chiamata(min + 1);
}
function printCronometro() {
    let crono = document.querySelector('#crono');
    crono.innerHTML = hrs + ":" + min + ":" + sec;
}
// setInterval(cronometro, 1000)
let clear = setInterval(cronometro, 1000);
let stopClear = clearInterval(clear);
