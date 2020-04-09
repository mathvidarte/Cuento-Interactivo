let imagenAlicia;
let imagenAliciaBrilla;


class Alicia extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        imagenAlicia = loadImage("images/Alicia.png");
        imagenAliciaBrilla = loadImage("images/aliciaBrilla.png");
    }

    drawElemento() {
        image(imagenAlicia, this.posX, this.posY, 297, 390);

        
        if (mouseX > this.posX && mouseX <this.posX+297 && mouseY > this.posY && mouseY < this.posY +390){
            image(imagenAliciaBrilla, this.posX-30, this.posY-55, 370, 500);
        }
    }

    move() {
    }
}