console.clear();
const prompt = require('prompt-sync')();

let listaPremios = []

let premio1 = ' - SELEÇÃO DA COPA DO MUNDO'
listaPremios.push(premio1)
let premio2 = ' - ARTILHEIRO DA COPA DO MUNDO'
listaPremios.push(premio2)
let premio3 = ' - MELHOR JOGADOR DA COPA DO MUNDO'
listaPremios.push(premio3)
for (let i = 0 ; i < listaPremios.length; i++){
console.log(`${i+1}º PREMIO - ${listaPremios[i]}`);
}