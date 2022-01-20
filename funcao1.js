//função sem retorno 
function imprimirSoma(a, b){   //atribui valores que seram resolvidos dentro do bloco
    console.log(a + b)
}

imprimirSoma(2, 3)//Puxa a função a qualquer momento que for solicitado
imprimirSoma(2)//ignora a segunda variável e gera "NaN"
imprimirSoma(2, 3, 4, 5, 6, 7)//como na função só estão atribuidos dois valores, o javascript só vai ler os dois primeiros, os outros seram ignorados.
imprimirSoma()//nesse caso também cria um "NaN"

//função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))//resultado dá 5 
console.log(soma(2))//resultado dá 3 
console.log(soma())//resultado NaN
