let imagenPocion;
let imagenPocionBrilla;
let PActiva;

class Pocion extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 1;
        PActiva = false;

        imagenPocion = loadImage('images/Pocion.png');
        imagenPocionBrilla = loadImage('images/PocionBrilla.png');

    }

    drawElemento() {
        image(imagenPocion, this.posX, this.posY, 70, 150);
       
       
          
        
        if (mouseX > this.posX && mouseX <this.posX+70 && mouseY > this.posY && mouseY < this.posY +150){
            image(imagenPocionBrilla, this.posX-5, this.posY-10, 93, 180);
        }
        
    }
 
        

    

    move() {
        if(mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375){
        if (mouseX <= 200) {
            if (this.posX >= 100) {
            } else {
                this.posX += this.vel;
            }
        }
    }

    if(mouseX > 825 && mouseX < 875 && mouseY > 325 && mouseY < 375){
        if (mouseX >= 700) {
            if (this.posX < -300) {
            } else {
                this.posX -= this.vel;
            }
        }
    }

        //console.log(this.posX);

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