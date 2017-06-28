/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var n1;
    var decremento;
    var resulta;

    n1 = parseInt (document.getElementById("importe").value);
    /* Funcion auxiliar
    console.log(n1);*/
    decremento = (n1 * 25)/100;
    /* Funcion auxiliar
    console.log(decremento);*/
    resulta = n1 - decremento;
    /* Funcion auxiliar
    console.log(resulta);*/
    document.getElementById("resultado").value = resulta;
}
