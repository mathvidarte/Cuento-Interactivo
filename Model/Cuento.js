let titulo;

let fondoCuento;
let fondoDosCuento;
let fondoTresCuento;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;

class Cuento {
    constructor() {

        let escena = [];
        let cargar = [];
        this.escena = loadStrings("./data/escena.txt");
        this.titulo = loadImage("images/titulo.png");

        //botones
        this.botonDer = loadImage("images/der.png");
        this.botonIzq = loadImage("images/izq.png");
        this.aliciaa = new Alicia(550, 300);

        for (let i = 0; i < this.escena.lenght; i++) {
            cargar[i] = this.escena[i].split(" ");
            
        }

        console.log(cargar);

        //fondos
        fondoTresCuento = new FondoTres(-400, 141);
        fondoDosCuento = new FondoDos(-308, 43);
        fondoCuento = new Fondo(-500, 351);

        //elementos
        aliciaa = new Alicia(500, 300)
        galletaa = new Galleta(-320, 365);
        llavee = new Llave(-250, 410);
        pocioon = new Pocion(-400, 290);
        puertaa = new Puerta(-90, 327);

    }

    drawCuento() {
        //fondos
        fondoTresCuento.drawFondo();
        fondoDosCuento.drawFondo();
        fondoCuento.drawFondo();

        //titulo
        imageMode(CENTER);
        image(this.titulo, 450, 50);
        imageMode(CORNER);
        fill(255);
        text(this.escena, 30, 100);

        //elementos
        puertaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        aliciaa.drawElemento();

        //botones
        imageMode(CENTER);
        image(this.botonDer, 875, 350, 50, 50);
        imageMode(CORNER);
        imageMode(CENTER);
        image(this.botonIzq, 25, 350, 50, 50);
        imageMode(CORNER);
    }

    moverCuento() {
        fondoCuento.mover();
        fondoDosCuento.mover();
        fondoTresCuento.mover();

        pocioon.move();
        galletaa.move();
        llavee.move();
        puertaa.move();

    }





}




