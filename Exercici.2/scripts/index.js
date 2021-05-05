
const colors = {
        color1 : "silver",
        color2 : "darkorange",
        color3 : "firebrick",
};

function asignarColor (estrella1color, estrella2color, estrella3color, estrella4color, estrella5color) {
        estrella1.style.color = estrella1color;
        estrella2.style.color = estrella2color;
        estrella3.style.color = estrella3color;
        estrella4.style.color = estrella4color;
        estrella5.style.color = estrella5color;
};

//3)

iEstrellas.addEventListener("mouseover", function (e){

        if (e.target.id != "estrella1" && e.target.id != "estrella2" && e.target.id != "estrella3" && e.target.id != "estrella4" && e.target.id != "estrella5" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color1, colors.color1, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella1" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color2, colors.color1, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella2" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color2, colors.color2, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella3" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color2, colors.color2, colors.color2, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella4" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color2, colors.color2, colors.color2, colors.color2, colors.color1);

        }
        if (e.target.id == "estrella5" && estrella1.style.color != colors.color3) {

                asignarColor (colors.color2, colors.color2, colors.color2, colors.color2, colors.color2);

        }

});

//4)

iEstrellas.addEventListener("click", function (e) {

        if (e.target.id != "estrella1" && e.target.id != "estrella2" && e.target.id != "estrella3" && e.target.id != "estrella4" && e.target.id != "estrella5") {

                asignarColor (colors.color1, colors.color1, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella1") {

                asignarColor (colors.color3, colors.color1, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella2") {

                asignarColor (colors.color3, colors.color3, colors.color1, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella3") {

                asignarColor (colors.color3, colors.color3, colors.color3, colors.color1, colors.color1);

        }
        if (e.target.id == "estrella4") {

                asignarColor (colors.color3, colors.color3, colors.color3, colors.color3, colors.color1);

        }
        if (e.target.id == "estrella5") {

                asignarColor (colors.color3, colors.color3, colors.color3, colors.color3, colors.color3);

        }

});


