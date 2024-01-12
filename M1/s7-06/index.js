const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]
  

  function contaTotal(carro){
    return carro.length
  }

  //console.log(`O total de carros é: ` + contaTotal(carros))

  function precoTotal(precos){
    let soma = 0
    for(let c = 0; c < precos.length; c++){
        soma += precos[c].preco
    }
    return soma.toFixed(2).replace('.', ',')
  }

  //let valor = precoTotal(carros)
  //console.log(`O valor total dos veículos é R$` + `${valor}`)


  function filtraPorMarca(lista, marca){
    let arr = []
    for(let c = 0; c < lista.length; c++){
        if(lista[c].marca === marca){
            arr.push(lista[c])
        }
    }    
    return arr
  }

  //console.log(filtraPorMarca(carros, 'VW'))


  function filtraPorAcessorio(lista, acess){
    let veiculos = []
    for(let c = 0; c < lista.length; c++){
        for(let i = 0; i < lista[c].acessorios.length; i++){
           if(lista[c].acessorios[i] === acess){
            veiculos.push(lista[c])
           }
        }
        
    }
    return veiculos
  }
  //console.log(filtraPorAcessorio(carros, 'Trava'))



function eCarroCompleto(lista){
    let veiculosCompleto = []
    for(let c = 0; c < lista.length; c++){ 
        if(lista[c].completo){
            veiculosCompleto.push(lista[c])
        }
    }
    return veiculosCompleto
  }
//console.log(eCarroCompleto(carros))


let carro =  {
    modelo: "Golf",
    marca: "VW",
    ano: "2000",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 16799.33
}
function adicionaCarro(novoCarro) {
    carros.push(novoCarro)
  }
//console.log(carros)
//adicionaCarro(carro)
//console.log(carros)


function removeCarro(lista, indice) {
    let novaListaAtualizada = []
    for(let c = 0; c < lista.length; c++){
        if(c != indice){
            novaListaAtualizada.push(lista[c])
        }
    }
    if(novaListaAtualizada.length < indice){
        return 'Posição Inválida.'
    }
    return novaListaAtualizada
  }
//console.log(removeCarro(carros, 5))


function contaCarrosNovos(lista) {
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        if(lista[i].ano >= 2013){
            soma += 1
        }
    }
    return soma
  }

  console.log('O total de carros novos na lista são: ' + contaCarrosNovos(carros))