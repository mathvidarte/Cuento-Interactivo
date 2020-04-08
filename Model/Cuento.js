let escena = [];
let cargar = [];

let fondoCuento;
let fondoDosCuento;

let aliciaa;
let galletaa;

class Cuento {
    constructor(){
    this.escena = loadStrings("../data/escena.txt");
    this.titulo = loadImage ("images/titulo.png");

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split("_");

        alicia = cargar[2];
        pocion = cargar[1];
    }

    //fondos
    fondoCuento = new Fondo(-221,140);
    fondoDosCuento = new FondoDos (0,140);

    //elementos
    aliciaa = new Alicia (550, 300);
    galletaa = new Galleta (220, 365);

   

 }

    drawCuento() {
        fondoCuento.drawFondo();
        imageMode(CENTER);
        image(this.titulo,450,50);
        imageMode(CORNER);
        fill(255);
        text(this.escena,30,100);
        fondoDosCuento.drawFondo();
        aliciaa.drawElemento();
        galletaa.drawElemento();
        
    }
    moverCuento() {
        fondoCuento.mover();
        fondoDosCuento.mover();

    }

    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }


    
    }
       
   


