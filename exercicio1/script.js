
// # Exercício 1

// Crie um código que receba um número por **prompt** e 
// verifique se um número é divisível por 2 **ou** por 3

// Faça isso:

const numero = Number(prompt("Digite um número:"))
console.log("Valor digitado: ", numero)

//1. Utilizando ifs aninhados

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log("O número é divisivel por 2 ou por 3")
    }
    else {
        console.log("O número é divisivel por 2 ou por 3")
    }
}
else {
    if (numero % 3 === 0) {
        console.log("O número é divisivel por 2 ou por 3")
    }
    else {

        console.log("O número informado NÃO é divisivel por 2 ou por 3")
    }
}


/*

//2. Utilizando um operador lógico para unir duas operações relacionais:

if (numero % 2 == 0 || numero % 3 == 0) {
    console.log("O número é divisivel por 2 ou por 3")
}
else {
    console.log("O número informado NÃO é divisivel por 2 ou por 3")
}

*/
