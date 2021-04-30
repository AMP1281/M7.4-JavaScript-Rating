// 3) Al moure el mouse sobre un element, que canvii els cotlors a tots els seus anteriors. Si per exemple es posa el mouse a la tercera estrella, s’han de canviar de color de la 1 a la 3. Pista: Es pot utilizar la virgulilla de CSS.

var est = estrellas;

var es1 = document.getElementById("estrella1");
var es2 = document.getElementById("estrella2");
var es3 = document.getElementById("estrella3");
var es4 = document.getElementById("estrella4");
var es5 = document.getElementById("estrella5");

est.addEventListener("mouseover", function( event ) {

    event.target.style.color = "orange";

});