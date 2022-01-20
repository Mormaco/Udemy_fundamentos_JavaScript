let num1 = 1
let num2 = 2

num1++ //acrescenta mais um a a variável relacionada
console.log(num1)
--num1//faz a subtração do número.
console.log(num1)

console.log(++num1 === num2--)//ess expressão vai dar como true por que o -- está após a expressão, causando uma verificação postuma. já no ++ ou -- vier antes da expressão ela é validada primeiro, verificada primeiro.Evitar usar códigos complexos, tentar o máximo possível ser "limpo" no código.
console.log(num1 === num2)//aqui a expressao dá falso por que apos a verificação eles agora estão diferentes.