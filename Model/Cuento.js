

let fondoCuento;
let fondoDosCuento;
let fondoTresCuento;

let aliciaa;
let galletaa;
let llavee;
let pocioon;
let puertaa;



class Cuento {
    constructor(){
        let escena =[];
let cargar = [];
    this.escena = loadStrings("./data/escena.txt");
    this.titulo = loadImage ("images/titulo.png");
     //botones
   this.botonDer = loadImage ("images/der.png");
   this.botonIzq = loadImage ("images/izq.png");
    this.aliciaa = new Alicia (550, 300);

   for (let i = 0; i< this.escena.lenght; i++) {
        this.cargar[i] = this.escena[i].split(" ");
        if(this.cargar[i].includes("Alicia")){
            this.aliciaa.drawElemento();
            console.log("entre");
           
            

        }


    }
    //var x= "1.2.3";
    //x = x.split(".");
    
   console.log(this.escena);
  




    //fondos
    fondoTresCuento = new FondoTres(-400,141);
    fondoDosCuento = new FondoDos(-308,43);
    fondoCuento = new Fondo(-500,351);

    //elementos
    //aliciaa = new Alicia (550, 300);
    galletaa = new Galleta (220, 365);
    llavee = new Llave (280, 410);
    pocioon = new Pocion (120, 290);
    puertaa = new Puerta (400, 326);


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

        //botones
        imageMode(CENTER);
        image(this.botonDer,875,350,50,50);
        imageMode(CORNER);
        imageMode(CENTER);

        image(this.botonIzq,25,350,50,50);
        imageMode(CORNER);

        //elementos
        puertaa.drawElemento();
        galletaa.drawElemento();
        llavee.drawElemento();
        pocioon.drawElemento();
        //aliciaa.drawElemento();

       

        
    }
    moverCuento() {
        fondoCuento.mover();
        fondoDosCuento.mover();
        fondoTresCuento.mover();

    }

    sortList(c) {
        switch (c) { 
        case 'p':
            console.log("putos");
        break;
        }
    }


    
    }
       
   


