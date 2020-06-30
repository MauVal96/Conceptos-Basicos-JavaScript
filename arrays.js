var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas.length);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

var masFrutas = frutas.push("Uvas");
console.log(frutas);

var ultimo = frutas.pop();
console.log(frutas);

var nuevaLongitud = frutas.unshift("Melon");
console.log(frutas);

var borrarFruta = frutas.shift();
console.log(frutas);

var posicion = frutas.indexOf("Cereza");
console.log(posicion);