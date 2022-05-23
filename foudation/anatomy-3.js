// Function expression
const increment1 = function(n) {
    return n + 1
}
// Arrow Function sempre é uma função anônima
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

// Quando temos uma função arrow em apenas um linha a palavra return está implícita
const increment4 = n => n + 1



console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b
console.log(sum(3,8))