const escola = "Cod3r"

console.log(escola.charAt(4))//começa a contar do "c" que seria 0,1,2,3... imprime o "r" na tela
console.log(escola.charAt(5))//retona nulo mas não gera erro. não imprime nada na tela
console.log(escola.charCodeAt(3))//dá o codigo da tabela unicode dos caracteres, nesse caso daria codigo 51
console.log(escola.indexOf('3'))//mostra qual é o caracter na posição 3 

console.log(escola.substring(1))//imprime tudo a partir do caracter 1, ex: "od3r"
console.log(escola.substring(0, 3))//imprime do primeiro ao terceiro caracter, ex "Cod"

console.log('Escola '.concat(escola).concat("!"))//imprime na tela "Escola Cod3r!"
console.log('Escola ' + escola + "!"))//imprime na tela "Escola Cod3r!"
console.log(escola.replace(3, 'e'))//substitui o valor e imprime Coder

console.log("Ana,maria,Pedro".split(","))//faz a separação das vírgulas

