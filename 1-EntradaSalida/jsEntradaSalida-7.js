/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var n1;
    var n2;
    var resulta;

    n1 = parseInt (document.getElementById("numeroUno").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDos").value);
    /* Funcion auxiliar
    console.log(n2);*/
    resulta = n1 + n2;
    alert("La Suma es "+resulta);
}

function restar()
{
    var n1;
    var n2;
    var resulta;

    n1 = parseInt (document.getElementById("numeroUno").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDos").value);
    /* Funcion auxiliar
    console.log(n2);*/
    resulta = n1 - n2;
    alert("La Resta es "+resulta);
}

function multiplicar()
{
    var n1;
    var n2;
    var resulta;

    n1 = parseInt (document.getElementById("numeroUno").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDos").value);
    /* Funcion auxiliar
    console.log(n2);*/
    resulta = n1 * n2;
    alert("La Multiplicacion es "+resulta);
}

function dividir()
{
    var n1;
    var n2;
    var resulta;

    n1 = parseInt (document.getElementById("numeroUno").value);
    /* Funcion auxiliar
    console.log(n1);*/
    n2 = parseInt (document.getElementById("numeroDos").value);
    /* Funcion auxiliar
    console.log(n2);*/
    resulta = n1 / n2;
    alert("La Divicion es "+resulta);
}

