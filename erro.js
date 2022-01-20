function tratarErroElancar(erro) {
    //throw new error ('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimiNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + 
        } 
}