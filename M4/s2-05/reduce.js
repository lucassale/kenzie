const numbers = [1, 2, 3, 4, 5]

const person = [
    {nome: 'Carlos', age: 35},
    {nome: 'Lucas', age: 30},
    {nome: 'Sales', age: 40},
    {nome: 'Andrade', age: 45}
]

/*Função arrow exige 2 parametros e pode ser adicionado no final o valor de inicio.
Os 2 parametros são o acumulador e o valor atual.
Quando se usa return é preciso declarar dentro de uma variável.*/

const valorFinal = numbers.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
} )

console.log(valorFinal)


const personActual = person.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.age
}, 0)

console.log(personActual)