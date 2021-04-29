//Importar o sistema para ler o terminal
const readline = require("readline")

const pi = 3.14
var a,b,c = 0

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("Insira o seu peso: ", (res) => {
    console.log(`A resposta do utilizador foi ${res}`)

    if (parseInt(a) >= 100 ) {
        console.log("excesso de peso")        
    } else if (parseInt(a) >= 80) {
        console.log("peso alto")
    } else {
        console.log("Não disponivel")
    }
})