var indice = 0;
coment();

function coment() {
    var comentarios = document.getElementsByClassName("comentarios");

    for (var i = 0; i < comentarios.length; i++) {
        comentarios[i].classList.remove("mostrar");
    }
    indice++;
    if (indice > comentarios.length) {
        indice = 1;
    }
    comentarios[indice - 1].classList.add("mostrar");
}

setInterval(coment, 7000);