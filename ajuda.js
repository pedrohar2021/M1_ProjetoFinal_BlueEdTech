console.clear();
const prompt = require('prompt-sync')();

let personagem = {
    horas:0,
    dias:1
}

let pergunta1 = prompt('voce acordou ?')
let pergunta2 = prompt('voce almoçou ?')
let pergunta3 = prompt('voce estudou?')
let pergunta4 = prompt('voce jantou?')
let pergunta5 = prompt('voce dormiu ?')




if (pergunta1 == 'sim'){
    this.horas = 8 
    console.log(`voce acordou e sao ${this.horas}horas  do ${personagem.dias}º dia`)
}

if (pergunta2 == 'sim'){
    this.horas = 12 
    console.log(`voce almoçou e sao ${this.horas}horas do ${personagem.dias}º dia`)
   
}


if (pergunta3 == 'sim'){
    this.horas = 16 
    console.log(`voce estudou e sao ${this.horas} horas do ${personagem.dias}º dia`)
}

if (pergunta4 == 'sim'){
    this.horas = 20 
    console.log(`voce jantou e sao ${this.horas} horas do ${personagem.dias}º dia`)
}


if (pergunta5 == 'sim'){
    this.horas = 23
    personagem.dias += 1
    console.log(`otima hora pra dormir, sao ${this.horas} horas e amanha será o ${personagem.dias}º dia`)
}

