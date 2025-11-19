let numerosSorteados=[];
let numeroLimite=10
let numeroSecreto = gerarNumeroAleatorio();
let contador=1;


mensagemInicial();




function exiberTexto(tag,texto){ //Otimização com funções
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    
}

function contagemTentativa(){
    return contador++;
}

function mensagemInicial(){
    exiberTexto('h1','NÚMERO SECRETO');
    exiberTexto('p','Escolha um número entre 1 e 10');
}


function verificarChute(){
    let chute = document.querySelector('input').value;
     function textoContagem(){
            return contador === 1 ? "Tentativa" : "Tentativas";
     }

    if (chute==numeroSecreto){
        exiberTexto('h1','VOCÊ ACERTOU');
        exiberTexto('p',`Descobriu o nome secreto - ${textoContagem()}:${contador}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
       


        if (chute>numeroSecreto){
            exiberTexto('h1','Você Errou - MENOR');
            exiberTexto('p',`${textoContagem()}:${contador}`);
            contagemTentativa();
        }else{
            exiberTexto('h1','Você Errou - MAIOR');
            exiberTexto('p',`${textoContagem()}:${contador}`);
            contagemTentativa();
        }
        limparCampo();
    }
    

}
function novoJogo(){
    mensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    contador=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function gerarNumeroAleatorio() {
    let numeroEscolhido=parseInt(Math.random()*numeroLimite +1);
    let quantidadeDeElementos=numerosSorteados.length;

    if(quantidadeDeElementos==numeroLimite){
        numerosSorteados=[];
    }

    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}
