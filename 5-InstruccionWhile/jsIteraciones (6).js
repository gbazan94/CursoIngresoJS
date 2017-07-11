function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	while (contador < 5) {
		contador = contador + 1;
		//console.log ("contador"+contador);
		acumulador = acumulador + parseInt (prompt ("ingrese un numero"));
		//console.log ("acum"+acumulador);
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/5;	
	}
}//FIN DE LA FUNCIÓN