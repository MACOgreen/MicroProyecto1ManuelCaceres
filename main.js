




function RecorrerIma(n){

    var x;
    var ima = document.getElementsByClassName("imagenes");

    if (n > ima.length) {
        imaIndex = 1
    }
    if (n < 1) {
        imaIndex = ima.length
    }

    for (x = 0; x < ima.length; x++) {
        ima[x].style.display = " none";
    }
    ima[imaIndex-1].style.display = "block";
}

function plusIma(n) {
    RecorrerIma(imaIndex += n);
}



// Comienzo de la pagina
var imaIndex=1;
RecorrerIma(imaIndex);