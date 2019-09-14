const alumno = {nombre: "John Doe", calificaciones: [7, 10, 9, 6]}
ca = 0

for (i=0; i < alumno.calificaciones.length; i++){
    if (alumno.calificaciones[i] > ca){
        ca = alumno.calificaciones[i]
    }
}

console.log(ca)