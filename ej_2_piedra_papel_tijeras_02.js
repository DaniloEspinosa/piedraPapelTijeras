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
// confirm(`Estas listo para jugar ${nombre}`)  Esta para mostrar un mensaje de aceptacion del juego

let jugada_humano = prompt(mensaje)



//let jugada_pc = Math.ceil(Math.random()*3)
//console.log(jugada_pc)
let jugada_pc = getRandomInt(1, 4)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min) + min)
}

let resolucion_partida = ""

if (jugada_humano == 1 || jugada_humano == 2 || jugada_humano == 3) {
    
    if (jugada_humano == 1) {
        resolucion_partida += `Piedra <-- La jugada de ${nombre}\n`
    } else if (jugada_humano == 2) {
        resolucion_partida += `Papel <-- La jugada de ${nombre}\n` 
    } else {
        resolucion_partida += `Tijeras <-- La jugada de ${nombre}\n`
    }
    
    
    if (jugada_pc == 1) {
        resolucion_partida += `Piedra <-- La jugada de PC\n`
    } else if (jugada_pc == 2) {
        resolucion_partida += `Papel <-- La jugada de PC\n`
    } else {
        resolucion_partida += `Tijeras <-- La jugada de PC\n`
    }
    
    
    if (jugada_humano == jugada_pc) {
        resolucion_partida += `Has empatado ${nombre}\n`
    } else if (jugada_humano == 1 && jugada_pc == 3 || jugada_humano == 2 && jugada_pc == 1 || jugada_humano == 3 && jugada_pc == 2){
        resolucion_partida += `¡Has ganado ${nombre}\n`
    } else {
        resolucion_partida += `Has ganado el PC\n`
    }
    
    alert(resolucion_partida)

} else {
    alert(`${nombre} Eres un gilipollas\nAdios!!!`)
}