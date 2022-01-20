const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [8]()
//esse exemplo mostra como usar variável em looping pode atraplhar o processo no código, já que o var tem escopo global e atrapalha no JavaScript a entender o que foi pedido. no caso as posições não foram respeitadas nas "funcs"