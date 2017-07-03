function Mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    /* Funcion auxiliar
    console.log (edad)
    */
    if (edad >= 13 && edad <= 17) {
        alert ("Usted es adolescente");
    } else {
        alert ("Usted no es adolescente");
    }
    
}//FIN DE LA FUNCIÓN