let imagenPuerta;

class Puerta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenPuerta = loadImage('images/puerta.png');

    }

    drawElemento() {
        image(imagenPuerta, this.posX, this.posY, 158, 140);
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

    if(mouseX > 825 && mouseX < 875 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < 12) {
            } else {
                this.posX -= this.vel;
            }
        }
    }
    
    }

    getPosX () {
        return this.posX;
    }

    setPosX(posX){
        this.posX = posX;
    }

    getPosY () {
        return this.posY;
    }

    setPosX(posY){
        this.posX = posX;
    }
}