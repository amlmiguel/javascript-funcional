// Function declaration
// A simples declaração dessa função a invoca, porque ela nao possui argumentos.

// Função que não recebe parâmetros nem retorna nada.
function sayHello() {
    console.log('Hello!')
}

sayHello(); // imprimi 'Hello!' no console.

/* Ao atribuir uma variável a uma função, o retorno será undefined porque essa nossa variável será
o retorno da função que em nosso caso nao existe */

let x = sayHello();
console.log(x);

// Função que que recebe parâmetro e não retorna nada  
function sayHelloTo(name) {
    console.log(`Hello ${name}` )
}

sayHelloTo('Bob');

// Função que não recebe parâmetro mas retorna algo
function returnHi() {
    return 'Hi!'
}

/* Não irá imprimir nada porque não usamos console.log() */
returnHi()

/*Agora se atribuirmos uma variável essa função e imprimirmos essa variável obteremos a string */

let y = returnHi();
console.log(y);

//Alternativamente
console.log(returnHi());

// Função que recebe parâmetro e retorna algo.
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))
