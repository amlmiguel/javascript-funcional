/*
Uma linguagem é dita que suporta first-class function quando
funções nessa linguagem são tratada como qualquer outra variável
*/

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = (a, b) => a / b;

console.log(add(10,20));
console.log(subtract(10,20));
console.log(multiply(10,20));
console.log(divide(10,20));