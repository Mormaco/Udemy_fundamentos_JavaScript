var numero = 1//fujir sempre do escopo global em variáveis
{
    var numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)
//o resultado será o mesmo nas duas opções, tanto dentro como fora o resultado será 2 por que o que está dentro do bloco tem prioridade.
//"var" tem escopo global e de função. de bloco só "let"