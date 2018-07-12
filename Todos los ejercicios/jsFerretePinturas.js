/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var formulaUno;
	var formulaDos;
	var formulaTres;
	formulaUno=32;
	formulaDos=1.8;
	temperaturaFahrenheit=document.getElementById('Temperatura').value;
	formulaTres=temperaturaFahrenheit-formulaUno;
	temperaturaCentigrados=formulaTres/formulaDos;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);
	alert(temperaturaFahrenheit + " grados Fahrenheit son " + temperaturaCentigrados + " grados Centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var formulaUno;
	var formulaDos;
	var formulaTres;
	formulaUno=32;
	formulaDos=1.8;
	temperaturaCentigrados=document.getElementById('Temperatura').value;
	formulaTres=temperaturaCentigrados*formulaDos;
	temperaturaFahrenheit=formulaTres+formulaUno;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);
	alert(temperaturaCentigrados + " grados Centígrados son " + temperaturaFahrenheit + " grados Fahrenheit");
	//volver a guardar
	//volver a guardar
}