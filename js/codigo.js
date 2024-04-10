
//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let time = 30;
let tiempoActual = 30
let cancelarTiempo = null;


//apuntando a documentos html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mensajeRecibido = document.getElementById('mensaje');
let mensajeTiempo = document.getElementById('t-restante');
//generando numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

//ordenandolos por la funcion de aleatorio MATHRAMDOM
numeros = numeros.sort(()=>{
    return Math.random() -0.5
});
console.log(numeros)


function contarTiempo(){
    cancelarTiempo = setInterval(()=>{
        time--;
        mensajeTiempo.innerHTML = `Tiempo: ${time} segundos`
        if(time == 0){
            clearInterval(cancelarTiempo);
            bloquearTarjetas();
            mensajeRecibido.innerHTML = 'Se te acabó el tiempo Perdiste 🥺😭"'
        }
    },1000)

    
}

function bloquearTarjetas(){
    for (let i=0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

//funcion principal
function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)
    //sirve para mostrar el numero cuando se le de click a la tarjeta
    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id); // se está recuperando
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado; // se está mostrando

        //desabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){   
        tarjeta2 = document.getElementById(id); // se está recuperando
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado; // se está mostrando

        tarjeta2.disabled = true;

        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;

            //mostrar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(cancelarTiempo);
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😱😱`;
                mensajeTiempo.innerHTML = `Solo te demoraste : ${tiempoActual - time} segundos🥳🥳`;
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🥳🥳`;
                mensajeRecibido.innerHTML = 'Felicidades "Ganaste 🥳🥳"'
            }
        }else{
            //mostrar momentaniamente los valores
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }
    }

}









































