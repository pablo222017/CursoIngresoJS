function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");
	if (numeroUno==numeroDos) {
		alert(numeroUno+numeroDos); 
	}
	if (numeroUno>numeroDos) { 
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		resultado=numeroUno-numeroDos;
		alert(resultado);
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		resultado=numeroUno+numeroDos;
		if (resultado>10) {
		alert("la suma es " + resultado + " y supero el 10");
		}
	}
}