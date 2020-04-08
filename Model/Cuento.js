let escena = [];
let cargar = [];
class Cuento {
    Constructor(){

    
 
    escena = loadStrings("../data/escena.txt");

    for (let i = 0; i < escena.length; i++) {
        cargar = escena[i].split(",");
        
        alicia = cargar[2];
        pocion = cargar[1];
    }

 }
 
 sortList(c) {
    switch (c) { 
    case 'p':
        console.log("putos");
    break;
    }
}
   
}