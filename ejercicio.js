class Persona{
    constructor(documento,nombre,apellido,edad,){
        this.documento= documento
        this.nombre= nombre
        this.apellido= apellido
        this.edad = edad
    }

    /* METODO */
    saludo(){
        console.log(this.nombre)
    };
    /* METODO */
}

/* INSTANCIAS */
let persona1= new Persona (1125408438,"Esneider", "Muriel", 21)
let persona2= new Persona (1535453432,"Juan", "Benavides", 20)
let persona3= new Persona (1655086383,"Stiven", "Salas", 18)
let persona4= new Persona (1345036383,"Duber", "Bolaños", 40)
let persona5= new Persona (1535453432,"Claudia", "Bolaños", 30)
/* INSTANCIAS */


persona1.saludo()
persona2.saludo()
persona3.saludo()
persona4.saludo()
persona5.saludo()