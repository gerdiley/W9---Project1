"use strict";
// classe
class User {
    constructor(_credito, _numeroChiamate) {
        this._credito = _credito;
        this._numeroChiamate = _numeroChiamate;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(importo) {
        this.credito += importo;
    }
    chiamata(durataMinuti) {
        this.numeroChiamate++;
        let spesa = (durataMinuti * 0.20);
        this.credito -= spesa;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Istanza di classe
let user1 = new User(15, 0);
document.getElementById('credito').innerHTML = user1.credito.toString();
///////////////////////////RICARICA/////////////////////
var btnRicarica = document.getElementById('btnRicarica');
var newCredito;
btnRicarica.addEventListener('click', () => {
    var _a;
    btnRicarica.classList.add('disabled');
    let div = document.createElement('div');
    (_a = document.getElementById('divRicarica')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    // 3 Opzioni di ricarica
    var button10 = document.createElement('button');
    var button20 = document.createElement('button');
    var button30 = document.createElement('button');
    button10.innerHTML = '10 Euro';
    button20.innerHTML = '20 Euro';
    button30.innerHTML = '30 Euro';
    button10.classList.add('btn', 'btn-primary', 'm-2');
    button20.classList.add('btn', 'btn-primary', 'm-2');
    button30.classList.add('btn', 'btn-primary', 'm-2');
    div.appendChild(button10);
    div.appendChild(button20);
    div.appendChild(button30);
    // RICARICO 10 EURO
    button10.addEventListener('click', () => {
        user1.ricarica(10);
        newCredito = user1.numero404();
        document.getElementById('credito').innerHTML = newCredito.toFixed(2);
        div.classList.add('d-none');
        btnRicarica === null || btnRicarica === void 0 ? void 0 : btnRicarica.classList.remove('disabled');
    });
    // RICARICO 20 EURO
    button20.addEventListener('click', () => {
        user1.ricarica(20);
        newCredito = user1.numero404();
        document.getElementById('credito').innerHTML = newCredito.toFixed(2);
        div.classList.add('d-none');
        btnRicarica === null || btnRicarica === void 0 ? void 0 : btnRicarica.classList.remove('disabled');
    });
    // RICARICO 30 EURO
    button30.addEventListener('click', () => {
        user1.ricarica(30);
        newCredito = user1.numero404();
        document.getElementById('credito').innerHTML = newCredito.toFixed(2);
        div.classList.add('d-none');
        btnRicarica === null || btnRicarica === void 0 ? void 0 : btnRicarica.classList.remove('disabled');
    });
});
/////////////////////EFFETTUA CHIAMATA////////////////
var btnChiamata = document.getElementById('btnChiamata');
var interval;
var sec = 0;
var min = 0;
var minuti = 0;
// creo elementi html
var div = document.createElement('div');
var timer = document.createElement('p');
var btnOk = document.createElement('button');
var stopTimer = document.createElement('button');
btnOk.innerHTML = "OK";
btnOk.classList.add('btn', 'btn-primary');
// Evento Chiamata
btnChiamata.addEventListener('click', () => {
    btnChiamata.classList.add('disabled');
    document.getElementById('divChiamata').appendChild(div);
    stopTimer.classList.add('btn', 'btn-danger');
    stopTimer.innerHTML = '<i class="bi bi-telephone-x"></i> Chiudi';
    div.appendChild(timer);
    div.appendChild(stopTimer);
    // avvio timer chiamata
    startTimer();
});
// Evanto button Chiudi
stopTimer.addEventListener('click', () => {
    stopTimer.classList.add('disabled');
    // interrompo timer
    clearInterval(interval);
    if (sec < 60) {
        minuti = sec / 60;
    }
    else {
        minuti = min;
    }
    // chiamo il metodo chiamata
    user1.chiamata(minuti);
    document.getElementById('chiamate').innerHTML = user1.numeroChiamate.toString();
    // calcolo e stampo il nuovo credito
    newCredito = user1.numero404();
    document.getElementById('credito').innerHTML = newCredito.toFixed(2);
    // mando messaggio con resoconto chiamata
    timer.innerHTML = `<p>Chiamata terminata</p> ${timer.innerHTML}
    <p> Costo chiamata: ${(minuti * 0.2).toFixed(2)}&euro;</p>`;
    // faccio apparire button ok
    timer.appendChild(btnOk);
});
// evento buonn OK
btnOk.addEventListener('click', () => {
    btnChiamata.classList.remove('disabled');
    stopTimer.classList.remove('disabled');
    // resetto timer
    clearInterval(interval);
    min = 0,
        sec = 0,
        minuti = 0;
    document.getElementById('divChiamata').innerHTML = "";
    timer.innerHTML = "";
    timer.firstElementChild.innerHTML = "";
    div.removeChild(btnOk);
    // riattivo buoon chiudi
    stopTimer.classList.remove('disabled');
});
// funzione timer 
function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = `Tempo trascorso: ${min} min ${sec} sec`;
        sec += 1;
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
    }, 1000);
}
/////////////////////AZZERA CHIAMATE/////////////////
var btnAzzera = document.getElementById('azzera');
btnAzzera === null || btnAzzera === void 0 ? void 0 : btnAzzera.addEventListener('click', () => {
    user1.azzeraChiamate();
    document.getElementById('chiamate').innerHTML = "0";
});
// ////////////////////ESERCIZIO DI DEFAULT////////////
// interface UserInterface{
//     credito:number,
//     numeroChiamate:number,
//     ricarica(importo:number):void;
//     chiamata(durataMinuti:number):void;
//     numero404():number;
//     getNumeroChiamate():number;
//     azzeraChiamate():void;
// }
// class User implements UserInterface{
//     public credito: number;
//     public numeroChiamate: number;
//     constructor(public _credito:number, public _numeroChiamate:number){
//         this.credito =_credito;
//         this.numeroChiamate=_numeroChiamate;
//     }
//     public ricarica(importo: number): void {
//         this.credito += importo;
//         console.log(`Hai effettuato una ricarica di ${importo}`);
//     }
//     public chiamata(durataMinuti: number): void {
//         this.numeroChiamate++
//         let spesa = (durataMinuti * 0.20)
//         this.credito -= spesa;
//         console.log(`Hai effettuato una chiamata di ${durataMinuti} minuti e hai speso ${spesa}`);
//     }
//     public numero404(): number {
//         console.log(`Il tuo credito residuo è ${this.credito}`);
//         return this.credito;
//     }
//     public getNumeroChiamate(): number {
//         console.log(`Hai effettuato in tutto ${this.numeroChiamate} chiamate`);
//         return this.numeroChiamate;
//     }
//     public azzeraChiamate(): void {
//         this.numeroChiamate = 0;
//         console.log(`chiamate azzerate: ${user1.numeroChiamate}`)
//     }
// }
// let user1 = new User(0, 0);
// user1.ricarica(30);
// user1.chiamata(2);
// user1.numero404();
// user1.getNumeroChiamate();
// user1.azzeraChiamate();
// let user2 = new User(0, 0);
// user2.ricarica(50);
// user2.chiamata(5);
// user2.numero404();
// user2.getNumeroChiamate();
// user2.azzeraChiamate();
// let user3 = new User(0, 2);
// user3.ricarica(15);
// user3.chiamata(15);
// user3.numero404();
// user3.getNumeroChiamate();
// user3.azzeraChiamate();
