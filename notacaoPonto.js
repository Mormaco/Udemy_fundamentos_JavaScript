console.log(Math.ceil(6.1))//obs ceil arredonda prá cima o valor.

const obj1  = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' equivalente, mudou nome pra não sobscrever o 'bola'.
console.log(obj1.nome)

function obj (nome) {
    this.nome = nome// o "this" deixa o atributo público.
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)