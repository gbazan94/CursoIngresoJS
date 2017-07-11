function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI") {
		contador = contador + 1;
		//console.log ("contador"+contador);
		acumulador = acumulador + parseInt (prompt ("Ingrese un numero"));
		//console.log ("acum"+acumulador);
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
		respuesta = prompt ("¿Desea ingresar otro numero?")
	}
}//FIN DE LA FUNCIÓN