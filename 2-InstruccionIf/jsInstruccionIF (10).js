function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    
	var numRandom;

	numRandom = Math.floor((Math.random() * 10) + 1);
	/*Funcion Auxiliar
	console.log (numRandom);*/
	if (numRandom >= 9){
		alert ("Nota: "+numRandom+" / EXCELENTE.");
	} else if (numRandom < 4){
		alert ("Nota: "+numRandom+" / Vamos, la proxima se puede");
	} else {
		alert ("Nota: "+numRandom+" / APROBÓ");
	}

}//FIN DE LA FUNCIÓN