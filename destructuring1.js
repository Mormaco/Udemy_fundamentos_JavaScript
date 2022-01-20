//novo recurso intuduzido no ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua machado de assis', 
        numero: 236
    } 
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)//os valores que não foram definidos não aparecem, no caso em bemHumorado aparece "true" por que foi definido acima.

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)//tem que se certificar que o caminho está limpo até o dado, se certificar que o dado existe e foi definido para ir localiza-ló no código.

const { conta: {ag, num} } = pessoa //vai dar erro por que não foi definido acima os valores e a busca vai dar erro.