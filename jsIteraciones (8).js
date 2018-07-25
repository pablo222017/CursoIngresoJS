/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta=='si')
	{
		contador++;

		numeroIngresado=prompt("ingrese el numero #"+contador+" : ");
		numeroIngresado= parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;	
		}
		if(numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado;	
		}

		respuesta=prompt("quiere continuar , elija  si!");
	}
	

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN