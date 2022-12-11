function tocaSom(idAudio){
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = function () {
        tocaSom('#som_tecla_pom');
    };
    cont = cont + 1;
    console.log(cont);
}