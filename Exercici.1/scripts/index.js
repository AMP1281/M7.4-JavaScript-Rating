
// 3) Al moure el mouse sobre un element, que canvii els cotlors a tots els seus anteriors. Si per exemple es posa el mouse a la tercera estrella, s’han de canviar de color de la 1 a la 3. Pista: Es pot utilizar la virgulilla de CSS.


var est1 = estrella1;
var est2 = estrella2;
var est3 = estrella3;
var est4 = estrella4;
var est5 = estrella5;

est1.addEventListener("mouseover", function est1orange () {
    est1.style.color = "#f48b29";
});

est1.addEventListener("mouseout", function est1red () {
    est1.style.color = "#ac0d0d";
});