let imagenGalleta;

class Galleta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenGalleta = loadImage('images/galleta.png');
    }

    drawElemento() {
        image(imagenGalleta, this.posX, this.posY, 83, 87);
    }

    move() {
        if (mouseX <= 200) {
            if (this.posX >= 180) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX >= 700) {
            if (this.posX < -220) {
            } else {
                this.posX -= this.vel;
            }
        }

        
    }
}