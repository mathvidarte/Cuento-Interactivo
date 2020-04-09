let imagenPocion;

class Pocion extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        this.imagenPocion = loadImage('images/Pocion.png');

    }

    drawElemento() {
        image(this.imagenPocion, this.posX, this.posY, 70, 150);

    }

    move() {
        if (mouseX <= 200) {
            if (this.posX >= 100) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX >= 700) {
            if (this.posX < -300) {
            } else {
                this.posX -= this.vel;
            }
        }

        //console.log(this.posX);

    }
}