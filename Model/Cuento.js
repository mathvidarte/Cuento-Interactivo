let escena = [];
let cargar = [];

let fondoCuento;
let fondoDosCuento;

let aliciaa;
let galletaa;

class Cuento {
    constructor(){
    escena = loadStrings("../data/escena.txt");
    fondoCuento = new Fondo(0,0);
    fondoDosCuento = new FondoDos (0,140);

    aliciaa = new Alicia (550, 300);
    galletaa = new Galleta (220, 365);

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split(",");
        
        alicia = cargar[2];
        pocion = cargar[1];
    }

 }

    drawCuento() {
        fondoCuento.drawFondo();
        fondoDosCuento.drawFondo();
        aliciaa.drawElemento();
        galletaa.drawElemento();
    }



    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }
   
    
   

}