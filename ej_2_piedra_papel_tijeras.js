alert(`Hola, ahora vamos a jugar al piedra papel o tijeras`)
let nombre = prompt("¿Cual es tu nombre?")
alert(`Bienvenido ${nombre}`)
mensaje = (`
OPCIONES DEL JUEGO
==================
Elige el número correspondiente a
la jugada que prefieres.

1- Piedra
2- Papel
3- Tijeras

`)
confirm(`Estas listo para jugar ${nombre}`)
let jugada_humano = prompt(mensaje)
//let jugada_maquina = Math.ceil(Math.random()*3)
//console.log(jugada_maquina)
let jugada_pc = getRandomInt(1, 4)

let resolucion_partida = ""

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min) + min)
}



if (jugada_humano == 1) {
    console.log(`Piedra <-- La jugada de ${nombre}`)
} else if (jugada_humano == 2) {
    console.log(`Papel <-- La jugada de ${nombre}`)   
} else {
    console.log(`Tijeras <-- La jugada de ${nombre}`)
}


if (jugada_pc == 1) {
    console.log(`Piedra <-- La jugada de PC`)
} else if (jugada_pc == 2) {
    console.log(`Papel <-- La jugada de PC`)   
} else {
    console.log(`Tijeras <-- La jugada de PC`)
}


if (jugada_humano == jugada_pc) {
    console.log(`Has empatado`)
} else if (jugada_humano == 1 && jugada_pc == 3 || jugada_humano == 2 && jugada_pc == 1 || jugada_humano == 3 && jugada_pc == 2){
    console.log(`¡Has ganado ${nombre}`)
} else {
    console.log(`Has perdido`)
}

