function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40 }//gera números aleatórios entre 50 e 40.
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))//gera números aleatórios de 0 a 1000
console.log(rand())//nesse caso o código dá erro 
