// Anonymoys function
(function (a, b, c) {
    return a + b + c
})

// Function Expression
const sum = function (a, b) {
    return a + b
}

sum(7,59) //Nada será impresso

const result = sum(7,59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9));