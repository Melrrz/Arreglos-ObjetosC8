const stock = [
    {marca:"Huawei", modelo:"P30", precio: 13500},
    {marca:"Apple", modelo:"iPhone x", precio: 20000},
    {marca:"Motorola", modelo:"Moto X", precio: 10000 }
]
let comp=0
for(let i=0;i<stock.length;i++){
    if (stock1[i].precio > stock[i-1].precio){
        comp = stock[i].precio
    }
}

console.log(comp)

