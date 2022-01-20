function rand ([min = 0, max = 1000]) {
    if(min > max) [min, max] [max, min]
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))//nesse caso fica gerando números aleatórios entre 992 e 1000
console.log(rand([, 10]))//começa no 0 e vai até 10
console.log(rand([]))//assumi os valores padrões entre 0 e 1000
console.log(rand())//nesse cado o código dá erro por que não chama nada no array