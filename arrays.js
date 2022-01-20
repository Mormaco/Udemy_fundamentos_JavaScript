const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4])//no javascript aparece a mensagem de undefined, por que ela é uma linguagem flexsível, isso pode ser ruim pois não mostra erro e pode atrapalhar na hora de fazer seu código. Ficar esperto*. o código vai rodar e não vai mostrar onde está o erro, isso pode ser perigoso.

valores[4] = 10
console.log(valores)//[ 7.7, 8.9, 6.3, 9.2, 10 ] inclui o valor 10 que foi definido depois.
console.log(valores.length)//mostra a quantidade de valores do array, nesse caso são 5 

valores.push({id: 3}, false, null, 'teste')//adiciona qualuqer tipo de valor no array, a qualquer momento.
console.log(valores)//preze por tipos iguais, evitar misturar tipos de dados, faça vários arrays com tipos semelhantes.

console.log(valores.pop())//retira o ultimo elemento do array. Retorna o valor 'test'
delete valores[0]//retira o primeiro elemento do array.
console.log(typeof valores)//o tipo de dado no array aparece como object