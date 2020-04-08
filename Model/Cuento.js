let escena = [];
let cargar = [];
let fondoCuento;
class Cuento {
    constructor(){
    this.escena = loadStrings("../data/escena.txt");
    this.titulo = loadImage ("images/titulo.png");
    fondoCuento = new Fondo(0,0);

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
    }

    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }


    
    }
       
