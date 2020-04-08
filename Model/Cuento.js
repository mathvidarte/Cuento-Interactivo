let escena = [];
let cargar = [];

let fondoCuento;
let fondoDosCuento;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;

let word;


class Cuento {
    constructor(){
        
        this.escena = loadStrings("./data/escena.txt");
    this.titulo = loadImage ("images/titulo.png");

        for (let i = 0; i< this.escena.length; i++) {
            
            this.cargar = this.escena[i].split(" ");

            console.log(cargar);

            if(this.escena[0].includes("puertecita")){
                

    
    
                
            }
    
          
    
        }
        //var x= "1.2.3";
        //x = x.split(".");
        
       //console.log(this.escena);

    //fondos
    fondoCuento = new Fondo(-221,140);
    fondoDosCuento = new FondoDos (0,140);

    //elementos
    aliciaa = new Alicia (word, 550, 300);
    galletaa = new Galleta (220, 365);
    llavee = new Llave (280, 410);
    pocioon = new Pocion (120, 290);
    puertaa = new Puerta (400, 325);
   

 }

    drawCuento() {
        fondoCuento.drawFondo();
        imageMode(CENTER);
        image(this.titulo,450,50);
        imageMode(CORNER);
        fill(255);
        text(this.escena,30,100);

        puertaa.drawElemento();
        fondoDosCuento.drawFondo();
        aliciaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        
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
       
   


