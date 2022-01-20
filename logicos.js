function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //operação lógica tipo "ou". Se a primeira expresão foi verdadeira, ele nem olha a segunda e o resultado já será verdadeiro.
    const comprarTv50 = trabalho1 && trabalho2//operação lógica do tipo "e". se a primeira expressão for falsa, ele nem olha a segunda expressão.
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwise xor (ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2//simula o ou exclusivo e fica mais dinâmico.
    const manterSaudavel = !comprarSorvete //operdor unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


