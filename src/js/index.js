const setaAvancar = document.getElementById("avancar");  
const setaVoltar = document.getElementById("voltar");
const listaDeFundos = document.querySelectorAll(".fundo");
let controleFundoAtual = 0;

setaAvancar.addEventListener('click', function(){
    controleFundoAtual ++;

    trocarSlider();  
    desabilitarSeta();
})

setaVoltar.addEventListener('click', function(){
    controleFundoAtual --;

    trocarSlider();
    desabilitarSeta();
});

function trocarSlider(){
    listaDeFundos.forEach(fundo =>{
        if (fundo.classList.value === 'fundo mostrar-fundo') {
            fundo.classList.remove('mostrar-fundo')
        }
    })

    listaDeFundos[controleFundoAtual].classList.add("mostrar-fundo");
}

function desabilitarSeta(){
    const primeiroFundo = 0;
    const ultimoFundo = listaDeFundos.length -1;

    controleFundoAtual === primeiroFundo ? setaVoltar.classList.add('desabilitar-seta') : setaVoltar.classList.remove('desabilitar-seta');

    controleFundoAtual === ultimoFundo ? setaAvancar.classList.add('desabilitar-seta') : setaAvancar.classList.remove('desabilitar-seta');
}