let escena = [];
let cargar = [];
let fondoCuento;
class Cuento {
    constructor(){
    escena = loadStrings("../data/escena.txt");
    fondoCuento = new Fondo(0,0);

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split(",");
        
        alicia = cargar[2];
        pocion = cargar[1];
    }

 }

    drawCuento() {
        fondoCuento.drawFondo();
    }

    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }
   
    
   
}