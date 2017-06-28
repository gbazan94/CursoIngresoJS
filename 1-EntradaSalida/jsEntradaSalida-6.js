/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1;
    var n2;

    n1 = parseInt (document.getElementById("numeroUno").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDos").value);
    /* Funcion auxiliar
    console.log(n2);*/
    alert(n1+n2);
}