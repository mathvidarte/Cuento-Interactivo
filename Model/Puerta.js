let imagenPuerta;
let imagenPuertaBrilla;

class Puerta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        imagenPuerta = loadImage('images/puerta.png');
        imagenPuertaBrilla = loadImage('images/puertaBrilla.png');

    }

    drawElemento() {
        image(imagenPuerta, this.posX, this.posY, 158, 140);
        if (mouseX > this.posX && mouseX <this.posX+297 && mouseY > this.posY && mouseY < this.posY +390){
            image(imagenPuertaBrilla, this.posX-25, this.posY-30, 210, 200);
        }
    }

    move() {
        if(mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375){
        if (mouseX <= 200) {
            if (this.posX >= 410) {
            } else {
                this.posX += this.vel;
            }
        }
    }

    if(mouseX > 840 && mouseX < 900 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < 12) {
            } else {
                this.posX -= this.vel;
            }
        }
    }
    
    }
}