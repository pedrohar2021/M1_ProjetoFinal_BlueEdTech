console.clear();
const prompt = require('prompt-sync')();

// PROJETO CONTÉM: VARIÁVEIS, IF/ELSEIF/ELSE, WHILE, FOR, ARRAY, OBJETO, FUNÇÃO.
    
    let valores = {
    energia:50,
    tecnica:50, 
    confianca:50, 
    dias: 1, 
    fases:1, 
    horas:18
    }
    
    
    function horaMenos(){
    valores.horas -= 6
    }
    
    function horaMais(){
    valores.horas += 6
    }
    
    function fase() {
    valores.fases ++;
    }

    function dia() {
    valores.dias ++;
    } 
    
    function final1 () {
    console.log('\nVOCÊ PERDEU! FICOU SEM ENERGIA.\nNÃO CONSEGUIMOS JOGAR MAIS.\nPERDEMOS!')
    }  
    
    function final2 () {
    console.log('\nVOCÊ PERDEU! COMEMOROU DEMAIS E PERDEU A TÉCNICA!\nNÃO CONSEGUIMOS JOGAR MAIS\nPERDEMOS!')
    }
    
    function final3 () {
    console.log('\nVOCÊ PERDEU! SE ESFORÇOU DEMAIS!\nACABOU SOFRENDO UMA LESÃO, ESTÁ FORA DA COPA!\nPERDEMOS!');
    }
    
    function eventoZero() {
    let computador = Math.floor(Math.random() * 3)
    if (computador == 2){
        console.log('ATENÇÃO! NEYMAR MACHUCOU NO TREINO!');
        valores.confianca -= 150
    } 
    }
    
    function campeaoStatus(){
        valores.energia = 100
        valores.confianca = 100
        valores.tecnica = 100
    }

    function meuStatus(){
        console.log(`
                Energia   : ${valores.energia}/100
                Tecnica   : ${valores.tecnica}/100
                Confiança : ${valores.confianca}/100`);
    }

    // function meusPremios(){
    //     for (let i = 0 ; i < listaPremios.length; i++){
    //     console.log(`${i+1}º PREMIO - ${listaPremios[i]}`);
    //     }
    // }

    function inicioGame(){
    console.log('--------------------------------------------------------------');
    console.log('<-            PROJETO 3 - FICÇÃO INTERATIVA                 ->');
    console.log('--------------------------------------------------------------');
    console.log('             NEYMAR E A GRANDE COPA DO MUNDO!                 ');
    console.log('--------------------------------------------------------------');


    console.log(`      HOJE, VOCÊ É O GRANDE JOGADOR DE FUTEBOL NEYMAR JR.
SEU OBJETIVO É AJUDAR A SUA SELEÇÃO A GANHAR A COPA DO MUNDO!
--------------------------------------------------------------
 O BRASIL ACABA DE PASSAR PELAS QUARTAS DE FINAIS,
   FALTAM 2 JOGOS PARA SER CAMPEÕES DO MUNDO!
--------------------------------------------------------------`);}
    function primeiraFase(){
    console.log(`              FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO / ${valores.horas}:00HRS

ACABAMOS DE DERROTAR A BÉLGICA, UMA VITÓRIA POR 3x0 (COM UM
GOL E UMA ASSISTENCIA DE NEYMAR), E VOCÊ COMO CAPITÃO, DEVE 
    AUXILIAR O TÉCNICO, NAS PROXIMAS DECISÕES... 

:: Neste jogo Neymar ganhou uma premiação individual ::\n
--------------------------------------------------------------\n
            Atual Status do Personagem:\n`);

    meuStatus()

    console.log(`
QUAL O PROXIMO PASSO DA SELEÇÃO BRASILEIRA DE FUTEBOL? 
    
                   [A] DESCANSAR
                    [B] TREINAR\n`);
    let primeiraEscolha1 = prompt('                 QUAL SUA ESCOLHA: ').toUpperCase()
    while (primeiraEscolha1 != "A" && primeiraEscolha1 != "B") {
    console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
    console.log ('\n[A] DESCANSAR \n[B]  TREINAR\n');
    primeiraEscolha1 = prompt('                QUAL SUA ESCOLHA: ').toUpperCase();
    }
    if(primeiraEscolha1 == 'A'){
        console.log('\n         ÓTIMA ESCOLHA! DEPOIS DE UMA GRANDE VITÓRIA\n         A SELEÇÃO BRASILEIRA MERECE UM DESCANSO.');
        valores.energia += 10 ; valores.tecnica += 10 ; valores.confianca += 10
    } else if (primeiraEscolha1 == 'B'){
        console.log(`\n                   [A] TREINAR NA ACADEMIA\n                   [B] TREINAR COM BOLA\n`);
        let primeiraEscolha2 = prompt('                     QUAL SUA ESCOLHA: ').toUpperCase()
        while (primeiraEscolha2 != "A" && primeiraEscolha2 != "B") {
        console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
        console.log ('\n[A] TREINAR NA ACADEMIA \n[B] TREINAR COM BOLA`)\n');
        primeiraEscolha2 = prompt('QUAL SUA ESCOLHA: ').toUpperCase();
        }
        if (primeiraEscolha2 == 'A' ){
        console.log('\n   BOA ESCOLHA! A SELEÇÃO FARÁ UM TREINO REGENERATIVO.');
        valores.energia -=10 ;  valores.tecnica += 10 ; valores.confianca += 10
        }else{
        console.log('\n   NÃO FOI UMA BOA ESCOLHA! A SELEÇÃO MERECIA UM DESCANÇO.');
        valores.energia -=20 ; valores.tecnica += 10 ; valores.confianca += 10
        }
    }
    }

    function segundaFase(){
        console.log('\n--------------------------------------------------------------');
        console.log(`\n            FASE 0${valores.fases} / DIA 0${valores.dias} - PRÉ JOGO / ${valores.horas}:00hrs

                SEMI-FINAL - DIA DE DECISÃO
    HOJE A SELEÇÃO BRASILEIRA IRÁ ENFRENTAR A ARGENTINA! 
UM SUPER CLÁSSICO SUL-AMERICANO NAS SEMIS DO MUNDIAL. E VOCÊ
COMO CAPITÃO, DEVE AUXILIAR O TÉCNICO, NAS PROXIMAS DECISÕES:\n 
--------------------------------------------------------------\n
                Atual Status do Personagem:`)
        
        meuStatus()
        
        console.log(`
  QUAL O PROXIMO PASSO DA SELEÇÃO BRASILEIRA ANTES DO JOGO?

                        [A] TREINAR 
                    [B] DIRETO PRO JOGO\n`);
        let segundaEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while (segundaEscolha1 != "A" && segundaEscolha1 != "B") {
        console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
        console.log ('\n[A] TREINAR \n[B] DIRETO PRO JOGO\n');
        segundaEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase(); 
        }
        if (segundaEscolha1 == 'A'){
        console.log(`\n
                    [A] TREINO NO CAMPO
                      [B] TREINO LEVE\n`); 
            let segundaEscolha2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
            while (segundaEscolha2 != "A" && segundaEscolha2 != "B") {
            console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
            console.log ('\n[A] TREINAR NA ACADEMIA \n[B] TREINAR NA PISCINA`)\n');
            segundaEscolha2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase();
            }
            if(segundaEscolha2 = 'A' && valores.energia <=31){
            console.log('\n      NÃO FOI UMA BOA ESCOLHA, JÁ TREINAMOS ONTEM!');
            valores.energia -= 31 ;  valores.tecnica += 10 ; 
            }else if (segundaEscolha2 = 'A'){
            console.log('\nBOA ESCOLHA. VAMOS FAZER UM TREINO MUSCULAR E ATIVIDADE COM BOLA.');
            valores.tecnica += 10 ; 
            }else if (segundaEscolha2 = 'B'){
            console.log('\nÓTIMA ESCOLHA. VAMOS FAZER UM TREINO LEVE ANTES DO JOGO.');
            valores.tecnica += 10 ; 
            }
        }else if (segundaEscolha1 = 'B'){
        console.log(`
        [A] FAZER AQUECIMENTO/ALONGAMENTO.
        [B] FAZER AQUECIMMENTO/ALONGAMENTO E PRÉ-ELEÇÃO.\n`);
            let segundaEscolha3 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
            while (segundaEscolha3 != "A" && segundaEscolha3 != "B") {
            console.log("\nDIGITE UMA OPÇÃO VÁLIDA:");
            console.log ('\n[A] FAZER AQUECIMENTO/ALONGAMENTO \n[B] FAZER AQUECIMMENTO/ALONGAMENTO E PRÉ-ELEÇÃO.`)\n');
            segundaEscolha3 = prompt('                     QUAL SUA ESCOLHA: ').toUpperCase()
            }
            if (segundaEscolha3 = 'A'){
            console.log('\n          BOA ESCOLHA. VAMOS AQUECER E IR PRO JOGO!');
            valores.tecnica += 10 ; 
            }else{
            console.log('\nÓTIMA ESCOLHA! DEPOIS DO AQUECIMENTO, UMA PRÉ-ELEÇÃO E VAMOS PRO JOGO!');
            valores.tecnica += 10 ; 
            }
        }
        }

    function terceiraFase(){
        console.log('\n--------------------------------------------------------------');
        console.log(`\n            FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO / ${valores.horas}:00hrs
    
QUE JOGO NA SEMI-FINAL. CLASSIFICADOS! DERROTAMOS A ARGENTINA
NO SUPER CLÁSSICO. 2x1 DE VIRADA! ESTAMOS NA FINAL! E VOCÊ
COMO CAPITÃO, DEVE AUXILIAR O TÉCNICO, NAS PROXIMAS DECISÕES:
    
    :: Neste jogo Neymar ganhou uma premiação individual ::
--------------------------------------------------------------
    
                Atual Status do Personagem:\n`);
            
        meuStatus()
    
        console.log(`\nQUAL O PROXIMO PASSO DA SELEÇÃO BRASILEIRA?
    
                    [A] DESCANSAR 
                    [B] TREINO LEVE 
                    [C] COMEMORAR CLASSIFICAÇÃO\n`);
        let terceiraEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while (terceiraEscolha1 != 'A' && terceiraEscolha1 != 'B' && terceiraEscolha1 != 'C'){
        console.log('\nDIGITE UMA OPÇÃO VÁLIDA:"');
        console.log('[A] DESCANSAR \n[B] TREINO LEVE \n[C] COMEMORAR CLASSIFICAÇÃO')
        terceiraEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        }
        if (terceiraEscolha1 == 'A'){
        console.log('\nÓTIMA ESCOLHA! DEPOIS DE UMA GRANDE VITÓRIA A SELEÇÃO \n           BRASILEIRA MERECE UM DESCANSO.');
            valores.energia += 10; valores.tecnica += 10 ; valores.confianca += 10
        }
            
        else if(terceiraEscolha1 == 'B'){
        console.log('\n     BOA ESCOLHA! VAMOS FAZER UM TREINO REGENERATIVO.');
        valores.energia += 5; valores.tecnica += 10 ; valores.confianca += 10
        }
            
        else if(terceiraEscolha1 == 'C'){
        console.log('\n   [A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n   [B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES\n');
        let terceiraEscolha2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while(terceiraEscolha2 != 'A' && terceiraEscolha2 != 'B'){
        console.log('\nDIGITE UMA OPÇÃO VÁLIDA:"');
        console.log('[A] BEBER GATORADE E COMEMORAR NO VESTIÁRIO \n[B] BEBER ALCOOL ATÉ TARDE NO HOTEL COM OS JOGADORES\n');
        terceiraEscolha2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
            }if (terceiraEscolha2 == 'A'){
            console.log('\n   BOA ESCOLHA! NÃO EXAGERE, TEMOS A FINAL AMANHÃ.');
            valores.energia -= 20; valores.tecnica += 0 ; valores.confianca += 10
            }else if (terceiraEscolha2 == 'B'){
            console.log('\n   PÉSSIMA ESCOLHA! COMO VAMOS JOGAR AMANHÃ BÊBADOS?');
            valores.energia += 10; valores.tecnica -= 100 ; valores.confianca += 10
            }
        }
        }
        
    function quartaFase(){
        console.log('\n--------------------------------------------------------------');
        console.log(`\n            FASE 0${valores.fases} / DIA 0${valores.dias} - PRÉ JOGO / ${valores.horas}:00hrs
            
CHEGAMOS A GRANDE FINAL!! HOJE É O DIA DE SABER QUEM VAI SER
A SELEÇÃO CAMPÊA DO MUNDO. IREMOS ENFRENTAR A ATUAL VENCEDORA,
A SELEÇÃO FRANCESA DE FUTEBOL! E VOCE COMO CAPITÃO DA EQUIPE,
        DEVE AJUDAR A SELECIONAR OS PROXIMOS PASSOS:
          
    :: Neste jogo Neymar ganhou uma premiação individual ::
    
--------------------------------------------------------------
          
                Atual Status do Personagem:`)
           
        meuStatus()
            
        console.log(`
    QUAL O PROXIMO PASSO DA SELEÇÃO BRASILEIRA ANTES DO JOGO?
    
                      [A]TREINAMENTO LEVE  
                    [B]TREINAMENTO PESADO\n`);
    
        let quartaEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while(quartaEscolha1 != 'A' && quartaEscolha1 != 'B'){
        console.log('DIGITE UMA OPÇÃO VÁLIDA:');
        console.log('[A]TREINAMENTO LEVE \n[B]TREINAMENTO PESADO');
        quartaEscolha1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        }
        if (quartaEscolha1 == 'A'){
        console.log('\nTREINAMENTO TRANQUILO, PARA IRMOS COM TUDO PRA ESSA FINAL!');
        valores.energia += 10; valores.tecnica += 10 ; valores.confianca += 10
        }else if(quartaEscolha1 == 'B'){
        console.log('\nTREINAMENTO FORTE, PARA IRMOS COM TUDO PRA ESSA FINAL');
        valores.energia -= 10; valores.tecnica += 10 ; valores.confianca += 10
        eventoZero()
        }
        }

    function quintaFase(){
        console.log('\n--------------------------------------------------------------');
        console.log(`\n          FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS JOGO / ${valores.horas}:00hrs

É CAAAAAAAAAAAAAAMPEÃOOOOOOOOOOOO!!!!!! A SELEÇÃO BRASILEIRA
É CAMPEÃ DO MUNDO! BRASIL 2 x 0 FRANÇA, COM GOL DE NEYMAR!
O BRASIL É HEXA CAMPEÃO MUNDIALE VOCE COMO CAPITÃO DA EQUIPE,
     DEVE AJUDAR A SELECIONAR OS PROXIMOS PASSOS:

   :: Neste jogo Neymar ganhou uma premiação individual ::

--------------------------------------------------------------

               Atual Status do Personagem:\n`);
    
        meuStatus()

        console.log(`
        AONDE VAI SER A COMEMORAÇÃO DO TÍTULO?
        
             [1]FESTA NO ESTADIO/HOTEL
        [2]FESTA NO ESTADIO/RUAS DO CATHAR\n`);
        let quintaPergunta1 = prompt(`                   QUAL SUA ESCOLHA: `)
        while(quintaPergunta1 != "1" && quintaPergunta1 != "2"){
        console.log('\nDIGITE UMA OPÇÃO VÁLIDA:');
        console.log('[1]FESTA NO ESTADIO/HOTEL\n[2]FESTA NO ESTADIO/RUAS DO CATHAR');
        quintaPergunta1 = prompt('                   QUAL SUA ESCOLHA: ')
        }
        if (quintaPergunta1 == '1'){
        console.log('BOA ESCOLHA NEY! VAMOS COMEMORAR NO ESTÁDIO E DEPOIS FAZER UMA GRANDE FESTA NO HOTEL!');
        }else if (quintaPergunta1 == '2'){
        console.log(`
        [A]CARRO DOS BOMBEIROS NA COMEMORAÇÃO 
        [B]TRIO ELÉTRICO NA COMEMORAÇÃO\n`);
        let quintaPergunta2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while(quintaPergunta2 != 'A' && quintaPergunta2 != 'B'){
        console.log('\nDIGITE UMA OPÇÃO VÁLIDA:');
        console.log('[A]CARRO DOS BOMBEIROS NA COMEMORAÇÃO \n[B]TRIO ELÉTRICO NA COMEMORAÇÃO');
        quintaPergunta2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        }
            if(quintaPergunta2 == 'A'){
            console.log('ÓTIMA ESCOLHA NEY! DEPOIS DO ESTÁDIO VAMOS SAIR NO \nCARRO DE BOMBEIRO PELAS RUAS DO CATHAR');
            }else if(quintaPergunta2 == 'B'){
            console.log('ÓTIMA ESCOLHA NEY! DEPOIS DO ESTÁDIO VAMOS SAIR DE \nTRIO ELÉTRICO PELAS RUAS DO CATHAR');
            }
        }

        console.log('\nQUE FESTA MARAVILHOSA FAZ A TORCIDA DO BRASIL! BRASIL HEXA CAMPEÃO DO MUNDO!\nVAI SER DIFÍCIL DORMIR NAS RUAS HOJE...');
        }

    function sextaFase(){
        console.log('\n--------------------------------------------------------------')
        console.log(`\n    FASE 0${valores.fases} / DIA 0${valores.dias} - CÊRIMONIA DE PREMIAÇÃO / ${valores.horas}:00hrs
                
SEJAM BEM VINDOS A GRANDE CÊRIMONIA DE PREMIAÇÃO! HOJE VAMOS VER
         OS PRÊMIOS INDIVIDUAIS DE CADA ATLETA
            
        NEYMAR VOCÊ GANHOU OS SEGUINTES PRÊMIOS:
            
            PRECIONE ENTER PARA VISUALIZAR.`)

        prompt()
        // meusPremios()
        
    }

    function setimaFase(){
        console.log('\n--------------------------------------------------------------');    
        console.log(`\n    FASE 0${valores.fases} / DIA 0${valores.dias} - PÓS CÊRIMONIA DE PREMIAÇÃO / ${valores.horas}:00hrs
    
        QUE FESTA MARAVILHOSA FEZ A TORCIDA DO BRASIL!
        AGORA É HORA DE DECIDIR O SEU DESTINO NEYMAR...
    
              PRECIONE ENTER PARA CONTINUAR:`);
        prompt()
    
            
        console.log(`
                [1] VOLTAR PRO BRASIL
                [2] VOLTAR PRA FRANÇA`);
    
        let sextaPergunta1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while(sextaPergunta1 != "1" && sextaPergunta1 != "2"){
        console.log('\nDIGITE UMA OPÇÃO VÁLIDA:');
        console.log('[1] VOLTAR PRO BRASIL \n[2] VOLTAR PRA FRANÇA');
        sextaPergunta1 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        } 
        if (sextaPergunta1 == '1'){
        console.log('\n[1]COMEMORAR COM A FAMILIA\n[2]COMEMORAR COM A FAMILIA E AMIGOS\n[3]FAZER GRANDE FESTA PADRÃO NEYMAR');
        let sextaPergunta2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        while(sextaPergunta2 != '1' && sextaPergunta2 != '2' && sextaPergunta2 != '3'){
        console.log('DIGITE UMA OPÇÃO VÁLIDA:');
        console.log('           [1]COMEMORAR COM A FAMILIA\n           [2]COMEMORAR COM A FAMILIA E AMIGOS\n           [3]FAZER GRANDE FESTA PADRÃO NEYMAR');
        sextaPergunta2 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
        }
        if (sextaPergunta2 == '1'){
            console.log('BOA ESCOLHA NEYMAR! VAMOS DESCANSAR E COMEMORAR COM A FAMÍLIA.\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
            }else if( sextaPergunta2 == '2'){
            console.log('BOA ESCOLHA NEYMAR! VAMOS COMEMORAR COM A FAMILIA E OS PARÇAS.\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');      
            }else if( sextaPergunta2 == '3'){
            console.log('ÓTIMA ESCOLHA NEYMAR! VAMOS FAZER UMA GRANDE FESTA EM SUA ILHA!\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
            }
        }else if(sextaPergunta1 == '2'){
            console.log('[1]FERIAS COM A FAMILIA \n[2] REEAPRESENTAR NO PARIS SAINT GERMAIN');
            let sextaPergunta3 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase()
            while (sextaPergunta3 != '1' && sextaPergunta3 != '2'){
            console.log('DIGITE UMA OPÇÃO VÁLIDA:');
            console.log('           [1]FERIAS COM A FAMILIA \n           [2] REEAPRESENTAR NO PARIS SAINT GERMAIN');
            sextaPergunta3 = prompt('                   QUAL SUA ESCOLHA: ').toUpperCase
            }
                if (sextaPergunta3 == '1'){
                console.log('BOA ESCOLHA NEYMAR! DEPOIS DE GANHAR UMA COPA DO MUNDO, VOCÊ MERECE UM DESCANSO!\nPARABÉNS BRASIL! PARABÉNS NEYMAR! ');
                }else if(sextaPergunta3 = '2'){
                console.log('ÓTIMA ESCOLHA NEYMAR! VAMOS COM TUDO TENTAR O TITULO DA CHAMPIONS LEAGUE!\nPARABÉNS BRASIL! PARABÉNS NEYMAR!');
                }
            }
        }
        

    function jogarNovaemente(){
        let continuar = 'S'
        continuar = prompt('DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase()
        while(continuar != 'S' && continuar != 'N'){
        continuar = prompt('DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase() 
        }
        }

    function jogarNovamenteConfirmacao(){
        let continuar2 = 'S'
        continuar2 = prompt('CONFIRMAÇÃO - DESEJA JOGAR NOVAMENTE? [S/N]: ').toUpperCase()
        while(continuar2 != 'S' && continuar2 != 'N'){
        console.log('DIGITE UMA OPÇÃO VÁLIDA.');
        continuar2 = prompt('CONFIRMAÇÃO - DESEJA JOGAR NOVAMENTE? [S/N]:').toUpperCase() 
        }
        }

// CHAMANDO FUNÇÕES E FINALIZANDO GAME

let continuar2 = 'S'
while (continuar2 == 'S'){
    
    let continuar = 'S'
    while(continuar = 'S'){   

        let valores = {energia:50, tecnica:50, confianca:50, dias: 1, fases:1, horas:18}
        let listaPremios = []

        inicioGame()

        primeiraFase()
        let premio1 = ' - SELEÇÃO DA COPA DO MUNDO'
        listaPremios.push(premio1)
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-       DIA 01 ENCERRADO - PRESS ENTER CONTINUE            ->');
        prompt()
        fase()
        dia()
        horaMenos()
        console.clear();

        segundaFase()
        if(valores.energia <= 0){final1(); jogarNovaemente();break}
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-        PRECIONE ENTER PARA IR PARA A SEMI-FINAL          ->');
        prompt()
        fase()
        horaMais()
        console.clear();
        
        terceiraFase()
        if (valores.tecnica <= 0){final2();jogarNovaemente();break}
        let premio2 = ' - ARTILHEIRO DA COPA DO MUNDO'
        listaPremios.push(premio2)
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-       DIA 02 ENCERRADO - PRESS ENTER CONTINUE            ->');
        prompt()
        fase()
        dia()
        horaMenos()
        valores.energia += 20; valores.confianca += 20 ; valores.tecnica += 10
        console.clear();

        quartaFase()
        if(valores.confianca <= 0){final3() ;jogarNovaemente();break}
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-         PRECIONE ENTER PARA IR PARA A FINAL              ->');
        prompt()
        fase()
        horaMais()
        campeaoStatus()
        console.clear()
        
        quintaFase()
        let premio3 = ' - MELHOR JOGADOR DA COPA DO MUNDO'
        listaPremios.push(premio3)
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-       DIA 03 ENCERRADO - PRESS ENTER CONTINUE            ->');
        prompt()
        fase()
        dia()
        horaMenos()
        console.clear();

        sextaFase()
        for (let i = 0 ; i < listaPremios.length; i++){
        console.log(`${i+1}º PREMIO - ${listaPremios[i]}`);
        }
        prompt()
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-            PRECIONE ENTER PARA CONTINUAR                ->');
        prompt()
        fase()
        horaMais
        console.clear();



        setimaFase()
        console.log('\n--------------------------------------------------------------');
        console.log('\n<-        JOGO ENCERRADO - PRESS ENTER CONTINUE               ->');
        prompt()
        console.clear();

        
        jogarNovaemente()

    }

    jogarNovamenteConfirmacao()

}