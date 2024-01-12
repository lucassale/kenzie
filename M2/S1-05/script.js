const article = document.createElement('article')

const h2 = document.createElement('h2')
h2.innerText = "Tìtulo do article"

const p = document.createElement('p')
p.innerText = "Meu parágrafo."

const button = document.createElement('button')
button.innerText = "Clique aqui!"

article.appendChild(h2)
article.appendChild(p)
article.appendChild(button)

console.log(h2)
console.log(p)
console.log(button)
console.log(article)


const pagina = document.querySelector("body");
pagina.appendChild(article)