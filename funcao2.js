//Armazenando função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implicito 
const subtracao = (a, b) => a - b //quando o bloco só tiver uma linha, pode colocar o arrow sem chaves que ele retonra sem precisar colocar "return". redução com o arrow em uma única linha
console.log(subtracao(3, 2))