var vector = [10, 23, 40, 60, 80]
var maior = vector[0]
var menor = vector[0]
var media = 0

for (i in vector) {
    if (vector[i] > maior) maior = vector[i]
    else if (vector[i] < menor) menor = vector[i]
    media += vector[i]
}

media = media/vector.length

console.log("A media é: " + media)
console.log("A nota mais alta é: " + maior)
console.log("A nota mais baixa é: " + menor)
