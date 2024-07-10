
/* CLASE */
class Prestamo {
    constructor(documento, nombre, prestamo, intereses, fechaPrestamo, valorInteres, numeroCuotas){
        
        /* ATRIBUTOS */
        this.documento = documento
        this.nombre = nombre
        this.prestamo = prestamo
        this.intereses = intereses
        this.fechaPrestamo = fechaPrestamo
        this.valorInteres = valorInteres
        this.numeroCuotas = numeroCuotas
    }


    /* METODOS */
    
    CalcularValorTotalPrestamo(){

        let interesA = this.prestamo * (this.intereses / 100) * this.numeroCuotas;
        let totalPrestamo = this.prestamo + interesA;
        return totalPrestamo;

    }
    ValorPagarCoutasInteres(){

        let valorCuota = this.CalcularValorTotalPrestamo() / this.numeroCuotas;
        return valorCuota;

    }
    ValorPagarCoutas(){

        let valorCuota2 = this.ValorPagarCoutasInteres();
        return valorCuota2;

    }
    PagarCuota(valorPagar){
        if (this.deudaTotal > 0) {
            this.deudaTotal -= valorPagar;
            if (this.deudaTotal < 0) {
                this.deudaTotal = 0;
            }
            return `Deuda restante: ${this.deudaTotal}`;
        } else {
            return "No hay deuda pendiente.";
        }
    }
    Refinanciar(nuevoNumeroCuotas){
        this.numeroCuotas = nuevoNumeroCuotas;
        this.deudaTotal = this.CalcularValorTotalPrestamo(); /* Recalcula la deuda total con el nuevo número de cuotas */
        return `El préstamo ha sido refinanciado. Nuevo número de cuotas: ${this.numeroCuotas}. Deuda total actualizada: ${this.totalDeuda}`;
    }

    toSting(){
        

    }
    /* METODOS */


}
/* CLASE */



/* INSTANCIAS */
let prestamo1= new Prestamo (1224438333, "Roberto", 3000000, 5, '12/12/2028', 3, 9)
let prestamo2= new Prestamo (1024736321, "Andres", 4000000, 5, '12/12/2028', 4, 6)
let prestamo3= new Prestamo (1084748182, "Enrique", 2000000, 5, '12/12/2028', 2, 9)
let prestamo4= new Prestamo (1056187644, "Eduardo", 2000000, 5, '12/12/2028', 2, 9)
let prestamo5= new Prestamo (1156147674, "Camila", 2000000, 5, '12/12/2028', 2, 9)
let prestamo6= new Prestamo (1066187664, "Elizabeth", 2000000, 5, '12/12/2028', 2, 9)

/* INSTANCIAS */


console.log(prestamo1.CalcularValorTotalPrestamo());
console.log(prestamo2.ValorPagarCoutasInteres());
console.log(prestamo3.ValorPagarCoutas());
console.log(prestamo4.PagarCuota());
console.log(prestamo5.Refinanciar());