function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let cont = 0;
while (cont < listaDeTeclas.length) {
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idDoAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idDoAudio);
    };
    cont++;
}