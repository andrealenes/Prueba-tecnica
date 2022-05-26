const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedraU2 = document.getElementById("piedraU2");
const papelU2 = document.getElementById("papelU2");
const tijeraU2 = document.getElementById("tijeraU2");
const usuarioUnoImg = document.getElementById("usuarioUno-img");
const usuarioDosImg = document.getElementById("usuarioDos-img");

function ingresarParticipanteUno() {
    const inputUser = document.getElementById("primerParticipante");
    document.getElementById("partUno").innerHTML = inputUser;
};

function ingresarParticipanteDos() {
    const input = document.getElementById("segundoParticipante");
    document.getElementById("partDos").innerHTML = input;
};

/*leemos la entrada del resultado */

const resultadoJuego = document.getElementById("resultado");

//iniciamos el juego
piedra.addEventListener("click", () => {
    iniciarJuego('piedra');
});

papel.addEventListener("click", () => {
    iniciarJuego('papel');
});

tijera.addEventListener("click", () => {
    iniciarJuego('tijera');
});
piedraU2.addEventListener("click", () => {
    iniciarJuegoDos('piedra');
});

papelU2.addEventListener("click", () => {
    iniciarJuegoDos('papel');
});

tijeraU2.addEventListener("click", () => {
    iniciarJuegoDos('tijera');
});


function iniciarJuego(opcionUno) {
    usuarioUnoImg.src = "static/" + opcionUno + ".png";
    resultadoJuego.innerHTML = "Eligiendo";

};

function iniciarJuegoDos(opcionDos){
    usuarioDosImg.src = "static/" + opcionDos + ".png";
    resultadoJuego.innerHTML = "Eligiendo";
};

function resultado(opcionUno, opcionDos){
    const movUsuario = opcionUno;
    const movUsuarioDos = opcionDos;

    const comp = compracion(movUsuario, movUsuarioDos);

    if (comp == 1) {
        resultadoJuego.innerHTML = "Usuario" + ingresarParticipanteUno + "Ganaste!";
    }
    else if (comp == 2) {
        resultadoJuego.innerHTML = "Usuario" + ingresarParticipanteDos + "Ganaste!";
    }
    else if (comp == 3) {
        resultadoJuego.innerHTML = "Empate!";
    }
};



function compracion(movUsuario, movUsuarioDos) {
    switch (movUsuario + movUsuarioDos) {
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //Gano usuario 1 
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //Gana usuario 2
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //Empate
    }
}


let refrescar = document.getElementById('retry-btn');
refrescar.addEventListener('click', () => {
    location.reload();
});