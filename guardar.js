console.log(`     DIA 0${valores.dias} - PÓS JOGO
QUE JOGO NA SEMI-FINAL. CLASSIFICADOS!
DERROTAMOS A ARGENTINA NO SUPER CLÁSSICO. 
    2x1 DE VIRADA! ESTAMOS NA FINAL!
   E VOCÊ COMO CAPITÃO, DEVE AUXILIAR 
   O TÉCNICO, NAS PROXIMAS DECISÕES...\n`);

    console.log(`Dia       : ${valores.dias}/4
Energia   : ${valores.energia}/100
Tecnica   : ${valores.tecnica}/100
Confiança : ${valores.confianca}/100`);

    console.log(`QUAL O PROXIMO PASSO DA 
SELEÇÃO BRASILEIRA DE FUTEBOL? 
\n[A] COMEMORAR CLASSIFICAÇÃO
[B] DESCANSAR
[C] TREINO LEVE`);

let terceiraEscolha1 = prompt().toUpperCase()
while (terceiraEscolha1 != 'A' && terceiraEscolha1 != 'B'){
    console.log('\nDigite uma opção válida:"');
    console.log('[A] COMEMORAR CLASSIFICAÇÃO [B]DESCANSAR [C]TREINO LEVE');
    terceiraEscolha1 = prompt().toUpperCase()
}

if (terceiraEscolha1 = 'A'){
    console.log(`[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO 
    [B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES`);
    let terceiraEscolha2 = prompt().toUpperCase
    if (terceiraEscolha2 == 'A'){
        console.log('BOA ESCOLHA! NÃO EXAGERE, TEMOS A FINAL AMANHÃ.');
        valores.energia -= 10 ; valores.confianca +=0  ; valores.periodos ++
    }else{
        console.log('PÉSSIMA ESCOLHA! COMO VAMOS JOGAR AMANHÃ BÊBADOS?');
        valores.energia -= 10 ; valores.tecnica -=100 ; valores.periodos ++
    }
    
}else if(terceiraEscolha1 == 'B'){
    console.log('\nÓTIMA ESCOLHA!\nDEPOIS DE UMA GRANDE VITÓRIA A SELEÇÃO BRASILEIRA MERECE UM DESCANSO.');
    valores.energia += 40 ; valores.tecnica -= 10 ; valores.confianca -=10 ; valores.periodos ++
}else if(terceiraEscolha1 == 'C'){
    console.log('\nBOA ESCOLHA!\n VAMOS FAZER UM TREINO REGENERATIVO.');
    valores.energia -= 10 ; valores.confianca +=0  ; valores.periodos ++ 
}

if (valores.tecnica <= 0){
console.log(`Dia       : ${valores.dias}/4
Energia   : ${valores.energia}/100
Tecnica   : ${valores.tecnica}/100
Confiança : ${valores.confianca}/100`);
final2()
break
}

console.log('[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n[B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES');
        let terceiraEscolha2 = prompt().toUpperCase()
        while(terceiraEscolha2 != 'A' && terceiraEscolha2 != 'B'){
            console.log('\nDigite uma opção válida:"');
            console.log('[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n[B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES');
            terceiraEscolha2 = prompt().toUpperCase()
        }if (terceiraEscolha2 == 'A'){
            console.log('BOA ESCOLHA! NÃO EXAGERE, TEMOS A FINAL AMANHÃ.');
            valores.energia -= 10 ; valores.confianca +=0  ; valores.periodos ++
        }else{
            console.log('PÉSSIMA ESCOLHA! COMO VAMOS JOGAR AMANHÃ BÊBADOS?');
            valores.energia -= 10 ; valores.tecnica -=100 ; valores.periodos ++
        }


        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO
    É CAAAAAAAAAAAAAAMPEÃOOOOOOOOOOOO!!!!!!
    A SELEÇÃO BRASILEIRA É CAMPEÃ DO MUNDO!
    BRASIL 2 x 0 FRANÇA, COM GOL DE NEYMAR!

    O BRASIL É HEXA CAMPEÃO MUNDIAL!
    PARABÉNS NEYMAR, PARABÉNS BRASIL
    MAS E AGORA? QUAL O PROXIMO PASSO?

    PRECIONE ENTER PARA CONTINUAR:`);
    prompt()



