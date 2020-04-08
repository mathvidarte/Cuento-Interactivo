let imagenFondoDos;

class FondoDos extends Parallax {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 1.5;

        imagenFondoDos = loadImage("images/FondoDos.png");
    }

    drawFondo() {
        image(imagenFondoDos, this.posX, this.posY);
    }

    mover() {
        if (mouseX <= 200) {
            if (this.posX >= -70) {
            } else {
                this.posX += this.vel;
            }
        }

        if (mouseX >= 700) {
            if (this.posX < -305) {
            } else {
                this.posX -= this.vel;
            }
        }

        //console.log(this.vel);
        //console.log(this.posX);
    }
}