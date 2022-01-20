const peso1 = 1.0
const peso2 = Number('2.0')


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('A media do aluno foi: ' + media.toFixed(2)) //toFixed seria para controlar a quantidade de casas decimais, duas casas depois do ponto final.

console.log(media.toString())//mostra como string o numero para mostrar na tela por escrito 7.8709999999999996.
console.log(media.toString(2))//mostra como binário 111.11011110111110011101101100100010110100001110010101

console.log(typeof media)