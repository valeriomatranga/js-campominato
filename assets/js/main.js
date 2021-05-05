// chiedere il livello di gioco
var diff = Number( prompt('inserisci livello tra 0-1-2'));
var num_massimo;

if(diff === 0){
    num_massimo = 100;
}else if(diff === 1){
    num_massimo = 80;
}else if (diff === 2){
    num_massimo = 50;
}


// funzione per generare numeri casuali e inserirli dentro array
function bombe (min,max){
    return Math.floor(Math.random() * (max - min +1) +min);
}                              

var posizioneBombe = [];

var bomba;

while(posizioneBombe.length < 16){
    bomba = bombe(1,num_massimo);

    if(!posizioneBombe.includes(bomba)){
        posizioneBombe.push(bomba);
    }
}
console.log(posizioneBombe);



// chiedere ed inserire in array il numero scelto da user
var punteggio = 0;
var possibilita = num_massimo - 16;
var lista = [];


do{
    var user_num = Number(prompt('inserisci un numero'));

    if(posizioneBombe.includes(user_num)){
        alert('Hai perso. hai totalizzato: ' + punteggio + " punti")
    }else if(lista.includes(user_num)){
        alert("Numero gia inserito!");
    }else if(user_num < 1 || user_num > num_massimo ){
        alert("Numero non consentito!")
    }else{
        lista.push(user_num);
        punteggio = punteggio + 1;
    }

}while(lista.length < possibilita && !posizioneBombe.includes(user_num));

if(lista.length == possibilita){
    alert('Hai vinto!');
}
