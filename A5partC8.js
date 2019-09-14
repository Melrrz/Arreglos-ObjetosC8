const jugador = {nombre: "John Doe", 
partidas:[true, false, true, true]}
partidasg = 0
for (let i = 0; i < jugador.partidas.length; i++){
    if (jugador.partidas[i]){
        partidasg ++
    }
}
console.log(partidasg)