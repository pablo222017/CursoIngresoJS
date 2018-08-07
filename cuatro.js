function mostrar()
{	
	var numA=prompt("Ingrese un numero");
	var numB=prompt("Ingrese un numero");
	var resultado;
	numA=parseInt(numA);
	numB=parseInt(numB);
	if (numA==numB)
	{
		alert(numA+""+numB);
	}else if (numA>numB)
	{
		alert(resultado=numA-numB);
	}else
	{
		alert(resultado=numA+numB);
		if(resultado>10)
		{
			alert("la suma es "+resultado+" y supero el 10");
		}
	}
}	