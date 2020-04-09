let imagenPocion;
let imagenPocionBrilla;

class Pocion extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        this.imagenPocion = loadImage('images/Pocion.png');

    }

    drawElemento() {
        image(this.imagenPocion, this.posX, this.posY, 70, 150);

    }

    move() {
        if (mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375) {
            if (mouseX <= 200) {
                if (this.posX >= 100) {
                } else {
                    this.posX += this.vel;
                }
            }
        }

        if (mouseX > 825 && mouseX < 875 && mouseY > 325 && mouseY < 375) {
            if (mouseX >= 700) {
                if (this.posX < -300) {
                } else {
                    this.posX -= this.vel;
                }
            }
        }

        //console.log(this.posX);

    }

    getPosX() {
        return this.posX;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosX(posY) {
        this.posX = posX;
    }

}