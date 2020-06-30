var edad = 17;

if (edad === 18) {
    console.log("Puedes Votar, por primera vez");
} else if (edad > 18) {
    console.log("Puedes votar nuevamente");
} else {
    console.log("Aun no puedes votar");
}

//  condicion ? verdadero : falso ;

var numero = 10;

numero === 1 ? console.log("Es uno") : console.log("No es uno");

// Juego del Piedra, Papel y Tijera

var valor = "papel";

juego(valor);

function juego (pose) {
    var compu = Math.round(Math.random()*2);
    var poses = ["papel","tijera","piedra"];
    verificacion(pose,poses[compu]);
}

function verificacion(poseH,poseC) {
    console.log("Elegiste " + poseH + " y el oponente " + poseC);
    if(poseH === poseC) {
        console.log("Empate");
    } else {
        if( poseH === "piedra" && poseC === "tijera"){
            console.log("ganaste");
        } else if (poseH === "tijera" && poseC === "papel") {
            console.log("ganaste");
        } else if (poseH === "papel" && poseC === "piedra") {
            console.log("ganaste");
        } else {
            console.log("Perdiste");
        }
    }
}