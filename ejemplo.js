
let Libro = { 
    titulo:"Cien años de soledad",
    autor:"Gabriel García Marquez",
    año:"1967",
    description() {
        console.log(this.titulo)
    },
    nombreautor() {
        console.log(this.autor)
    },
    añolibro() {
        console.log(this.año)
    },

};
Libro.description()
Libro.añolibro()

let Deporte ={
    ConBalon:[Futbol, Baloncesto, Voleibol, Golf, Beisbol, Billar, Tenis,],      
    SinBalon: [Ciclismo, Boxing, Bmx, Skate, Motociclismo, Running, Motociclismo,]
}
console.log(Deporte.ConBalon['3'])
console.log(Deporte.SinBalon['4'])

let Persona={
    nombre: "Muriel",
    edad: 21,
    Estudios:{titulo:"Tecnologo en Programación"},
    Profesion:{nombre:"Análisis en Desarrollo de Software"},
    TieneEstudios() {
        console.log(this.Estudios)
    },
    TieneProfesion() {
        console.log(this.Profesion)
    }
}

Persona.TieneEstudiosEstudios()
Persona.TieneProfesion()

