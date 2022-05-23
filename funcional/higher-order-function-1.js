/*
Quando uma linguagem permite que uma função opere usand outras funções,
tanto passando como um argumento, como retornando-a
*/

function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello) // para passar uma função como argumento, não usa-se o parenteses.

run(function() {
    console.log('run!!')
})

const result = run(Math.random);

console.log(result)