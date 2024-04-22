const number = 33
const array = [1, true, "Lucas"]
const string = 'Local Storage'

localStorage.setItem("Número", number)
localStorage.setItem("Array", array)
localStorage.setItem("String", string)

const newNumber = localStorage.getItem("Número")
const h1 = document.querySelector('h1')
h1.innerText = newNumber

//localStorage.clear()