let imagenLlave;

class Llave extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenLlave = loadImage('images/llave.png');
    }

    drawElemento() {
        image(imagenLlave, this.posX, this.posY, 72, 36);
    }

    move() {
        if (mouseX <= 200) {
            if (this.posX >= 250) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX >= 700) {
            if (this.posX < -150) {
            } else {
                this.posX -= this.vel;
            }
        }
    }
}