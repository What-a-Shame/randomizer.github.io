'use strict'

const cantidad = 10;

// Modal Inicial
const modal = document.querySelector(".inicio");
const user_name = document.querySelector("#jugador");
const add_jugadores = document.querySelector("#añadir");

window.onload = function() {
    if (sessionStorage.length < cantidad) {
        $(modal).modal("toggle");
    }
};

const añadirJugador = (nombre) => {
    let nuevaFila = document.createElement("tr");

    let nuevoJugador = document.createElement("td");
    nuevoJugador.innerText = nombre;

    nuevaFila.appendChild(nuevoJugador);

    return nuevaFila;
}

// Añadir Jugadores al Storage de la Sesion
let i = 0;
const participantes = document.querySelector("#participantes tbody  ");

add_jugadores.addEventListener("click",
    (evento) => {
        evento.preventDefault();
        if (user_name.value.trim() !== "") {
            sessionStorage.setItem(i, user_name.value.trim());
            i++;

            user_name.value = "";
        }

        if (sessionStorage.length >= cantidad) {
            $(modal).modal("toggle");
            Object.values(sessionStorage).forEach(
                (item) => {
                    participantes.appendChild(añadirJugador(item));
                }
            );
        }
    }
);

// Boton Empezar
const empezar = document.querySelector("#empezar");
const equipo1 = document.querySelector("#equipo1 tbody");
const equipo2 = document.querySelector("#equipo2 tbody");

empezar.addEventListener("click",
    (evento) => {
        evento.preventDefault();
        equipo1.innerHTML = "";
        equipo2.innerHTML = "";
        let jugadores = [];
        let elegidos = [];
        let random;

        Object.values(sessionStorage).forEach(
            (item) => {
                jugadores.push(item);
            }
        );

        for (let x = 0; x < jugadores.length; x++) {
            do {
                random = Math.floor(Math.random()*sessionStorage.length);
            } while (elegidos.includes(random));
            elegidos.push(random);

            if (x < jugadores.length/2) {
                equipo1.appendChild(añadirJugador(jugadores[random]));
            } else {
                equipo2.appendChild(añadirJugador(jugadores[random]));
            }
        }
    }
);

// Boton Resetear
const resetear = document.querySelector("#resetear");

resetear.addEventListener("click",
    () => {
        sessionStorage.clear();
    }
);

// Añadir Session Storage a la tabla Participantes
Object.values(sessionStorage).forEach(
    (item) => {
        participantes.appendChild(añadirJugador(item));
    }
);