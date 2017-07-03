function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    
    /*switch (mesDelAño)
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
    }*/
    if (mesDelAño == "Enero" || mesDelAño == "Marzo" || mesDelAño == "Mayo" || mesDelAño == "Julio" || mesDelAño == "Agosto" || mesDelAño == "Octubre" || mesDelAño == "Diciembre"){
        alert ("Este mes tiene 31 Dias.");
    } else if (mesDelAño == "Febrero"){
        alert ("Este mes tiene 28 Dias.");
    } else {
        alert ("Este mes tiene 30 Dias.");
    }
}//FIN DE LA FUNCIÓN