let imagenGalleta;
let imagenGalletaBrilla;

class Galleta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        imagenGalleta = loadImage('images/galleta.png');
        imagenGalletaBrilla = loadImage('images/galletaBrilla.png');
    }

    drawElemento() {
        image(imagenGalleta, this.posX, this.posY, 83, 87);

        if (mouseX > this.posX && mouseX <this.posX+83 && mouseY > this.posY && mouseY < this.posY +87){
            image(imagenGalletaBrilla, this.posX-15, this.posY-10, 105, 110);
        }


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