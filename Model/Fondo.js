let fondoImagen;

class Fondo extends Parallax {
    constructor (posX, posY) {
        super (posX, posY); 
        this.posX = posX;
        this.posY = posY;
        this.vel = 4;

        fondoImagen = loadImage ("images/Fondo.png");
    }

    drawFondo() {
        image(fondoImagen,0,140);
    }

    mover() {
    }
}