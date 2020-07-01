var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto);
console.log(miAuto.marca);
console.log(miAuto.annio);
console.log(miAuto.detalleDelAuto());

//  Constructor
function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla","Model 3",2020);
console.log(autoNuevo);

var autoNuevo2 = new auto("Tesla","Model X",2018);
console.log(autoNuevo2);

var autoNuevo3 = new auto("Nissan","Skyline",2015);
console.log(autoNuevo3);


