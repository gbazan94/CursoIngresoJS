/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var n1;
    var incremento;
    var resulta;

    n1 = parseInt (document.getElementById("sueldo").value);
    /* Funcion auxiliar
    console.log(n1);*/
    incremento = (n1 * 10)/100;
    /* Funcion auxiliar 
    console.log(incremento);*/
    resulta = n1 + incremento;
    /* Funcion auxiliar
    console.log(resulta);*/
    document.getElementById("resultado").value = resulta;

}
