var 
    num = [10,12,10,5,8,5],
    cont = []

for (i of num) {
    if (!cont.includes(i)) cont.push(i) 
    else {
        console.log(`${i} está Duplicado`)
    }
}