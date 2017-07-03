function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    
    switch (mesDelAño)
    {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        {
            alert ("Este mes tiene 31 Dias.");
            break;
        }
        case "Febrero":
        {
            alert ("Este mes tiene 28 Dias.");
            break;
        }
        default:
        {
            alert ("Este mes tiene 30 Dias.");
            break;
        }
    }
}//FIN DE LA FUNCIÓN