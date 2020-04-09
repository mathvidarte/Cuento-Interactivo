let imagenPuerta;

class Puerta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenPuerta = loadImage('images/puerta.png');

    }

    drawElemento() {
        image(imagenPuerta, this.posX, this.posY, 158, 140);
    }

    move() {
        if (mouseX <= 200) {
            if (this.posX >= 410) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX >= 700) {
            if (this.posX < 12) {
            } else {
                this.posX -= this.vel;
            }
        }
    
    }
}