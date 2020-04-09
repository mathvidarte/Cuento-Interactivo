let fondoCuento;
let fondoDosCuento;
let fondoTresCuento;

let titulo;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;

let escena =[];
let cargar =[];



class Cuento {
    constructor(){

    escena = loadStrings("./data/escena.txt");
    titulo = loadImage ("images/titulo.png");

   for (let i = 0; i < escena.lenght; i++) {
        cargar = escena.get(i).split(" ");
    }

    console.log(cargar)

     /*if(cargar.includes("Alicia")){ 
        }*/

    //fondos
    fondoTresCuento = new FondoTres(-400,141);
    fondoDosCuento = new FondoDos(-308,43);
    fondoCuento = new Fondo(-500,351);

    //elementos
    
    aliciaa = new Alicia (500, 300)
    galletaa = new Galleta (-320, 365);
    llavee = new Llave (-250, 410);
    pocioon = new Pocion (-400, 290);
    puertaa = new Puerta (-90, 327);

 }

    drawCuento() {
        //fondos
        fondoTresCuento.drawFondo();
        fondoDosCuento.drawFondo();
        fondoCuento.drawFondo();

        //titulo
        imageMode(CENTER);
        image(titulo,450,50);
        imageMode(CORNER);
        fill(255);
        text(escena,30,100);

        //elementos
        puertaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        aliciaa.drawElemento();

       

        
    }
    moverCuento() {
        fondoCuento.mover();
        fondoDosCuento.mover();
        fondoTresCuento.mover();
        pocioon.move();

        pocioon.move();
        galletaa.move();
        llavee.move();
        puertaa.move();

    }



    
    }
       
   


