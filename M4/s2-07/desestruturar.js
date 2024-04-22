/*const person = {
    name: "Lucas",
    age: 33,
    adress: {
        city: "Campina Grande",
        state: "PR"
    }
}
//const nome = person.name
//document.body.innerText = nome
//console.log(person.name)
//const name = person.name
//console.log(name)
//const { name } = person
//console.log(name)
//const { name, age, adress: {city, state}} = person
//console.log(`Meu nome é ${name} e tenho ${age} anos. Moro na cidade de ${city} que fica no estado da ${state}`)*/

const ranking = ["Carlos", "Lucas", "Sales", "Andrade"]

const [first, second, third] = ranking

document.body.innerText = `
Primeiro lugar: ${first}
Segundo lugar: ${second}
Terceiro lugar: ${third}`
