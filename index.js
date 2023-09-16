let userName = prompt('Lütfen isminizi giriniz :')
let myDom = document.querySelector('#myName');

myDom.innerHTML = `${userName}`;


// CLOCK

let myClock = document.querySelector('#myClock');
function myTime() {
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gun = date.getDay();


    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let Mygun = gunler[gun];


    if (dakika < '10') {
        myClock.innerHTML = `${saat} : 0${dakika} : ${saniye}   ${Mygun}`
           
    } else {
        myClock.innerHTML = `${saat} : ${dakika} : ${saniye}  ${Mygun}`


    }


    let t = setTimeout(function () { myTime() }, 1000);


}

myTime();

// DAY kismi 
