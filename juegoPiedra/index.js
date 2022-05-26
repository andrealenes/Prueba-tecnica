const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedraU2 = document.getElementById("piedraU2");
const papelU2 = document.getElementById("papelU2");
const tijeraU2 = document.getElementById("tijeraU2");
const usuarioUnoImg = document.getElementById("usuarioUno-img");
const usuarioDosImg = document.getElementById("usuarioDos-img");




// function ingresarParticipanteDos() {
//     const input = document.getElementById("segundoParticipante");
//     document.getElementById("partDos").innerHTML = input;
// };

/*leemos la entrada del resultado */
const resultadoJuego = document.getElementById("resultado");
let opcion1;
let opcion2;

//iniciamos el juego
piedra.addEventListener("click", () => {
    opcion1 = 'piedra';
    usuarioUnoImg.src = "static/" + opcion1 + ".png";
    resultadoJuego.innerHTML = "Eligiendo";


    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});

papel.addEventListener("click", () => {
    opcion1 = 'papel';
    usuarioUnoImg.src = "static/" + opcion1 + ".png";

    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});

tijera.addEventListener("click", () => {
    opcion1 = 'tijera';
    usuarioUnoImg.src = "static/" + opcion1 + ".png";

    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});
piedraU2.addEventListener("click", () => {
    opcion2 = 'piedra';
    usuarioDosImg.src = "static/" + opcion2 + ".png";

    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});

papelU2.addEventListener("click", () => {
    opcion2 = 'papel';
    usuarioDosImg.src = "static/" + opcion2 + ".png";

    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});

tijeraU2.addEventListener("click", () => {
    opcion2 = 'tijera';
    usuarioDosImg.src = "static/" + opcion2 + ".png";

    if (opcion1 !== undefined && opcion2 !== undefined) {
        iniciarJuego(opcion1, opcion2);
    }
});

function iniciarJuego(opcionUno, opcionDos) {
    resultado(opcionUno, opcionDos);
};


function resultado(opcionUno, opcionDos) {
    const comp = compracion(opcionUno, opcionDos);

    if (comp === 1) {
        resultadoJuego.innerHTML = "Usuario1 Gano";
    }
    else if (comp === 2) {
        resultadoJuego.innerHTML = "Usuario2 Gano";
    }
    else if (comp === 3) {
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