
var color1 = "#f7a440";
var color2 = "#be6a15";
var color3 = "#ac3f21";

//3) Al moure el mouse sobre un element, que canvii els cotlors a tots els seus anteriors. Si per exemple es posa el mouse a la tercera estrella, s’han de canviar de color de la 1 a la 3. Pista: Es pot utilizar la virgulilla de CSS.


iEstrellas.addEventListener("mouseover", function (e){

    if (e.target.id != "estrella1" && 
        e.target.id != "estrella2" && 
        e.target.id != "estrella3" && 
        e.target.id != "estrella4" && 
        e.target.id != "estrella5" && 
        estrella1.style.color != color3)
         
            {estrella1.style.color = color1;
            estrella2.style.color = color1;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella1" && 
        estrella1.style.color != color3)

            {estrella1.style.color = color2;
            estrella2.style.color = color1;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella2" && 
        estrella1.style.color != color3)

            {estrella1.style.color = color2;
            estrella2.style.color = color2;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella3" &&
        estrella1.style.color != color3)

            {estrella1.style.color = color2;
            estrella2.style.color = color2;
            estrella3.style.color = color2;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella4" &&
        estrella1.style.color != color3)

            {estrella1.style.color = color2;
            estrella2.style.color = color2;
            estrella3.style.color = color2;
            estrella4.style.color = color2;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella5" &&
        estrella1.style.color != color3)

            {estrella1.style.color = color2;
            estrella2.style.color = color2;
            estrella3.style.color = color2;
            estrella4.style.color = color2;
            estrella5.style.color = color2;
            }

});

//4) Al premer una estrella, s’han de quedar els colors fixes a aquesta i totes les anteriors. Si es prem a una altra estrella, els colors s’han d’actualitzar correctament.

iEstrellas.addEventListener("click", function (e){

    if (e.target.id != "estrella1" &&
        e.target.id != "estrella2" &&
        e.target.id != "estrella3" &&
        e.target.id != "estrella4" &&
        e.target.id != "estrella5")

            {estrella1.style.color = color1;
            estrella2.style.color = color1;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella1")

            {estrella1.style.color = color3;
            estrella2.style.color = color1;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella2")

            {estrella1.style.color = color3;
            estrella2.style.color = color3;
            estrella3.style.color = color1;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella3")

            {estrella1.style.color = color3;
            estrella2.style.color = color3;
            estrella3.style.color = color3;
            estrella4.style.color = color1;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella4")

            {estrella1.style.color = color3;
            estrella2.style.color = color3;
            estrella3.style.color = color3;
            estrella4.style.color = color3;
            estrella5.style.color = color1;
            }

    if (e.target.id == "estrella5")

            {estrella1.style.color = color3;
            estrella2.style.color = color3;
            estrella3.style.color = color3;
            estrella4.style.color = color3;
            estrella5.style.color = color3;
            }

});


