const temperaturas = [19, 24, 25, 30, 10]
alta = 0
for (let i = 0; i < temperaturas.length; i++){
    if (temperaturas[i] > alta){
        alta = temperaturas[i]
    }
}

console.log(alta)
