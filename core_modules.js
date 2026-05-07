//importação do módulo do node para tratamento de arquivo
const fs = require("fs")


fs.readFile("Teste.txt", "utf8", (erro,dados) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log(dados);
    }
})


//Mostra as informações passadas no terminal
console.log(process.argv.slice(2))

//Guarda as informações em uma variável e printa na tela
const argumentos = process.argv.slice(2)
console.log(argumentos);


//Função de criar arquivo
fs.writeFile("Teste2oretorno.txt", argumentos.toString(), "utf8", (erro) => {
    if(erro){
        console.log("Se vira ai pra conserta pq não funcionou");
    }
    else{
        console.log("Arquivo criado successufully :)")
    }
})