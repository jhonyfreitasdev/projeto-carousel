let setaAvancar = document.getElementById("avancar");  
let setaVoltar = document.getElementById("voltar");
let listaDeFundos = document.getElementsByClassName("fundo");
let fundoAtual = 0;
let fundoAnterior = 0;



setaAvancar.addEventListener('click', function(){
    fundoAnterior = fundoAtual;
    fundoAtual ++;

    mostrarFundo();    
    esconderFundo();
    desabilitarSeta();
})

setaVoltar.addEventListener('click', function(){
    fundoAnterior = fundoAtual;
    fundoAtual --;

    mostrarFundo();
    esconderFundo();
    desabilitarSeta();
});

function mostrarFundo() {
    listaDeFundos[fundoAtual].classList.add("mostrar-fundo");
}

function esconderFundo(){
    listaDeFundos[fundoAnterior].classList.remove('mostrar-fundo');
}

function desabilitarSeta(){
    const primeiroFundo = 0;
    const ultimoFundo = listaDeFundos.length -1;

    fundoAtual === primeiroFundo ? setaVoltar.classList.add('desabilitar-seta') : setaVoltar.classList.remove('desabilitar-seta');

    fundoAtual === ultimoFundo ? setaAvancar.classList.add('desabilitar-seta') : setaAvancar.classList.remove('desabilitar-seta');
}
