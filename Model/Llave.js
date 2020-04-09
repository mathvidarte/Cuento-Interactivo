let imagenLlave;

class Llave extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.imagenLlave = loadImage('images/llave.png');
    }

    drawElemento() {
        image(this.imagenLlave, this.posX, this.posY, 72, 36);
    }

    move() {
        if(mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375){
        if (mouseX <= 200) {
            if (this.posX >= 250) {
            } else {
                this.posX += this.vel;
            }
        }
    }
    if(mouseX > 825 && mouseX < 875 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < -150) {
            } else {
                this.posX -= this.vel;
            }
        }
    }
    }
}