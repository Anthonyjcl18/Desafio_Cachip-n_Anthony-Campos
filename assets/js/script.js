let numero = parseFloat(prompt("¿Cuantas veces quieres jugar contra la máquina?"));
alert(`Jugaras Cachipún contra la Máquina ${numero} veces`);
console.log(numero);

const listaJugadas = ["Piedra", "Papel", "Tijera"];

let contadorUsuario = 0;
let contadorMaquina = 0;

for (let i = 0; i < numero; i++) {

    var jugadasUsuario = parseFloat(prompt("¿Que opción quieres elegir? 0. Piedra; 1. Papel; 2. Tijera"));

    while (jugadasUsuario > 2 || jugadasUsuario < 0) {
        alert("Debes elegir una opción correcta");
        jugadasUsuario = parseFloat(prompt("¿Que opción quieres elegir? 0. Piedra; 1. Papel; 2. Tijera"));
    }

    let jugadasMaquina = Math.floor(Math.random() * 3);
    console.log(jugadasMaquina);

    if (jugadasUsuario == jugadasMaquina) {
        var empate = alert("Seleccionaron la misma jugada por lo que es un Empate");
    }

    else if (jugadasUsuario == 0) {
        if (jugadasMaquina == 2) {
            var ganas = alert(`Bien Hecho :D Elegiste ${listaJugadas[0]} mientras que la Máquina eligio ${listaJugadas[2]}`);
            console.log(listaJugadas);
            contadorUsuario++;
        }

        if (jugadasMaquina == 1) {
            var pierdes = alert(`Nooooo :( Elegiste ${listaJugadas[0]} mientras que la Máquina eligio ${listaJugadas[1]}`);
            console.log(listaJugadas);
            contadorMaquina++;
        }
    }

    else if (jugadasUsuario == 1) {
        if (jugadasMaquina == 0) {
            var ganas = alert(`Bien Hecho :D Elegiste ${listaJugadas[1]} mientras que la Máquina eligio ${listaJugadas[0]}`);
            console.log(listaJugadas);
            contadorUsuario++;
        }

        if (jugadasMaquina == 2) {
            var pierdes = alert(`Nooooo :( Elegiste ${listaJugadas[1]} mientras que la Máquina eligio ${listaJugadas[2]}`);
            console.log(listaJugadas);
            contadorMaquina++;
        }
    }

    else if (jugadasUsuario == 2) {
        if (jugadasMaquina == 1) {
            var ganas = alert(`Bien Hecho :D Elegiste ${listaJugadas[2]} mientras que la Máquina eligio ${listaJugadas[1]}`);
            console.log(listaJugadas);
            contadorUsuario++;
        }

        if (jugadasMaquina == 0) {
            var pierdes = alert(`Nooooo :( Elegiste ${listaJugadas[2]} mientras que la Máquina eligio ${listaJugadas[0]}`);
            console.log(listaJugadas);
            contadorMaquina++;
        }
    }
}

if (contadorUsuario > contadorMaquina) {
    alert("Felicitaciones!!! Has ganado la partida");
    console.log(contadorMaquina);
    console.log(contadorUsuario);
}

if (contadorUsuario === contadorMaquina) {
    alert("Han empatado la partida. Casi ganas!!!");
    console.log(contadorMaquina);
    console.log(contadorUsuario);
}

if (contadorUsuario < contadorMaquina) {
    alert("Tristemente has perdido la partida :(");
    console.log(contadorMaquina);
    console.log(contadorUsuario);
}




