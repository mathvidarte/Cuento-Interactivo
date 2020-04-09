let imagenLlave;
let imagenLlaveBrilla;

class Llave extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        imagenLlave = loadImage('images/llave.png');
        imagenLlaveBrilla = loadImage('images/llaveBrilla.png');
    }

    drawElemento() {
        image(imagenLlave, this.posX, this.posY, 72, 36);

        if (mouseX > this.posX && mouseX <this.posX+72 && mouseY > this.posY && mouseY < this.posY +36){
            image(imagenLlaveBrilla, this.posX-10, this.posY-10, 95, 53);
        }
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
    if(mouseX > 840 && mouseX < 900 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < -150) {
            } else {
                this.posX -= this.vel;
            }
        }
    }
    }
}