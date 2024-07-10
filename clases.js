class Coche{
    constructor(marca, modelo, color, año){
        this.marca= marca
        this.modelo= modelo
        this.color= color
        this.año= año
    }
        Arrancar(){
            console.log(this.marca)
        }
        Detener(){
            console.log(this.color)
        }
}

let MiCoche= new Coche("Chevrolet","Zl1", "Verde Oscuro", 2024)
MiCoche.Arrancar()
let MiCoche1 = new Coche("Chevrolet", "Zl1", "Rojo", 2024)
MiCoche1.Arrancar()
MiCoche1.Detener()



