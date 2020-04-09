let fondoCuento;
let fondoDosCuento;
let fondoTresCuento;

let titulo;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;

let escena = [];
let escenaSplit = [];

class Cuento {
    constructor() {
        
        escena = loadStrings("./data/escena.txt");
        titulo = loadImage("images/titulo.png");

        //fondos
        fondoTresCuento = new FondoTres(-400, 141);
        fondoDosCuento = new FondoDos(-308, 43);
        fondoCuento = new Fondo(-500, 351);

        //elementos
        puertaa = new Puerta(400, 327);
        aliciaa = new Alicia(550, 300);
        galletaa = new Galleta(220, 365);
        llavee = new Llave(280, 410);
        pocioon = new Pocion(-400, 290);



    }

    drawCuento() {
        
        //fondos
        fondoTresCuento.drawFondo();
        fondoDosCuento.drawFondo();
        fondoCuento.drawFondo();

        //titulo
        imageMode(CENTER);
        image(titulo, 450, 50);
        imageMode(CORNER);
        fill(255);
        //text(escena, 30, 100);


        //elementos
        puertaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        
        


        for (let i = 0; i < escena.lenght; i++) {

            escenaSplit = escena[i].split(" ");
            

        }

        console.log(escenaSplit);
        console.log(escena);
        //console.log(aliciaa.drawElemento);



    }
    moverCuento() {
        /*fondoCuento.mover();
        fondoDosCuento.mover();
        fondoTresCuento.mover();

        pocioon.move();*/

    }




}




