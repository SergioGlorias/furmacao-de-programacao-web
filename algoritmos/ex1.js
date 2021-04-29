const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("Digite a nota optida: ", (nota) => {
    if (parseInt(nota) >=10) {
        console.log("Passou")
    } else {
        console.log("Não Passou")        
    }

    rl.close()
})