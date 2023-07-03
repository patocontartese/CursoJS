const preguntas = [
    {
        pregunta: "¿En qué equipo de fútbol juega Paulo Dybala...?",
        respuestas:[
            { texto: "Barcelona", correcta: false},
            { texto: "Roma", correcta: true},
            { texto: "Liverpool", correcta: false},
            { texto: "PSG", correcta: false},
        ]
    },
    {
        pregunta: "¿Quién ganó el mundial 2022 de fútbol?",
        respuestas:[
            { texto: "Belgica", correcta: false},
            { texto: "España", correcta: false},
            { texto: "Francia", correcta: false},
            { texto: "Argentina", correcta: true},
        ]
    },
    {
        pregunta: "¿En qué país transcurre la temporada 1 de la serie La Casa De Papel?",
        respuestas:[
            { texto: "España", correcta: true},
            { texto: "Italia", correcta: false},
            { texto: "Brasil", correcta: false},
            { texto: "Francia", correcta: false},
        ]
    },
    {
       pregunta: "¿Qué película Argentina estuvo nominada a los Oscars 2023?",
        respuestas:[
            { texto: "Casados con hijos", correcta: false},
            { texto: "Argentina, 1985", correcta: true},
            { texto: "El secreto de sus ojos", correcta: false},
            { texto: "Madagascar", correcta: false},
        ]
    },
    {
        pregunta: "¿Qué equipo de fútbol ganó la Champions League 2023?",
        respuestas:[
            { texto: "Barcelona", correcta: false},
            { texto: "Manchester City", correcta: true},
            { texto: "Real Madrid", correcta: false},
            { texto: "Inter de Milan", correcta: false},
        ]
    },
    {
        pregunta: "¿En qué equipo de fútbol juega Julian Alvárez...?",
        respuestas:[
            { texto: "River Plate", correcta: false},
            { texto: "Chelsea", correcta: false},
            { texto: "Manchester City", correcta: true},
            { texto: "Barracas Central", correcta: false},
        ]
    }
];
const contenedorPreg = document.getElementById("question");
const contenedorResp = document.getElementById("answer-buttons");
const botonNext = document.getElementById("next-btn");

//Inicializar el juego

let pregActualIndex = 0;
let marcador = 0;

function EmpezarJuego(){
    pregActualIndex = 0;
    marcador = 0;
    botonNext.innerHTML = "Siguiente";
    mostrarPregunta();
}
// Funcion para mostrar pregunta y empezar el juego
function mostrarPregunta(){
    reset()
     let preguntaActual = preguntas[pregActualIndex];
     let preguntaNumero = pregActualIndex + 1;
     contenedorPreg.innerHTML = preguntaNumero + ". "+ preguntaActual.pregunta;

     preguntaActual.respuestas.forEach(respuesta => {
         const boton = document.createElement("button");
         boton.innerHTML= respuesta.texto;
         boton.classList.add("btn");
        contenedorResp.appendChild(boton);
        if(respuesta.correcta){
            boton.dataset.correct = respuesta.correcta;
        }
        boton.addEventListener("click", seleccionarResp);
     })
}
// Funcion para que el boton de next solo se muestre si se selecciona alguna rta.
function reset(){
    botonNext.style.display = "none";
    while(contenedorResp.firstChild){
        contenedorResp.removeChild(contenedorResp.firstChild);
    }
}
// En caso de que se seleccione la opcion correcta colorear de verde la misma
// y si se selecciona la opcion incorrecta colorear de rojo y mostrar
// cual era la correcta (verde).
function seleccionarResp(e){
    const btnSeleccionado = e.target;
    const rtaCorrecta = btnSeleccionado.dataset.correct === "true";
    if(rtaCorrecta){
        btnSeleccionado.classList.add("correcto");
        marcador++;
    }else{
        btnSeleccionado.classList.add("incorrecto");
    }
    Array.from(contenedorResp.children).forEach(boton => {
        if(boton.dataset.correct === "true"){
            boton.classList.add("correcto");
        }
        boton.disabled = true;
    });
    botonNext.style.display = "block"
}
//Mostrar el marcador
function mostrarMarcador(){
    reset();
    contenedorPreg.innerHTML = `Contestaste ${marcador} respuestas bien de ${preguntas.length} posibles!`
    botonNext.innerHTML = "Jugar otra vez";
    botonNext.style.display = "block"
}
// Eventos del boton next
function eventoBotonNext(){
    pregActualIndex++;
    if(pregActualIndex < preguntas.length){
        mostrarPregunta();
    }else{
        mostrarMarcador()
    }
}

botonNext.addEventListener("click" , () =>{
    if(pregActualIndex < preguntas.length){
        eventoBotonNext();
    }else{
        EmpezarJuego()
    }
})
EmpezarJuego();
 
