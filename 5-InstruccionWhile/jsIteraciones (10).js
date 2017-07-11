function Mostrar()
{
	// <!--- Inicio de variables ---!>
	// positivos 
	var sumPos = 0
	var contPos = 0
	var promPos = 0
	// negativos
	var sumNeg = 0
	var contNeg = 0
	var promNeg = 0
	// ceros
	var contCero = 0
	// pares
	var contPar = 0
	// diferencia final
	var dif = 0
	// variables iniciales
	var respuesta='si';
	var num = parseInt (prompt ("Ingrese un numero"));
	// <!--- fin de variables ---!>

	while (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI" || respuesta == "S" || respuesta == "s") {
		// operaciones con los numeros
		if (num == "0") {
			// ceros
			contCero = contCero + 1;
		} else if (num > "0") {
			// positivos (Sumo y cuento)
			sumPos = sumPos + num
			contPos = contPos + 1
		} else if (num < "0"){
			// negativos (Sumo y cuento)
			sumNeg = sumNeg + num
			contNeg = contNeg + 1
		}
		// ¿num es par?
		if (num % 2 == "0"){
			contPar = contPar + 1
		}
		// calculo promedios
		promNeg = sumNeg / contNeg
		promPos = sumPos / contPos
		// calculo diferencia
		dif = sumPos - sumNeg

		respuesta = prompt ("¿Desea ingresar otro numero?")
		if (respuesta == "si" || respuesta == "Si" || respuesta == "sI" || respuesta == "SI" || respuesta == "S" || respuesta == "s"){
			num = parseInt (prompt ("Ingrese un numero"));
		}
	}
	//Aqui viene lo bueno, Jovenes!
	document.write ("<h1><u>Positivos:</u></h1>");
	document.write ("</br>* Sumatoria:"+sumPos);
	document.write ("</br>* Cantidad:"+contPos);
	document.write ("</br>* Promedio:"+promPos);
	document.write ("<h1><u>Negativos:</u></h1>");
	document.write ("</br>* Sumatoria:"+sumNeg);
	document.write ("</br>* Cantidad:"+contNeg);
	document.write ("</br>* Promedio:"+promNeg);
	document.write ("<h1><u>Ceros:</u></h1>");
	document.write ("</br>* Cantidad:"+contCero);
	document.write ("<h1><u>Pares:</u></h1>");
	document.write ("</br>* Cantidad:"+contPar);
	document.write ("<h1><u>Diferencia:</u></h1>");
	document.write ("</br>* Positivos - Negativos:"+dif);
}//FIN DE LA FUNCIÓN