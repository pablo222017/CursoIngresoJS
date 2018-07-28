function mostrar()
{
	var numero;
	var respuesta=true;
	var acumNegativos=0
	var acumPositivos=0	
	var contador=0;
	var contNegativos=0;
	var contPositivos=0;
	var promed
	//declarar contadores y variables 
	while(respuesta==true)
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		if (numero>0)
		{
			acumPositivos=acumPositivos+numero;
			contPositivos=contPositivos+1; //contPositivos=contPositivos++;
		}else
		{
			if (numero < 0)
			{
				acumNegativos=acumNegativos+numero;
				contNegativos=contNegativos+1
			}
		}
	}




}
//FIN DE LA FUNCIÓNE
/*enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
 2-Suma de los positivos. 
 3-Cantidad de positivos. 
 4-Cantidad de negativos.
 5-Cantidad de ceros. 
 6-Cantidad de números pares.
 7-Promedio de positivos.
 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/