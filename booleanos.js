let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//as duas exclamações negão duas vezes e volta ao estado original, primário. Uma única excalmação téria uma função de negação, o valor acima ficaria como falso. O valor 1 se torna verdadeiro quando é feito uma negação duas vezes.

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!! 'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!NaN)
console.log(!null)
console.log(!!'')
console.log(!!undefined)
console.log(!!(isAtivo = false ))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))//O resultado nesse caso dá verdadeiro por que tem um único valor verdadeiro que é o último elemento, string verdadeira.Se tiver um único elemento verdadeiro a expressão se dá como verdadeira.

let nome = ''
console.log(nome || 'Desconhecido')//vai ser impresso na tela o valor 'Desconhecido' por que o valro da variável é um valor falso, caso seja trocado por 'Raphael' o console iria imprimir 'Raphael' e não mais 'Descohecido'.



