let escena = [];
let cargar = [];

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



class Cuento {
    constructor(){
        
        abrir = false;

        this.puertaAbierta = loadImage('images/puertaAbierta.png');
        let escena =[];
        let cargar = [];
            this.escena = loadStrings("./data/escena.txt");

            this.titulo = loadImage ("images/titulo.png");
             //botones
           this.botonDer = loadImage ("images/der.png");
           this.botonIzq = loadImage ("images/izq.png");
            
        
           for (let i = 0; i< this.escena.lenght; i++) {
                this.cargar[i] = this.escena[i].split(" ");
                if(this.cargar[i].includes("Alicia")){
                    this.aliciaa.drawElemento();
                    console.log("entre");
    }
}

    
    //var x= "1.2.3";
    //x = x.split(".");
    
  
        


    //fondos
    fondoTresCuento = new FondoTres(-400,141);
    fondoDosCuento = new FondoDos(-308,43);
    fondoCuento = new Fondo(-500,351);

    //elementos
    
    aliciaa = new Alicia (550, 300, 297, 390);
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
     image(this.titulo,450,50);
     imageMode(CORNER);
     fill(255);
     text(this.escena,30,100);

     

     //elementos
     if (pintarPuerta === true) {
         puertaa.drawElemento();
     }
     
     galletaa.drawElemento();
     llavee.drawElemento();
     pocioon.drawElemento();
     aliciaa.drawElemento();

    

     //botones
     imageMode(CENTER);
     image(this.botonDer,875,350,50,50);
     imageMode(CORNER);
     imageMode(CENTER);

     image(this.botonIzq,25,350,50,50);
     imageMode(CORNER);

     if (abrir === true) {
        image(this.puertaAbierta, puertaa.getPosX(), puertaa.getPosY(), 158, 140);
    }
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

    changes() {
        crecer = aliciaa.getTam();
        crecerMas = aliciaa.getTamdos();
        
        if (mouseX > pocioon.getPosX() && mouseX < pocioon.getPosX() + 80 
        && mouseY > pocioon.getPosY() && mouseY <pocioon.getPosY() + 150) {

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
        && mouseY > llavee.getPosY() && mouseY < llavee.getPosY() +50) {
            pintarPuerta = true;
        }

        if (mouseX > puertaa.getPosX() && mouseX < puertaa.getPosX() + 300
        && mouseY > puertaa.getPosY() && mouseY < puertaa.getPosY() + 300) {
            abrir = true;
        }
        console.log(abrir);
    }

    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }


    
    }
       
   


