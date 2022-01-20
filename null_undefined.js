let valor//Valor undefined, não foi inicializada, diferente de null
console.log(valor)

valor = null //Ausência de valor. Caso queria zerar o valor de uma variável, use null e nunca undefined.
console.log(valor)

//console.log(valor.toString())// ERRO! não foi definido a string que nesse caso dá erro

const produto = {}
console.log(produto.preco)//nesse caso o valor será undefined, foi atribuido na const o valor dentro das chaves
produto.preco = 3.50
console.log(produto)//Mostra o preço 3.50

//quando quiser zerar usar nulo e deixar o undefined para o programa descidir quando não houver valor.