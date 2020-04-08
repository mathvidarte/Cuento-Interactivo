let escena = [];
let cargar = [];

let fondoCuento;

class Cuento {
    constructor(){

    fondoCuento = new Fondo (0, 0);

    escena = loadStrings("../data/escena.txt");

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split(",");
        
        alicia = cargar[2];
        pocion = cargar[1];
    }


 }
 /*sortList(c) {
    switch (c) { 
    case 'p':
        console.log("putos");
    break;
    }
}*/

drawCuento() {
    this.fondoCuento.drawFondo();
    console.log("arepa");
   
}
}