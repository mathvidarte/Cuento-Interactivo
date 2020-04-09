let fondos;
class Controller {

    constructor() {
        fondos = new Cuento();

    }


    drawController() {
        fondos.drawCuento();
    }
    moverController() {
        fondos.moverCuento();
    }

    changesController () {
        fondos.changes();
    }
}