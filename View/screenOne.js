let fondoScreen;
class ScreenOne {
    constructor() {
        fondoScreen = new Controller();
    }

    drawScreen() {
        fondoScreen.drawController();
    }

    moverScreen() {
        fondoScreen.moverController();
    }

    changesScreen () {
        fondoScreen.changesController();
    }
}