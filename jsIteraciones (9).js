function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';
	//maximo=-999999;
	//minimo=999999;

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if (contador == 1) 
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{
			if (numeroIngresado<maximo)
			{
				maximo=numeroIngresado;
			}
			if (numeroIngresado>maximo)
			{
				minimo=numeroIngresado;
			}
		}	
		
		respuesta=prompt("Ingrese no para salir");
	}
	console.log(maximo);

/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.

*/
}//FIN DE LA FUNCIÓN