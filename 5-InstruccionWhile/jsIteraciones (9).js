function Mostrar()
{
	var mayor = 0;
	var menor = 999999999999999999999999999999999999999;
	var respuesta='si';
	var num = parseInt (prompt ("Ingrese un numero"));
	while (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI") {
		if (num > mayor) {
			mayor = num;
		} else if (num < menor){
			menor = num;
		}
		console.log ("mayor"+mayor);
		console.log ("menor"+menor);
		respuesta = prompt ("¿Desea ingresar otro numero?")
		if (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI"){
			num = parseInt (prompt ("Ingrese un numero"));
		}
		document.getElementById('maximo').value=mayor;
		document.getElementById('minimo').value=menor;
	}
}//FIN DE LA FUNCIÓN