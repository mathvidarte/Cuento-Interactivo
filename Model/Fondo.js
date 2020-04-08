let fondoImagen;

class Fondo extends Parallax {
    constructor (posX, posY) {
        super (posX, posY); 
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        fondoImagen = loadImage ("images/Fondo.png");
    }

    drawFondo() {
        image(fondoImagen,this.posX,this.posY);
       
    }

    mover() {
        if(mouseX <= 200){
            if(this.posX > 0){
            }else{
                this.posX += this.vel;
            }
        }
    
        if(mouseX >= 700){
            if(this.posX < -221){     
            }else{
                this.posX -= this.vel; 
            }  
        }
    
        console.log(this.vel);
        console.log(this.posX);
    }
}