console.log('a = ', a)
var a = 2 
console.log('a = ', a)
//em algumas outras linguagens, a linha anterior a variável ser declarada não seria lida, mas em JavaScript não dá erro, fica como undefined, mas a variável fica existente.Isoo foi possivel por causa do içamento ou hoisting que subiu a variável para a linha de cima.

console.log('b = ', b)
let b = 2 
console.log('b = ', b)
//nesse  caso com let dá erro e não lê o código pelo questão do escopo.