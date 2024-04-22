/*const person = {
    name: 'Lucas',
    age: 33
}

const person2 = person
person2.name = 'Carlos'
person2.age = 35

console.log(person)
console.log(person2)

const carlos = {
    name: 'Carlos',
    age: 35
}

const lucas = {...carlos}
lucas.name = 'Lucas'
lucas.age = '33'

console.log(carlos)
console.log(lucas) 


const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const newArray = [...array1, ...array2]
console.log(newArray)

console.log(array1)


const numbers1 = [3, 4]
const numbers2 = [1, 2]

numbers2.push(numbers1[0])
console.log(numbers2)

numbers2.push(...numbers1, 5, 6)
console.log(numbers2)*/


/*const usuario = {
    name: 'Carlos',
    age: 35
}
const endereco = {
    rua: 'Antonio Franciso',
    cidade: 'Campina Grande',
    estado: 'PR'
}

const usuarioCompleto = {
    ...usuario,
    name: 'Lucas',
    age: 33,
    ...endereco,
    rua: 'Calixto',
    cidade: 'Campina',
    estado: 'RC'
}

console.log(usuarioCompleto)*/


const form = document.querySelectorAll('input')
console.log(form)

const inputs = [...form]
console.log(inputs)

const login = inputs.map((element) => element.value)
console.log(login)
const email = inputs.find((element) => element.name === 'Email')
console.log(email)