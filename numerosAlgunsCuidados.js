console.log(7 / 0)// JavaScript entende como infinity o resultado da operação 
console.log("10" / 2 )//cuidado que o JavaScript entende alguns números, mesmo sendo string e faz o resultado. No exemplo acima ele dá o resultado 5. Já se colocar "10.2" ele não reconhece mais.
console.log('show' * 2)//outras linguagens escreveriam 'show' duas vezes, em JavaScript dá erro.

console.log(0.1 + 0.7)//algumas operações não são precisas em JavaScript. O resultado dessa operação dá um numero 0.7999999999999999 que é próximo do resultado de acordo com o padrão da linguagem em float.

//console.log(10.toString()) modo errado, a linguagem não entende.
console.log(10.345.toFixed(2))//imprime 10.35
