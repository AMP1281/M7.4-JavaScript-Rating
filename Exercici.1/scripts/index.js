
//3) Al moure el mouse sobre un element, que canvii els cotlors a tots els seus anteriors. Si per exemple es posa el mouse a la tercera estrella, s’han de canviar de color de la 1 a la 3. Pista: Es pot utilizar la virgulilla de CSS.


iEstrellas.addEventListener("mouseover", function (e){

    if ( e.target.id != "estrella1" && e.target.id != "estrella2" && e.target.id != "estrella3" && e.target.id != "estrella4" && e.target.id != "estrella5" && estrella1.style.color != "blue")
    {estrella1.style.color = "#ac0d0d";
    estrella2.style.color = "#ac0d0d";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella1" && estrella1.style.color != "blue")
    {estrella1.style.color = "#f48b29";
    estrella2.style.color = "#ac0d0d";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella2" && estrella1.style.color != "blue")
    {estrella1.style.color = "#f48b29";
    estrella2.style.color = "#f48b29";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella3" && estrella1.style.color != "blue")
    {estrella1.style.color = "#f48b29";
    estrella2.style.color = "#f48b29";
    estrella3.style.color = "#f48b29";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella4" && estrella1.style.color != "blue")
    {estrella1.style.color = "#f48b29";
    estrella2.style.color = "#f48b29";
    estrella3.style.color = "#f48b29";
    estrella4.style.color = "#f48b29";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella5" && estrella1.style.color != "blue")
    {estrella1.style.color = "#f48b29";
    estrella2.style.color = "#f48b29";
    estrella3.style.color = "#f48b29";
    estrella4.style.color = "#f48b29";
    estrella5.style.color = "#f48b29";
    }
});

//iEstrellas.addEventListener("mouseout", function (e){
//    estrella1.style.color = "#ac0d0d";
//    estrella2.style.color = "#ac0d0d";
//    estrella3.style.color = "#ac0d0d";
//    estrella4.style.color = "#ac0d0d";
//    estrella5.style.color = "#ac0d0d";
//}
//});

//4) Al premer una estrella, s’han de quedar els colors fixes a aquesta i totes les anteriors. Si es prem a una altra estrella, els colors s’han d’actualitzar correctament.

iEstrellas.addEventListener("click", function (e){

    if ( e.target.id != "estrella1" && e.target.id != "estrella2" && e.target.id != "estrella3" && e.target.id != "estrella4" && e.target.id != "estrella5")

    {estrella1.style.color = "#ac0d0d";
    estrella2.style.color = "#ac0d0d";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }


    if (e.target.id == "estrella1")
    {estrella1.style.color = "blue";
    estrella2.style.color = "#ac0d0d";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella2")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella3")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella4")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    estrella5.style.color = "#ac0d0d";
    }

    if (e.target.id == "estrella5")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    estrella5.style.color = "blue";
    }

    if(e.target.id == "iBody"){
    estrella1.style.color = "#ac0d0d";
    estrella2.style.color = "#ac0d0d";
    estrella3.style.color = "#ac0d0d";
    estrella4.style.color = "#ac0d0d";
    estrella5.style.color = "#ac0d0d";
    }
});


