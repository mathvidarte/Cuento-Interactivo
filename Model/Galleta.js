let imagenGalleta;

class Galleta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        this.imagenGalleta = loadImage('images/galleta.png');
        
    }

    drawElemento() {
        image(this.imagenGalleta, this.posX, this.posY, 83, 87);
    }

    move() {
        if(mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375){
        if (mouseX <= 200) {
            if (this.posX >= 180) {
            } else {
                this.posX += this.vel;
            }
        }
    }
    if(mouseX > 825 && mouseX < 875 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < -220) {
            } else {
                this.posX -= this.vel;
            }
        }
    }

        
    }
}