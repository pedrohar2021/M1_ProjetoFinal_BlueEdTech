console.clear();
const prompt = require('prompt-sync')();

// PROJETO CONTÉM: VARIÁVEIS, IF/ELSEIF/ELSE, WHILE, FOR, ARRAY, OBJETO, FUNÇÃO.

let continuar2 = 'S'
while (continuar2 == 'S'){
    
    let continuar = 'S'
    while(continuar = 'S'){                                                                                                        
        
        let valores = { energia:50, tecnica:50, confianca:50, dias: 1, fases:1, horas:12}                                           
        
        let listaPremios = []
        
        function eventoZero() {
        let computador = Math.floor(Math.random() * 3)
        if (computador == 1){
            console.log('ATENÇÃO! NEYMAR MACHUCOU NO TREINO!');
            valores.confianca -= 150
        
        }   
        }
    
        function dia() {
        valores.dias ++;
        console.log (`VAMOS PARA O ${valores.dias}º DIA.`);
        } 
        
        function fase() {
        valores.fases ++;
        }
        
        function final1 () {
        console.log('\nVOCÊ PERDEU! FICOU SEM ENERGIA.\nNÃO CONSEGUIMOS JOGAR MAIS.\nPERDEMOS!')
        return(true)
        }  
        
        
        function final2 () {
        console.log('\nVOCÊ PERDEU! COMEMOROU DEMAIS E PERDEU A TÉCNICA!\nNÃO CONSEGUIMOS JOGAR MAIS\nPERDEMOS!')
        return true;
        }
        
        function final3 () {
        console.log('\nVOCÊ PERDEU! SE ESFORÇOU DEMAIS!\nACABOU SOFRENDO UMA LESÃO, ESTÁ FORA DA COPA!\nPERDEMOS!');
        return true;
        }


        function inicioGame(){
        console.log('-----------------------------------');
        console.log('<- PROJETO 3 - FICÇÃO INTERATIVA ->');
        console.log('-----------------------------------');
        console.log(' NEYMAR E A GRANDE COPA DO MUNDO! ');
        console.log('-----------------------------------');


        console.log(`  HOJE, VOCÊ É O GRANDE JOGADOR DE 
            FUTEBOL NEYMAR JR.
        \n  SEU OBJETIVO É AJUDAR A SUA 
        SELEÇÃO A GANHAR A COPA DO MUNDO!
        -----------------------------------
        \nO BRASIL ACABA DE PASSAR PELAS
        QUARTAS DE FINAIS, FALTAM 2 JOGOS 
        PARA SER CAMPEÕES DO MUNDO!`);}
        inicioGame()

        function primeiraFase(){
        console.log(`\n   FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO`) 

        console.log(`        QUARTAS DE FINAL\n  
        ACABAMOS DE DERROTAR A BÉLGICA,
        UMA VITÓRIA POR 3x0, E VOCÊ COMO
        CAPITÃO, DEVE AUXILIAR O TÉCNICO,
        NAS PROXIMAS DECISÕES.... 
        -----------------------------------`);
        let premio1 = ' - SELEÇÃO DA COPA DO MUNDO'
        listaPremios.push(premio1)

        console.log(`
        Energia   : ${valores.energia}/100
        Tecnica   : ${valores.tecnica}/100
        Confiança : ${valores.confianca}/100

        QUAL O PROXIMO PASSO DA 
        SELEÇÃO BRASILEIRA DE FUTEBOL? 
        
        [A] DESCANSAR
        [B] TREINAR\n`);
        let primeiraEscolha1 = prompt('QUAL SUA ESCOLHA: ').toUpperCase()
        while (primeiraEscolha1 != "A" && primeiraEscolha1 != "B") {
        console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
        console.log ('\n[A] DESCANSAR \n[B] TREINAR\n');
        primeiraEscolha1 = prompt('QUAL SUA ESCOLHA: ').toUpperCase();
        }
        if(primeiraEscolha1 == 'A'){
            console.log('\nÓTIMA ESCOLHA!\nDEPOIS DE UMA GRANDE VITÓRIA A SELEÇÃO \nBRASILEIRA MERECE UM DESCANSO.');
            valores.energia += 10 ; valores.tecnica += 10 ; valores.confianca += 10
        } else if (primeiraEscolha1 == 'B'){
            console.log(`\n<--------- TREINO ---------->
            \n[A] TREINAR NA ACADEMIA\n[B] TREINAR COM BOLA\n`);
            let primeiraEscolha2 = prompt('QUAL SUA ESCOLHA: ').toUpperCase()
            while (primeiraEscolha2 != "A" && primeiraEscolha2 != "B") {
            console.log("\nDigite uma opção válida:");
            console.log ('\n[A] TREINAR NA ACADEMIA \n[B] TREINAR COM BOLA`)\n');
            primeiraEscolha2 = prompt('QUAL SUA ESCOLHA: ').toUpperCase();
            }
            if (primeiraEscolha2 == 'A' ){
            console.log('\nBOA ESCOLHA. \nA SELEÇÃO FARÁ UM TREINO REGENERATIVO.');
            valores.energia -=10 ;  valores.tecnica += 10 ; valores.confianca += 10
            }else{
            console.log('\nNÃO FOI UMA BOA ESCOLHA.\nA SELEÇÃO MERECIA UM DESCANÇO.');
            valores.energia -=20 ; valores.tecnica += 10 ; valores.confianca += 10
            }
        }
        }
        primeiraFase()

        console.log('\n<- DIA 01 ENCERRADO - PRESS ENTER CONTINUE ->');
        prompt()
        dia()
        fase()
        console.clear();
    
        function segundaFase(){
        console.log(`   FASE 0${valores.fases} / DIA 0${valores.dias} - PRÉ JOGO`)
        console.log(`
        SEMI-FINAL - HOJE A SELEÇÃO BRASILEIRA
            IRÁ ENFRENTAR A ARGENTINA! 
        --------------------------------------

        Energia   : ${valores.energia}/100
        Tecnica   : ${valores.tecnica}/100
        Confiança : ${valores.confianca}/100
        
            QUAL O PROXIMO PASSO DA 
            SELEÇÃO ANTES DO JOGO?

        [A] TREINAR 
        [B] DIRETO PRO JOGO\n`);
        let segundaEscolha1 = prompt().toUpperCase()
        while (segundaEscolha1 != "A" && segundaEscolha1 != "B") {
        console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
        console.log ('\n[A] TREINAR \n[B] DIRETO PRO JOGO`)\n');
        segundaEscolha1 = prompt().toUpperCase(); 
        }
        if (segundaEscolha1 == 'A'){
        console.log(`
        <--------- TREINO ---------->
        [A] TREINAR NO CAMPO
        [B] TREINAR LEVE NA PISCINA`); 
            let segundaEscolha2 = prompt().toUpperCase()
            while (segundaEscolha2 != "A" && segundaEscolha2 != "B") {
            console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
            console.log ('\n[A] TREINAR NA ACADEMIA \n[B] TREINAR NA PISCINA`)\n');
            segundaEscolha2 = prompt().toUpperCase();
            }
            if(segundaEscolha2 = 'A' && valores.energia <=31){
            console.log('NÃO FOI UMA BOA ESCOLHA, JÁ TREINAMOS ONTEM!');
            valores.energia -= 31 ;  valores.tecnica += 10 ; 
            }else if (segundaEscolha2 = 'A'){
            console.log('BOA ESCOLHA. VAMOS FAZER UM TREINO MUSCULAR E ATIVIDADE COM BOLA.');
            valores.tecnica += 10 ; 
            }else if (segundaEscolha2 = 'B'){
            console.log('ÓTIMA ESCOLHA. VAMOS FAZER UM TREINO LEVE ANTES DO JOGO.');
            valores.tecnica += 10 ; 
            }
        }else if (segundaEscolha1 = 'B'){
        console.log(`
        <-------------- VAMOS PRO JOGO ---------------->
        [A] FAZER AQUECIMENTO/ALONGAMENTO.
        [B] FAZER AQUECIMMENTO/ALONGAMENTO E PRÉ-ELEÇÃO.`);
            let segundaEscolha3 = prompt().toUpperCase()
            while (segundaEscolha3 != "A" && segundaEscolha3 != "B") {
            console.log("\nDigite uma opção válida:");
            console.log ('\n[A] FAZER AQUECIMENTO/ALONGAMENTO \n[B] FAZER AQUECIMMENTO/ALONGAMENTO E PRÉ-ELEÇÃO.`)\n');
            segundaEscolha3 = prompt().toUpperCase()
            }
            if (segundaEscolha3 = 'A'){
            console.log('BOA ESCOLHA. VAMOS AQUECER E IR PRO JOGO!');
            valores.tecnica += 10 ; 
            }else{
            console.log('ÓTIMA ESCOLHA! DEPOIS DO AQUECIMENTO, UMA PRÉ-ELEÇÃO E VAMOS PRO JOGO!');
            valores.tecnica += 10 ; 
            }
        }
        }
        segundaFase()

        if(valores.energia <= 0){
        final1() 
        jogarNovaemente()
        break
        }
      
        console.log('PRECIONE ENTER PARA IR PARA A SEMI-FINAL.');
        prompt()
        fase()
        
        function terceiraFase(){
        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO
        QUE JOGO NA SEMI-FINAL. CLASSIFICADOS!
        DERROTAMOS A ARGENTINA NO SUPER CLÁSSICO. 
            2x1 DE VIRADA! ESTAMOS NA FINAL!
        E VOCÊ COMO CAPITÃO, DEVE AUXILIAR 
        O TÉCNICO, NAS PROXIMAS DECISÕES...
        QUAL O PROXIMO PASSO?`);
        let premio2 = ' - ARTILHEIRO DA COPA DO MUNDO'
        listaPremios.push(premio2)
        
        console.log(`Dia       : ${valores.dias}/4
        Energia   : ${valores.energia}/100
        Tecnica   : ${valores.tecnica}/100
        Confiança : ${valores.confianca}/100`);

        console.log('[A] DESCANSAR \n[B]TREINO LEVE \n[C]COMEMORAR CLASSIFICAÇÃO');
        let terceiraEscolha1 = prompt().toUpperCase()
        
        while (terceiraEscolha1 != 'A' && terceiraEscolha1 != 'B' && terceiraEscolha1 != 'C'){
        console.log('\nDigite uma opção válida:"');
        console.log('[A] DESCANSAR \n[B]TREINO LEVE \n[C]COMEMORAR CLASSIFICAÇÃO');
        terceiraEscolha1 = prompt().toUpperCase()
        }
        if (terceiraEscolha1 == 'A'){
        console.log('\nÓTIMA ESCOLHA!\nDEPOIS DE UMA GRANDE VITÓRIA A SELEÇÃO BRASILEIRA MERECE UM DESCANSO.');
        valores.energia += 10; valores.tecnica += 10 ; valores.confianca += 10
        }
        
        else if(terceiraEscolha1 == 'B'){
        console.log('\nBOA ESCOLHA!\n VAMOS FAZER UM TREINO REGENERATIVO.');
        valores.energia += 5; valores.tecnica += 10 ; valores.confianca += 10
        }
        
        else if(terceiraEscolha1 == 'C'){
        console.log('[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n[B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES');
        let terceiraEscolha2 = prompt().toUpperCase()
        while(terceiraEscolha2 != 'A' && terceiraEscolha2 != 'B'){
        console.log('\nDigite uma opção válida:"');
        console.log('[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n[B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES');
        terceiraEscolha2 = prompt().toUpperCase()
            }if (terceiraEscolha2 == 'A'){
            console.log('BOA ESCOLHA! NÃO EXAGERE, TEMOS A FINAL AMANHÃ.');
        valores.energia -= 20; valores.tecnica += 0 ; valores.confianca += 10
            }else if (terceiraEscolha2 == 'B'){
            console.log('PÉSSIMA ESCOLHA! COMO VAMOS JOGAR AMANHÃ BÊBADOS?');
            valores.energia += 10; valores.tecnica -= 100 ; valores.confianca += 10
            }
        }
        }
        terceiraFase()

        if (valores.tecnica <= 0){
        final2()
        jogarNovaemente()
        break
        }
        

        console.log('<- DIA 02 ENCERRADO - PRESS ENTER CONTINUE ->');
        prompt()
        dia()
        fase()
        console.clear();
        console.log('----------------------------------');

        valores.energia += 20
        valores.confianca += 20
        valores.tecnica += 10

        function quartaFase(){
        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - PRÉ JOGO
        CHEGAMOS A GRANDE FINAL !!
        HOJE É O DIA DE SABER QUEM VAI
        SER A SELEÇÃO CAMPÊA DO MUNDO.
        
        IREMOS ENFRENTAR A ATUAL VENCEDORA,
        A SELEÇÃO FRANCESA DE FUTEBOL!
        
        E VOCE COMO CAPITÃO DA EQUIPE, DEVE
        AJUDAR A SELECIONAR OS PROXIMOS PASSOS...
        
        PRECIONE ENTER PARA CONTINUAR:`)
        prompt()
        
        console.log(`QUAL DEVE SER O PROXIMO PASSO?
        Energia   : ${valores.energia}/100
        Tecnica   : ${valores.tecnica}/100
        Confiança : ${valores.confianca}/100`);

        console.log('\n[A]TREINAMENTO LEVE  \n[B]TREINAMENTO PESADO');
        let quartaEscolha1 = prompt().toUpperCase()
        while(quartaEscolha1 != 'A' && quartaEscolha1 != 'B'){
        console.log('Digite uma opção valida!');
        console.log('[A]TREINAMENTO LEVE \n[B]TREINAMENTO PESADO');
        quartaEscolha1 = prompt().toUpperCase()
        }
        if (quartaEscolha1 == 'A'){
        console.log('TREINAMENTO TRANQUILO, PARA IRMOS COM TUDO PRA ESSA FINAL!');
        valores.energia += 10; valores.tecnica += 10 ; valores.confianca += 10
        }else if(quartaEscolha1 == 'B'){
        console.log('TREINAMENTO FORTE, PARA IRMOS COM TUDO PRA ESSA FINAL');
        valores.energia -= 10; valores.tecnica += 10 ; valores.confianca += 10
        eventoZero()
        }
        }
        quartaFase()

        if(valores.confianca <= 0){
        final3() 
        jogarNovaemente()
        break
        }




        fase()
        console.log('PRESS ENTER PARA IR PARA A FINAL!');
        prompt()

        function quintaFase(){
        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO
        É CAAAAAAAAAAAAAAMPEÃOOOOOOOOOOOO!!!!!!
        A SELEÇÃO BRASILEIRA É CAMPEÃ DO MUNDO!
        BRASIL 2 x 0 FRANÇA, COM GOL DE NEYMAR!

        O BRASIL É HEXA CAMPEÃO MUNDIAL!
        MAS E AGORA? QUAL O PROXIMO PASSO?

        PRECIONE ENTER PARA CONTINUAR:`);
        prompt()
        let premio3 = ' - MELHOR JOGADOR DA COPA DO MUNDO'
        listaPremios.push(premio3)

        console.log(`AONDE VAI SER A COMEMORAÇÃO DO TÍTULO?
        
        [1]FESTA NO ESTADIO/HOTEL
        [2]FESTA NO ESTADIO/RUAS DO CATHAR`);
        let quintaPergunta1 = prompt()
        while(quintaPergunta1 != "1" && quintaPergunta1 != "2"){
        console.log('Digite uma opção válida:');
        console.log('[1]FESTA NO ESTADIO/HOTEL\n[2]FESTA NO ESTADIO/RUAS DO CATHAR');
        quintaPergunta1 = prompt()
        }
        if (quintaPergunta1 == '1'){
        console.log('BOA ESCOLHA NEY! VAMOS COMEMORAR NO ESTÁDIO E DEPOIS FAZER UMA GRANDE FESTA NO HOTEL!');
        }else if (quintaPergunta1 == '2'){
        console.log('[A]CARRO DOS BOMBEIROS NA COMEMORAÇÃO [B]TRIO ELÉTRICO NA COMEMORAÇÃO');
        let quintaPergunta2 = prompt().toUpperCase()
        while(quintaPergunta2 != 'A' && quintaPergunta2 != 'B'){
        console.log('Digite uma opção válida:');
        console.log('[A]CARRO DOS BOMBEIROS NA COMEMORAÇÃO [B]TRIO ELÉTRICO NA COMEMORAÇÃO');
        quintaPergunta2 = prompt().toUpperCase()
        }
            if(quintaPergunta2 == 'A'){
            console.log('ÓTIMA ESCOLHA NEY! DEPOIS DO ESTÁDIO VAMOS SAIR NO CARRO DE BOMBEIRO PELAS RUAS DO CATHAR');
            }else if(quintaPergunta2 == 'B'){
            console.log('ÓTIMA ESCOLHA NEY! DEPOIS DO ESTÁDIO VAMOS SAIR DE TRIO ELÉTRICO PELAS RUAS DO CATHAR');
            }
        }

        console.log('QUE FESTA MARAVILHOSA FAZ A TORCIDA DO BRASIL! BRASIL HEXA CAMPEÃO DO MUNDO!\nVAI SER DIFÍCIL DORMIR NAS RUAS HOJE...');
        }
        quintaFase()
    

        console.log('<- DIA 03 ENCERRADO - PRESS ENTER CONTINUE ->');
        prompt()
        dia()
        fase()
        console.clear();

        function sextaFase(){
        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - CÊRIMONIA DE PREMIAÇÃO
        
        SEJAM BEM VINDOS A GRANDE CÊRIMONIA DE PREMIAÇÃO!
        HOJE VAMOS VER OS PRÊMIOS INDIVIDUAIS DE CADA ATLETA
        
        NEYMAR VOCÊ GANHOU OS SEGUINTES PRÊMIOS:
        
        PRECIONE ENTER PARA VISUALIZAR.`)

        prompt()

        for(let premios = 0 ; premios < listaPremios.length ; premios ++){
        console.log(`${premios+1}º PRÊMIO - ${listaPremios[premios]}`);
        }
        }
        sextaFase()


        fase()


        function setimaFase(){
        console.log(`FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS CÊRIMONIA DE PREMIAÇÃO
        QUE FESTA MARAVILHOSA FEZ A TORCIDA DO BRASIL!
        AGORA É HORA DE DECIDIR O SEU DESTINO NEYMAR...

        PRECIONE ENTER PARA CONTINUAR:`);
        prompt()

        console.log(`QUAL DEVE SER O PROXIMO PASSO?
        Dia       : ${valores.dias}/4
        Energia   : ${valores.energia}/100
        Tecnica   : ${valores.tecnica}/100
        Confiança : ${valores.confianca}/100
        
        [1] VOLTAR PRO BRASIL
        [2] VOLTAR PRA FRANÇA`);

        let sextaPergunta1 = prompt().toUpperCase()
        while(sextaPergunta1 != "1" && sextaPergunta1 != "2"){
        console.log('Digite uma opção válida:');
        console.log('[1] VOLTAR PRO BRASIL \n[2] VOLTAR PRA FRANÇA');
        sextaPergunta1 = prompt().toUpperCase()
        } 
        if (sextaPergunta1 == '1'){
        console.log('<<-- DE VOLTA PRO BRASIL ->>\n[1]COMEMORAR COM A FAMILIA\n[2]COMEMORAR COM A FAMILIA E AMIGOS\n[3]FAZER GRANDE FESTA PADRÃO NEYMAR');
        let sextaPergunta2 = prompt().toUpperCase()
        while(sextaPergunta2 != '1' && sextaPergunta2 != '2' && sextaPergunta2 != '3'){
        console.log('Digite uma opção válida:');
        console.log('[1]COMEMORAR COM A FAMILIA\n[2]COMEMORAR COM A FAMILIA E AMIGOS\n[3]FAZER GRANDE FESTA PADRÃO NEYMAR');
        sextaPergunta2 = prompt().toUpperCase()
        }
            if (sextaPergunta2 == '1'){
            console.log('BOA ESCOLHA NEYMAR! VAMOS DESCANSAR E COMEMORAR COM A FAMÍLIA.\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
            }else if( sextaPergunta2 == '2'){
            console.log('BOA ESCOLHA NEYMAR! VAMOS COMEMORAR COM A FAMILIA E OS PARÇAS.\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');      
            }else if( sextaPergunta2 == '3'){
            console.log('ÓTIMA ESCOLHA NEYMAR! VAMOS FAZER UMA GRANDE FESTA EM SUA ILHA!\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
            }
        }else if(sextaPergunta1 == '2'){
        console.log('<<-- DE VOLTA PRA FRANÇA ->>\n[1]FERIAS COM A FAMILIA \n[2] REEAPRESENTAR NO PARIS SAINT GERMAIN');
        let sextaPergunta3 = prompt().toUpperCase()
        while (sextaPergunta3 != '1' && sextaPergunta3 != '2'){
        console.log('Digite uma opção válida:');
        console.log('[1]FERIAS COM A FAMILIA \n[2] REEAPRESENTAR NO PARIS SAINT GERMAIN');
        sextaPergunta3 = prompt().toUpperCase
        }
            if (sextaPergunta3 == '1'){
            console.log('BOA ESCOLHA NEYMAR! DEPOIS DE GANHAR UMA COPA DO MUNDO, VOCÊ MERECE UM DESCANSO!\nPARABÉNS BRASIL! PARABÉNS NEYMAR! ');
            }else if(sextaPergunta3 = '2'){
            console.log('ÓTIMA ESCOLHA NEYMAR! VAMOS COM TUDO TENTAR O TITULO DA CHAMPIONS LEAGUE!\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
            }
        }
        }
        setimaFase()
     
        console.log('<- JOGO ENCERRADO - PRESS ENTER CONTINUE ->');
        prompt()
        console.clear();
        
        function jogarNovaemente(){
        continuar = prompt('DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase()
        while(continuar != 'S' && continuar != 'N'){
        continuar = prompt('DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase() 
        }
        console.clear();
        }
        jogarNovaemente()
    }

    function jogarNovamenteConfirmacao(){
    continuar2 = prompt('CONFIRMAÇÃO - DESEJA JOGAR NOVAMENTE? [S/N]: ').toUpperCase()
    while(continuar2 != 'S' && continuar2 != 'N'){
    console.log('DIGITE UMA OPÇÃO VÁLIDA.');
    continuar2 = prompt('CONFIRMAÇÃO - DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase() 
    }
    }
    jogarNovamenteConfirmacao()


}
console.log('JOGO ENCERRADO.');