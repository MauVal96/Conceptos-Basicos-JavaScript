// Funciones declarativas 

function miFuncion() {
    return 3;
}

miFuncion();

// Expresivas

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}