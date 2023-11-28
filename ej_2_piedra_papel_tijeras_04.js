let nombre =""

let contador = 0
let contador_ganadas = 0
let contador_perdidas = 0
let contador_empatadas = 0
let eleccion_erronea = 0
let nombre_correcto = true
do {
    
    nombre = prompt("Hola, estamos por jugar al PIEDRA, PAPEL o TIJERAS\n\n¿Cual es tu nombre?\nDebes escribir al menos 3 caracteres")

    if (nombre != null && nombre.trim().length > 0){
    nombre_correcto = false;
    break
    }

} while (nombre_correcto) {

    mensaje = (`
    Bienvenido ${nombre}!!
    ==================
    OPCIONES DEL JUEGO
    Elige el número correspondiente a
    la jugada que prefieres.

    1- Piedra
    2- Papel
    3- Tijeras

    `)
    // confirm(`Estas listo para jugar ${nombre}`)  Esta para mostrar un mensaje de aceptacion del juego
    let continuar = true
    
    while (continuar) {
        let jugada_humano = prompt(mensaje)


        //let jugada_pc = Math.ceil(Math.random()*3)
        //console.log(jugada_pc)
        let jugada_pc = getRandomInt(1, 4)

        let resolucion_partida = ""
        let final = `${nombre} Partida finalizada\nAdios!!!`
        

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

            resolucion_partida += `**************\n`

            //Partida
            if (jugada_humano == jugada_pc) {
                resolucion_partida += `Has empatado ${nombre}\n`
                contador_empatadas ++
            } else if (jugada_humano == 1 && jugada_pc == 3 || jugada_humano == 2 && jugada_pc == 1 || jugada_humano == 3 && jugada_pc == 2){
                resolucion_partida += `¡Has ganado ${nombre}\n`
                contador_ganadas ++
            } else {
                resolucion_partida += `Has perdido\n`
                contador_perdidas ++
            }
            contador ++
            
            alert(`${resolucion_partida}================\nEl contador es: ${contador}\nGanando: ${contador_ganadas}\nPerdiendo: ${contador_perdidas}\nEmpatando: ${contador_empatadas}`)

        } else {
            alert("La ocion elegida no es correcta")
            eleccion_erronea ++
        }
        
        continuar = confirm("¿Deseas continuar volver a jugar?")
    }

}

alert(`${nombre} has finalizado el juego.
==================
El contador es: ${contador}
Partidas ganadas: ${contador_ganadas}
Partidas perdidas: ${contador_perdidas}
Partidas empatadas: ${contador_empatadas}
Eleccion erronea (no se suma al contador): ${eleccion_erronea}

*****************
Hasta pronto`)




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min) + min)
}


