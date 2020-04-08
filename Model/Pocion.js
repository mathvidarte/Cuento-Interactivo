let imagenPocion;

class Pocion extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;

        imagenPocion = loadImage('images/Pocion.png');
        
    }

    drawElemento () {
        image(imagenPocion, this.posX, this.posY, 70, 150);
       
    }

    move () {
        
    }
}