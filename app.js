/*
===========================================================================
                            Algoritmo básico
___________________________________________________________________________

- Crear una grilla con x filas e y columnas con items aleatorios.
    - Chequear si hay bloques (*).
    - Si hay bloques, volver a generar grilla.

- Intercambiar 2 posiciones.

- Chequear si hay bloques (*).
    + Si hay bloques:
        > buscar bloque horizontal y/o vertical (de 3 o más items repetidos).
            - Eliminar items dentro del bloque.
            - Mientras haya items con posiciones vacías por debajo:
                - Obtener la cantidad de posiciones vacías.
                - Mover ese item la cantidad de posiciones vacías.
            - Reyenar las posiciones vacías con items aleatorios.

    + Si NO hay bloques:
        - Volver a intercambiar posiciones.

===========================================================================
*/


/*      
Valores de configuración
___________________________________________________________________________
*/

// Config
let duracionAnimacion = 400
let duracionPartida = 30
let items = ['🍨','🍫','🍬','🍭','🍩','🍰']
let tamanioCuadrado = 50

// Juego
let grilla = []
let tamanioGrilla = 8
let segundosRestantes = 0
let puntos = 0
let modificadorCombo = 1
let puedeMover = true
let timer = null
let iniciado = false


/*      
Utilidades
___________________________________________________________________________
*/
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const segundosAMinutos = (segundos) =>
    Math.floor(segundos / 60) + ":" + ('0' + Math.floor(segundos % 60)).slice(-2)


/*      
DOM
___________________________________________________________________________
*/

const actualizarPuntos = () => {
    $('#score').innerHTML = score
  }
  
const incrementarCombo = () => {
    modificadorCombo++
    $('#combo').innerHTML = modificadorCombo
}
  
const reiniciarCombo = () => {
    modificadorCombo = 1
    $('#combo').innerHTML = modificadorCombo
}
  
const actualizarTiempoRestante = () => {
    const tiempoRestante = $('.time-left')
    tiempoRestante.innerHTML = segundosAMinutos(segundosRestantes)
}

/*      
GRILLA
___________________________________________________________________________
*/
const generarGrilla = () => {
    grilla = []

    for (let i = 0; i < tamanioGrilla; i++) {
        grilla [i]= []
        for (let j = 0; j < tamanioGrilla; j++){
            grilla[i][j] = obtenerItemRamdon ()
        }
    }
}

const vaciarGrilla = () => ($('#grid').innerHTML = '')

const redimensionarGrilla = () =>
  ($('#grid').style.height = `${tamanioGrilla * tamanioCuadrado}px`)


const dibujarItems = () => {
    const $grid = $('grid')

    for (let i = 0; i < grilla.length; i++) {
        for (let j = 0; j < grilla[i].length; j++){
            if (grid[i][j]) {
                const cuadrado = generarCuadrado (j,i)

                $grid.appendChild(cuadrado)
            }
        }
    }
}

const dibujarGrilla = () => {
    actualizarTamanioCuadrado ()
    vaciarGrilla ()
    dibujarItems ()
    twemoji.parse(document.body)
}