let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;



function textoElementoHtml(elemento, texto){
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let intentoDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(intentoDeUsuario === numeroSecreto){
        textoElementoHtml('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(intentoDeUsuario < numeroSecreto){
            textoElementoHtml('p','El número secreto es mayor');
        }else{
            textoElementoHtml('p','El número secreto es menor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    textoElementoHtml('h1','Juego del número secreto');
    textoElementoHtml('p','Ingrese un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiamos la caja
    limpiarCaja();
    //Reexcribimos el rango de numeros
    //Generamos un nuevo número secreto
    //Reiniciamos el contador de intentos
    condicionesIniciales();
    //Desabilitamos el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','True');
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Accion a realizar cuando se sortea todo el rango de numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        textoElementoHtml('p','Se han sorteado todos los numero disponibles');
    } else {
        //Verificamos si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    


}

condicionesIniciales();