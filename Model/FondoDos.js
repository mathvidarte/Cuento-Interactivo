let imagenFondoDos;

class FondoDos extends Parallax{
    constructor (posX, posY) {
        super (posX, posY);
        this.posX = posX;
        this.posY = posY;

        imagenFondoDos = loadImage("images/FondoDos.png");

    }

    drawFondo () {
        image(imagenFondoDos, this.posX, this.posY);
    }
}