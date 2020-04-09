let imagenAlicia;
let imagenAliciaBrilla;


class Alicia extends Elemento {
    constructor(posX, posY, tam, tamDos) {
        super(posX, posY);
        //this.word = word;
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;
        this.tam = tam;
        this.tamDos = tamDos;

        imagenAlicia = loadImage("images/Alicia.png");
        imagenAliciaBrilla = loadImage("images/aliciaBrilla.png");
    }

    drawElemento() {
       image(imagenAlicia, this.posX, this.posY, this.tam, this.tamDos);
        //image(imagenAlicia, this.posX, this.posY, 297, 390);

        if (mouseX > this.posX && mouseX <this.posX+297 && mouseY > this.posY && mouseY < this.posY +390){
            image(imagenAliciaBrilla, this.posX, this.posY, this.tam, this.tamDos);
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

    getTam () {
        return this.tam;
    }

    setTam(tam){
        this.tam = tam;
    }

    getTamdos () {
        return this.tamDos;
    }

    setTamdos (tamDos){
        this.tamDos = tamDos;
    }
}