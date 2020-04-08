let imagenPocion;

class Pocion extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenPocion = loadImage('images/Pocion.png');
        
    }

    drawElemento () {
        image(imagenPocion, this.posX, this.posY, 70, 150);
       
    }

    move () {
        if(mouseX <= 200){
            if(this.posX >= 0){
            }else{
                this.posX += this.vel;
            }
        }
    
        if(mouseX >= 700){
            if(this.posX < -400){     
            }else{
                this.posX -= this.vel; 
            }  
        }
        console.log (this.posX);
    }
    
}