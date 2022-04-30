console.clear();
const prompt = require('prompt-sync')();

let nome = prompt('Qual o nome? ');
let idade = +prompt('Qual a idade? ');
let peso = +prompt('Qual o peso (kg)? ');
let altura = +prompt('Qual a altura (m)? ');

let pessoa = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,

    envelhecer: function(){
        if (this.idade < 21){
            this.idade++
            this.altura += 0.05
            //this.altura = this.altura.toFixed(2)
        } else {
            this.idade++
        }
    },

    // Método de envelhecer mais de 1 ano
    envelhecerAnos: function(anos = 1){
        for (let i = 0; i < anos; i++){
            if (this.idade < 21){
                this.idade++
                this.altura += 0.05

            } else {
                this.idade++
            }
        }
    },

    engordar: function(peso = 1){
        // this.peso = this.peso + peso;
        
        // Outra forma, mesmo resultado:
        this.peso += peso
    },

    emagrecer: function(peso = 1){
        this.peso -= peso
    },

    crescer: function(){
        this.altura++
    },

    bio: function(){
        return `
        Dados de ${this.nome}:
        Altura: ${this.altura.toFixed(2)}
        Peso: ${this.peso}
        Idade: ${this.idade}
        `
    }
};

console.log(pessoa.bio());
console.log();



// let quilos = +prompt('Quantos quilos a pessoa vai engordar? ')
// pessoa.engordar(quilos);

let anos = +prompt('Quantos anos a pessoa vai envelhecer? ')
pessoa.envelhecerAnos(anos);
console.log();

console.log(pessoa.bio())
