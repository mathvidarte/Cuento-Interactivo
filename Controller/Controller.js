let cu;
let fondos;
class Controller {
   
constructor(){
    cu= new Cuento();
    fondos = new Cuento();
    
}
sortList(c) {
    cu.sortList(c);

}

drawController () {
    this.fondos.drawCuento();
}
}