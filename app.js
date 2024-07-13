let listaDeNumerosSorteados = [];
let numeroLimite = 1000000000;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;


function exibiTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = Texto;
responsiveVoice.speak (Texto,'Brazilian Portuguese Female', {rate:1.2});

}
function exibirMensagemInicial() {
    exibiTextoNaTela ('h1','Jogo do número secreto');
    exibiTextoNaTela ('p','Escolha um número entre 1 e 1000000000')
}
exibirMensagemInicial();

function verificarChute() {
let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibiTextoNaTela ('h1','Parabéns');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibiTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else { 
       if (chute > numeroSecreto){
        exibiTextoNaTela ('p', `o número secreto é menor que ${chute}`);
       } else {
        exibiTextoNaTela ('p' , `o número secreto é maior que ${chute}`);
       }
    } tentativas++;
    limparCampo();
}
function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random () *numeroLimite + 1);
      let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; {
        if (quantidadeDeElementosNaLista == numeroLimite);
        listaDeNumerosSorteados = [];
      }

      
      if (listaDeNumerosSorteados.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio ();
      } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;}

}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true)


}
