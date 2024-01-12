let pessoa = {
    nome: 'Lucas',
    anoNascimento: 1990,
    cpf: 444616305,
    cidade: 'Uruburetama',
    estado: 'Ceara',
    logradouro: 'General Cordeiro'
}

let escola = {
  nome: 'Mathilde',
  cnpj: 123456789,
  areaAtuacao: 'Ensino medio',
  cidade: 'Itapipoca',
  estado: 'Ceara',
  logradouro: 'Anastacio Braga',
  curso: 'Estadual' 
}

let curso = {
    nome: 'Ciencias Contabeis',
    duracaoAnos: 4,
    turma: 'A',
    modulos: ['Modulo1', 'Modulo2', 'Modulo3', 'Modulo4']
}

let endereco = {
    cidade: 'Campina Grande',
    estado: 'Paraiba',
    logradouro: 'Antonio Francisco do BU',
    cep: 58410571
}

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true,

    obterPlaca: function(){
        return this.placa
    },

    verificarClasses: function(){
        return this.classes
    },

    potenciaReal: function(){
        if(this.luxo){
            this.potencia **=2
            return this.potencia
        }
    },

    adicionarNovaClasse: function(str){
        if(this.classes.length >= 3){
            return 'Esse carro não pode ter mais classes.'
            const novasClasses = ['hatchback', 'suv', 'crossover', 'cupe']
            for(let c = 0; c < 4; c++){
            this.classes.push(novasClasses[c])
        }
        }
        
        if(str != 'sedan' && str != 'hatchback' && str != 'suv' && str != 'crossover' && str != 'cupe' ){
            return 'Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê'
        }
         return `A classe ${str} já é umas das classes dele.`   
    },

    naoMaisLuxo: function(){
        if(this.estacionado){
        }else{
            return `O carro ${this.placa} não está estacionado.`
        }
        if(this.luxo){
        }else{
            return `O carro ${this.placa} não é luxuoso.`
        }
        this.luxo = false
        
        return `O carro ${this.placa} não é mais luxuoso.`
        
        
    }

  }