function Mostrar()
{
	var sum = 0;
	var prod = 1;
	var respuesta='si';
	var num = parseInt (prompt ("Ingrese un numero"));
	while (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI") {
		if (num >= "0") {
			sum = sum + num;
		} else {
			prod = prod * num;
		}
		//console.log ("sum"+sum);
		//console.log ("prod"+prod);
		respuesta = prompt ("¿Desea ingresar otro numero?")
		if (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI"){
			num = parseInt (prompt ("Ingrese un numero"));
		}
		document.getElementById('suma').value=sum;
		document.getElementById('producto').value=prod;
	}
}//FIN DE LA FUNCIÓN