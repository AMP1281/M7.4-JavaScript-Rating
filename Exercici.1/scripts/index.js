
// 3) Al moure el mouse sobre un element, que canvii els cotlors a tots els seus anteriors. Si per exemple es posa el mouse a la tercera estrella, s’han de canviar de color de la 1 a la 3. Pista: Es pot utilizar la virgulilla de CSS.

    //var est1 = estrella1;
    //var est2 = estrella2;
    //var est3 = estrella3;
    //var est4 = estrella4;
    //var est5 = estrella5;

    /* //Estrella1
    est1.addEventListener("mouseover", function est1orange () {
        est1.style.color = "#f48b29";
    });
    est1.addEventListener("mouseout", function est1red () {
        est1.style.color = "#ac0d0d";
    });

    //Estrella2
    est2.addEventListener("mouseover", function est2orange () {
        est1.style.color = "#f48b29";
        est2.style.color = "#f48b29";
    });
    est2.addEventListener("mouseout", function est2red () {
        est1.style.color = "#ac0d0d";
        est2.style.color = "#ac0d0d";
    });

    //Estrella3
    est3.addEventListener("mouseover", function est3orange () {
        est1.style.color = "#f48b29";
        est2.style.color = "#f48b29";
        est3.style.color = "#f48b29";
    });
    est3.addEventListener("mouseout", function est3red () {
        est1.style.color = "#ac0d0d";
        est2.style.color = "#ac0d0d";
        est3.style.color = "#ac0d0d";
    });

    //Estrella4
    est4.addEventListener("mouseover", function est4orange () {
        est1.style.color = "#f48b29";
        est2.style.color = "#f48b29";
        est3.style.color = "#f48b29";
        est4.style.color = "#f48b29";
    });
    est4.addEventListener("mouseout", function est4red () {
        est1.style.color = "#ac0d0d";
        est2.style.color = "#ac0d0d";
        est3.style.color = "#ac0d0d";
        est4.style.color = "#ac0d0d";
    });

    //Estrella5
    est5.addEventListener("mouseover", function est5orange () {
        est1.style.color = "#f48b29";
        est2.style.color = "#f48b29";
        est3.style.color = "#f48b29";
        est4.style.color = "#f48b29";
        est5.style.color = "#f48b29";
    });
    est5.addEventListener("mouseout", function est5red () {
        est1.style.color = "#ac0d0d";
        est2.style.color = "#ac0d0d";
        est3.style.color = "#ac0d0d";
        est4.style.color = "#ac0d0d";
        est5.style.color = "#ac0d0d";
    });
 */

//4) Al premer una estrella, s’han de quedar els colors fixes a aquesta i totes les anteriors. Si es prem a una altra estrella, els colors s’han d’actualitzar correctament.

    //Estrella1
    //est1.addEventListener("click", function est1black () {
    //   est1.style.color = "black";
    //});

//var test = new Array();

//test = [est1, est2, est3, est4, est5];

//for (i=0; i<test.length; i++) {
//    test[i].onclick = alert("hola");
//    }

estrella1.addEventListener("click",test,test1);
estrella2.addEventListener("click",test,test1);
estrella3.addEventListener("click",test,test1);
estrella4.addEventListener("click",test,test1);
estrella5.addEventListener("click",test,test1);

function test(e) {

    if (e.target.id == "estrella1")
    {estrella1.style.color = "blue";}

    if (e.target.id == "estrella2")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    }

    if (e.target.id == "estrella3")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    }

    if (e.target.id == "estrella4")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    }

    if (e.target.id == "estrella5")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    estrella5.style.color = "blue";
    }
}
estrella1.addEventListener("click",test1,true);
estrella2.addEventListener("click",test1,true);
estrella3.addEventListener("click",test1,true);
estrella4.addEventListener("click",test1,true);
estrella5.addEventListener("click",test1,true);

function test1(e) {

    if (e.target.id == "estrella1")
    { estrella2.style.color = "red";
    estrella3.style.color = "red";
    estrella4.style.color = "red";
    estrella5.style.color = "red";}

    if (e.target.id == "estrella2")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    }

    if (e.target.id == "estrella3")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    }

    if (e.target.id == "estrella4")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    }

    if (e.target.id == "estrella5")
    {estrella1.style.color = "blue";
    estrella2.style.color = "blue";
    estrella3.style.color = "blue";
    estrella4.style.color = "blue";
    estrella5.style.color = "blue";
    }
}

