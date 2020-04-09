let titulo;

let fondoCuento;
let fondoDosCuento;
let fondoTresCuento;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;
let puertaAbierta;
let abrir;

let crecer;
let crecerMas;
let pintarPuerta;


let esTarde;

let escena = [];
let cargar = [];

class Cuento {
    constructor() {

        abrir = false;
        esTarde = false;

        this.puertaAbierta = loadImage('images/puertaAbierta.png');

        this.escena = loadStrings("./data/escena.txt");

        this.titulo = loadImage("images/titulo.png");
        //botones
        this.botonDer = loadImage("images/der.png");
        this.botonIzq = loadImage("images/izq.png");


        //fondos
        fondoTresCuento = new FondoTres(-400, 141);
        fondoDosCuento = new FondoDos(-308, 43);
        fondoCuento = new Fondo(-500, 351);

        //elementos
        aliciaa = new Alicia(550, 300, 297, 390);
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

        if (esTarde == true) {
            fondoDosCuento.drawTarde();
        }

        if (abrir === true) {
            image(this.puertaAbierta, puertaa.getPosX(), puertaa.getPosY(), 158, 140);
        }

        if (pintarPuerta === true) {
            puertaa.drawElemento();
        }

        //console.log(cargar);

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

    changes() {
        crecer = aliciaa.getTam();
        crecerMas = aliciaa.getTamdos();

        if(mouseX > aliciaa.getPosX() && mouseX < aliciaa.getPosX() + aliciaa.getTam() 
        && mouseY > aliciaa.getPosY() && mouseY < aliciaa.getPosY() + aliciaa.getTamdos()){
            esTarde = true;
        }

        if (mouseX > pocioon.getPosX() && mouseX < pocioon.getPosX() + 80
            && mouseY > pocioon.getPosY() && mouseY < pocioon.getPosY() + 150) {

            if (crecer > 97) {
                aliciaa.setTam(crecer - 100);
                aliciaa.setTamdos(crecerMas - 100);
            }

        }

        if (mouseX > galletaa.getPosX() && mouseX < galletaa.getPosX() + 80
            && mouseY > galletaa.getPosY() && mouseY < galletaa.getPosY() + 100) {

            if (crecer < 597) {

                aliciaa.setTam(crecer + 100);
                aliciaa.setTamdos(crecerMas + 100);
            }
        }

        if (mouseX > llavee.getPosX() && mouseX < llavee.getPosX() + 80
            && mouseY > llavee.getPosY() && mouseY < llavee.getPosY() + 50) {
            pintarPuerta = true;
        }

        if (mouseX > puertaa.getPosX() && mouseX < puertaa.getPosX() + 300
            && mouseY > puertaa.getPosY() && mouseY < puertaa.getPosY() + 300) {
            abrir = true;
        }
        console.log(abrir);
        console.log(esTarde);
    }

   



}




