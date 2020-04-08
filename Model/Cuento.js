let escena = [];
let cargar = [];

let fondoCuento;
let fondoDosCuento;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;


class Cuento {
    constructor(){
    this.escena = loadStrings("../data/escena.txt");
    this.titulo = loadImage ("images/titulo.png");
    fondoCuento = new Fondo(0,0);
    fondoDosCuento = new FondoDos (0,140);


    aliciaa = new Alicia (550, 300);
    galletaa = new Galleta (190, 365);
    llavee = new Llave (280, 410);
    pocioon = new Pocion (120, 290);
    puertaa = new Puerta (400, 325);

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split("_");

        
        alicia = cargar[2];
        pocion = cargar[1];

    }

 }

    drawCuento() {
        fondoCuento.drawFondo();
        imageMode(CENTER);
        image(this.titulo,450,50);
        imageMode(CORNER);
        fill(255);
        text(this.escena,30,100);
        puertaa.drawElemento();
        puertaa.drawElemento();
        fondoDosCuento.drawFondo();
        aliciaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        
    }



    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }


    
    }
       
   


