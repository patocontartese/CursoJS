/* Primera pre entrega
//Preguntados
let nombreUsuario = prompt("Indicanos tu nombre de usuario!");
//Nombre vacío 
while((nombreUsuario == '') || (nombreUsuario == ' ') ){
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}


alert("Bienvenido/a "+ nombreUsuario +" vamos a jugar al preguntados!")

let mensaje = prompt("Elegí una categoría: (d-DEPORTES) (e-ENTRETENIMIENTO)");
/* Primera pre entrega
//creo una variable global para calcular el total del puntaje
let puntaje = 0;
//Ciclo deportes 
while(mensaje.toLowerCase() == "d"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿En que equipo juega Paulo Dybala...?");
    let respuesta = prompt("1-ROMA\n2-BARCELONA\n3-LIVERPOOL\n4-PSG");
    //condicional para evaluar la pregunta
   switch(respuesta){
    case "1":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje = alert("Proba una vez más!")
   let mensaje2 = prompt("Elegí una categoría: (d-DEPORTES) (e-ENTRETENIMIENTO)");


//Ciclo deportes 
while(mensaje2.toLowerCase() == "d"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿En que equipo juega Julian Alvárez...?");
    let respuesta2 = prompt("1-MAN.CITY\n2-MAN.UNITED\n3-INTER\n4-PSG");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
}   
//Ciclo entretenimiento
while(mensaje2.toLowerCase() == "e"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿Que pélicula Argentina fue nominada a los Oscars en 2023...?");
    let respuesta2 = prompt("1-CASADOS CON HIJOS\n2-9 REYNAS\n3-ARGENTINA 1985\n4-METEGOL");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
}   
}   
//Ciclo entretenimiento
while(mensaje.toLowerCase() == "e"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿Que actor ganó el Oscar a mejor actor en 2023...?");
    let respuesta = prompt("1-RYAN REYNOLDS\n2-BRAD PITT\n3-BRENDAN FRASER\n4-RICARDO DARIN");
    //condicional para evaluar la pregunta
   switch(respuesta){
    case "1":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje = alert("Proba una vez más!")
   let mensaje2 = prompt("Elegí una categoría: (d-DEPORTES) (e-ENTRETENIMIENTO)");


//Ciclo deportes 
while(mensaje2.toLowerCase() == "d"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿En que equipo juega Julian Alvárez...?");
    let respuesta2 = prompt("1-MAN.CITY\n2-MAN.UNITED\n3-INTER\n4-PSG");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
}   
//Ciclo entretenimiento
while(mensaje2.toLowerCase() == "e"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿Que pélicula Argentina fue nominada a los Oscars en 2023...?");
    let respuesta2 = prompt("1-CASADOS CON HIJOS\n2-9 REYNAS\n3-ARGENTINA 1985\n4-METEGOL");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
 }   
}


let mensaje2 = prompt("Elegí una categoría: (d-DEPORTES) (e-ENTRETENIMIENTO)");


//Ciclo deportes 
while(mensaje2.toLowerCase() == "d"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿En que equipo juega Julian Alvárez...?");
    let respuesta2 = prompt("1-MAN.CITY\n2-MAN.UNITED\n3-INTER\n4-PSG");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
}   
//Ciclo entretenimiento
while(mensaje2.toLowerCase() == "e"){
    alert("Muy bien, vamos con la pregunta...")
    alert("¿Que pélicula Argentina fue nominada a los Oscars en 2023...?");
    let respuesta2 = prompt("1-CASADOS CON HIJOS\n2-9 REYNAS\n3-ARGENTINA 1985\n4-METEGOL");
    //condicional para evaluar la pregunta
   switch(respuesta2){
    case "1":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "2":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;
    case "3":
        alert("Respuesta correcta, sumaste 3 puntos!");
        incrementarPuntaje(3);
        break;
    case "4":
        alert("Respuesta incorrecta, no sumaste puntos.");
        incrementarPuntaje(0)
        break;         
   }

   mensaje2 = alert("Gracias por jugar!")
}   
//uso una funcion para calcular el total del puntaje
function incrementarPuntaje(puntos){
    puntaje = puntaje + puntos;
    alert("Tu puntaje es de: "+puntaje+" puntos!");
}
*/
//segunda pre entrega;
// Array
const preguntas = [{
        id: 1,
        categoria: "deportes",
        pregunta: "¿Quien ganó el mundial 2022 de fútbol?",
        dificultad: 1
    },
   {
        id: 2,
        categoria: "entretenimiento",
        pregunta: "¿En que país transcurre la serie de La Casa De Papel?",
        dificultad: 1
    },
   {
       id: 3,
       categoria: "deportes",
       pregunta: "¿En que equipo de fútbol juega Paulo Dybala?",
       dificultad: 2
    },
   {
       id: 4,
       categoria: "entretenimiento",
       pregunta: "¿Qué película Argentina estuvo nominada a los Oscars 2023?",
       dificultad: 2
    },    
   {
       id: 5,
       categoria: "deportes",
       pregunta: "¿Qué equipo de fútbol ganó la Champions League 2023?",
       dificultad: 3
    },
   {
       id: 6,
       categoria: "entretenimiento",
       pregunta: "¿Quien es el director de la película Titanic?",
       dificultad: 3
    }
];
//funcion para poder filtrar por dificultad
function filtrarPorDificultad(dificultad){;
    const filtrados = preguntas.filter((preg)=>preg.dificultad == dificultad);
    return filtrados;
   }

//dato de entrada
let dificultadElegida = parseFloat(prompt('Ingresa la dificultad del juego del 1-2-3 o ingrese 0-para salir'));

while(dificultadElegida != 0){
    if(dificultadElegida == 1 || dificultadElegida == 2 || dificultadElegida == 3){
        //ya tenemos un numero valido
        const pregsFiltradas = filtrarPorDificultad(dificultadElegida);
        console.table(pregsFiltradas);
        
    }else{
        alert('Ingrese un número valido por favor');
    }
    dificultadElegida = parseFloat(prompt('Ingresa la dificultad del juego del 1-2-3 o ingrese 0-para salir'));
   }
   






