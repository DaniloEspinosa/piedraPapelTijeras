// Variables para acumular los resultados
let victoriasJugador = 0
let empates = 0
let victoriasPc = 0

let textoUsuario = document.getElementById("login")
textoUsuario.onclick = function () {
    let nombreJugador = prompt("¿Cual es tu nombre?")
    textoUsuario.innerText = `Buena suerte ${nombreJugador}!!!`
    textoUsuario.style.fontSize = "32px"
    textoUsuario.style.padding = "5px"
    textoUsuario.style.background = "blue"
    textoUsuario.style.color = "white"
    textoUsuario.style.border = "1px solid pink"
}

function jugar() {
    //De esta manera se descubre cual es el input seleccionado
    let opciones = document.getElementsByName("juego")
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            let eleccionJugador = opciones[i].value
            // let eleccionJugador = i + 1   ==> en este caso esta linea funciona igual que la de arriba
            let eleccionPc = Math.floor(Math.random() * (3 + 1 - 1) + 1)

            if (eleccionPc == 1) {
                alert("Yo he elegido ✊")
            } else if (eleccionPc == 2) {
                alert("Yo he elegido 🖐")
            } else {
                alert("Yo he elegido ✌")
            }

            let victoriasMP3 = document.getElementById("victoria")
            let victoriasPC = document.getElementById("derrota")

            if (eleccionJugador == eleccionPc) {
                alert("¡Hemos empatado!")
                empates++
            } else if ((eleccionJugador == 1 && eleccionPc == 3) || (eleccionJugador == 2 && eleccionPc == 1) || (eleccionJugador == 3 && eleccionPc == 2)) {
                alert("has ganado")
                victoriasJugador++
                victoriasMP3.play()
            } else {
                alert("He ganado yo 🤖")
                victoriasPc++
                victoriasPC.play()
            }
            // let mensajeVictoria = "<p>" + victoriasJugador + "victorias </p>"
            // let mensajeEmpates = `<p> ${empates} victorias </p>`
            // let mensajeVictoriaPc = `<p> ${victoriasPc} victorias </p>`
            let mensajeVictoria =  victoriasJugador
            let mensajeEmpates = empates
            let mensajeVictoriaPc = victoriasPc 

            let tablaMarcador = `
            <table>
                <thead>
                    <tr>
                        <th>
                        Victorias
                        </th>
                        <th>
                        Empates
                        </th>
                        <th>
                        Derrotas
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>
                        ${mensajeVictoria}
                        </td>
                        <td>
                        ${mensajeEmpates}
                        </td>
                        <td>
                        ${mensajeVictoriaPc}
                        </td>
                    </tr>
                </tbody>
            </table>
            `
            document.getElementById("respuesta").innerHTML = tablaMarcador

            if (victoriasJugador > victoriasPc) {
                document.querySelector("#imagen").innerHTML = `<img src="Piedra-Papel-Tijeras__HTML-main/img/copa_500px.jpg">`
            } else if (victoriasJugador == victoriasPc) {
                document.querySelector("#imagen").innerHTML = `<img src="Piedra-Papel-Tijeras__HTML-main/img/estrecharme-mano_500px.jpg">`
            } else {
                document.querySelector("#imagen").innerHTML = `<img src="Piedra-Papel-Tijeras__HTML-main/img/malament_500px.jpg">`
            }
        }

    }
}