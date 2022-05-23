function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1,2,3)
logParams(1,2,3,4,5) // O JavaScript irá ignorar os parâmetros adicionais.
logParams(1,2) // O terceiro parâmetros vai ser undefined.
logParams(1) // O Segundo e o Terceiro parâmetros vão ser undefined.


// Definindo um valor padrão

function defaultParams(a, b, c = 0) { //Se o terceiro argumento não for passado o JS vai considera-lo zero
    console.log(a, b, c)
}

defaultParams(7,8,9)
defaultParams(7,8)


// Número de parâmetros indefinidos

function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1,2,3])


// Fazendo isso sem usar o array

// Spread/Rest

function logNums2(...nums) {
    console.log(nums)
}

logNums2(1,2,3,4,5,6);

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1,2,4))