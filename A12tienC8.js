const stores = [{
    name:"Amazon"},{ 
    stock:[
        {marca:"Huawei", modelo:"P30", precio: 11999},
        {marca:"Apple", modelo:"iPhone x", precio: 18000},
        {marca:"Motorola", modelo:"Moto X", precio: 9000}
    ]
},
{
    name:"Liverpool", 
        stock:[
            {marca:"Huawei", modelo:"P30", precio:13500},
            {marca:"Apple", modelo:"iPhone x", precio:20000},
            {marca:"Motorola", modelo:"Moto X", precio:10000}
        ]
    }
]

for (let i=0;i<stores.length;i++){
    for (let k=0; k<stores[i].stock[k];k++){
        if (stock[i].precio<stock[i-1].precio){
            stock[i].precio
        }
        console.log(stock[i].marca.modelo.precio)
    }

}