const persona = {
    nombre: "John Doe",
    tarjetas: [{credito: 19000}, {credito: 50000}]
}

let total = 0
for(i=0; i<persona.tarjetas.length; i++){
    total += persona.tarjetas[i].credito
}
console.log(total)