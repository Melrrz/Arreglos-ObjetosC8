const arreglo = [[1, 2, 3, 4,], [5, 6, 7, 8], [9, 10, 11, 12]]
let suma = 0

for (let index = 0; index < arreglo.length; index++){
    for (let indekso = 0; indekso < arreglo[index].length; indekso++) {
        suma += arreglo[index][indekso]
    }
}
console.log(suma)
