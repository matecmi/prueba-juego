
// variabñes para almacenar las casillas y numeros aleatorios para odernar el juego
let cajas = new Array();
let numerosAleatorios = new Array();
let CasillasDescubiertas =new Array();

//Variables para los resultados de acierto 

let contadorAcierto=0;
let contadorDesaciertos=0;
let Acierto= document.getElementById('acierto');

//Variables para los resultados de Movimientos

let contadorMovimientos=0;
let movimientos = document.getElementById('movimientos');

for (let i = 0; i < 16; i++) {
    
    CasillasDescubiertas.push(true);
}



// funcion que recoore los 16 casilleros del tablero
for (let i = 1; i < 17; i++) {
    Aleatorio(i);
}

// Funcion que ordena los valores de forma aleatoria para que existan 2 de cada valor  en el juego

function Aleatorio(valor) {

    let aletorio = true;
    if (valor == 9) {
        let numerosAleatorios2 = new Array();
        numerosAleatorios=numerosAleatorios2;
    }

    while (aletorio) {

        let contador = 0;
        let ran = Math.round(Math.random() * 8);

        for (let j = 0; j < numerosAleatorios.length; j++) {

            if (numerosAleatorios[j] == ran) {
                contador++;
            }
        }
        if (contador == 0 && ran!=0) {
            aletorio = false;
            numerosAleatorios.push(ran);
            let caja = document.getElementById(valor);
            let cajah1=document.getElementById('c'+ valor);
            cajas.push(caja);
            caja.value = ran;
            cajah1.innerText=ran;
        }
    }
}


//Variables para almacenar el valor que tiene la caja para el jugador 
let contador=0;
let valor1;
let valor2;

//valores para almacenar el valor del ID de las cajas
let idValor1;
let idValor2;

//Variables para el temporizador
let tiempo= document.getElementById('tiempo');
let inicio=true;


window.onload = init;

 function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}  
 
       
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
}

function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}

function parar(){
    clearInterval(id);
}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}


//Funcion que compara las opciones elegidas por el jugador
function logica(valor,objetoValor) {
    if(inicio){
        cronometrar();
        inicio=false;
    }
    objetoValor.style.backgroundImage = 'linear-gradient(135deg,#00B7D4,#505488,#2F3F80,#161569,#5A4894,#A950A1,#FF7CAE)';
    contador++;
    if(contador==1){
        valor1 = valor;
        idValor1=objetoValor.id;

    }
    if (contador==2){
        valor2 = valor;
        idValor2=objetoValor.id;
        contador=0;
       

        if(valor1==valor2){
            contadorMovimientos++;
            CasilleroEncontrado();
            contadorAcierto++;
            Acierto.innerText=contadorAcierto;
            movimientos.innerText=contadorMovimientos;

        }else{
            let tiempo;
            tiempo= setTimeout(AspectoInicial, 400);
            contadorMovimientos++;
            movimientos.innerText=contadorMovimientos;


        }

        if(contadorAcierto==8){
            parar();
            tiempo.innerText='Felicidades lo has logrado en:';
        }

    }
}


function AspectoInicial() {

    console.log('entdfshjdjhsqakjdhakjhdsiajhdkahjdkahsd');

    cajas[idValor1-1].style.backgroundImage = 'linear-gradient(135deg,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff)';
    cajas[idValor2-1].style.backgroundImage = 'linear-gradient(135deg,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff)';
}
function CasilleroEncontrado() {
        CasillasDescubiertas[idValor1-1]=false;
        CasillasDescubiertas[idValor2-1]=false;
}



cajas[0].addEventListener('click',()=>{

    if (CasillasDescubiertas[0]) {
        logica(cajas[0].value,cajas[0]);
    }
});
cajas[1].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[1]) {
        logica(cajas[1].value,cajas[1]);
    }
});
cajas[2].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[2]) {
        logica(cajas[2].value,cajas[2]);
    }
});
cajas[3].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[3]) {
        logica(cajas[3].value,cajas[3]);
    }

});
cajas[4].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[4]) {
        logica(cajas[4].value,cajas[4]);
    }

});
cajas[5].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[5]) {
        logica(cajas[5].value,cajas[5]);
    }

});
cajas[6].addEventListener('click',()=>{

    if (CasillasDescubiertas[6]) {
        logica(cajas[6].value,cajas[6]);
    }
    
});
cajas[7].addEventListener('click',()=>{
    
    if (CasillasDescubiertas[7]) {
        logica(cajas[7].value,cajas[7]);
    }

});
cajas[8].addEventListener('click',()=>{
    if (CasillasDescubiertas[8]) {
        logica(cajas[8].value,cajas[8]);
    }

});
cajas[9].addEventListener('click',()=>{
    if (CasillasDescubiertas[9]) {
        logica(cajas[9].value,cajas[9]);
    }

});
cajas[10].addEventListener('click',()=>{
    if (CasillasDescubiertas[10]) {
        logica(cajas[10].value,cajas[10]);
    }

});
cajas[11].addEventListener('click',()=>{
    if (CasillasDescubiertas[11]) {
        logica(cajas[11].value,cajas[11]);
    }

});
cajas[12].addEventListener('click',()=>{
    if (CasillasDescubiertas[12]) {
        logica(cajas[12].value, cajas[12]);
    }

});
cajas[13].addEventListener('click',()=>{
    if (CasillasDescubiertas[13]) {
        logica(cajas[13].value,cajas[13]);
    }

});
cajas[14].addEventListener('click',()=>{
    if (CasillasDescubiertas[14]) {
        logica(cajas[14].value,cajas[14]);
    }

});
cajas[15].addEventListener('click',()=>{
    if (CasillasDescubiertas[15]) {
        logica(cajas[15].value,cajas[15]);
    }

});


