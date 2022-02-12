



// Seccion de hero
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


// Seccion de Skills

function skill(){

    let habilidades='{"Atención":"Alto,"Velocidad de razonamiento":"Medio","Razonamiento":"Alto","Trabajo en equipo":"Alto"}';
    const obje = JSON.parse(habilidades);

}


// Seccion de Contact me
function limpiar(e){
    const form1= document.getElementsByid("nombre");
    const form2= document.getElementsByid("correo");
    const form3= document.getElementsByid("mensaje");

    form1=" ";
    form2=" ";
    form3=" ";
    alert("Su solicitud ha sido enviada");

}




// Comienzo de la pagina
var imaIndex=1;
RecorrerIma(imaIndex);
document.addEventListener("envio", limpiar);