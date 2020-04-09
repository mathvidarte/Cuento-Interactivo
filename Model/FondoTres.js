let imagenFondoTres;

class FondoTres extends Parallax {
    constructor(posX, posY) {
        super(posX, posY);
        this.vel = 1;

        imagenFondoTres = loadImage("images/FondoTres.png");
    }

    drawFondo() {
        image(imagenFondoTres, this.posX, this.posY);
    }

    mover() {
        if (mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375) {
            if (this.posX >= 0) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX > 840 && mouseX < 900 && mouseY > 325 && mouseY < 375) {
            if (this.posX < -400) {
            } else {
                this.posX -= this.vel;
            }
        }

        //console.log(this.vel);
        //console.log(this.posX);
    }
}