//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(`Tu nombre es ${this.nombre} con edad ${this.edad} y eres ${this.genero} `)
    }
}

let persona1 = new Persona("Pedro", "34", "hombre");
persona1.obtDetalles();

//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`Tu nombre es ${this.nombre} con edad ${this.edad} y eres ${this.genero}, del curso ${this.curso} del grupo ${this.grupo}`)
    }
}

let estudiante1 = new Estudiante("Alberto", "29", "hombre", "FullStack", "full time");
estudiante1.registrar();

//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona{
    constructor (nombre, edad, genero, asignatura, nivel){
        super (nombre, edad, genero) 
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`El profesor ${this.nombre} de edad ${this.edad} de genero ${this.genero} imparte la asignatura de ${this.asignatura} con nivel ${this.nivel}`)
    }
}

let profesor1 = new Profesor("Alejandro", "30", "hombre", "fullStack", "altisimo");
profesor1.asignar();

