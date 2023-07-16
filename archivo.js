let preguntas;
obtenerJsonPregs();
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
//+ Eventos del boton next
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
//JSON
async function obtenerJsonPregs(){
    const URLJSON = "/preguntas.json";
    const respuesta = await fetch(URLJSON);
    const data = await respuesta.json();
    console.log(data);
    preguntas = data;
    mostrarPregunta(preguntas);
}

EmpezarJuego();
 
