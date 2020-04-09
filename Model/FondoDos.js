let imagenFondoDos;
let tarde;

class FondoDos extends Parallax{
    constructor (posX, posY) {
        super (posX, posY);
        this.vel = 1.5;

        imagenFondoDos = loadImage("images/FondoDos.png");
        tarde = loadImage("images/tarde.png");
    }

    drawFondo () {
        image(imagenFondoDos, this.posX, this.posY);
    }

    drawTarde() {
        image(tarde, this.posX + 950, this.posY + 160);
    }

   mover() {
    if(mouseX > 0 && mouseX < 100 && mouseY > 325 && mouseY < 375){
            if(this.posX >= -70){
            }else{
                this.posX += this.vel;
            }
        }
    
        if(mouseX > 840 && mouseX < 900 && mouseY > 325 && mouseY < 375){
            if(this.posX < -305){     
            }else{
                this.posX -= this.vel; 
            }  
        }
    
        //console.log(this.vel);
        //console.log(this.posX);
    }
}