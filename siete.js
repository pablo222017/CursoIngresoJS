/*
Maria F 15
Jose M 33
Fer F 25
*/
//DENTRO DE UN WHILE VOY A PEDIR LOS DATOS. PRIMERO PIDO EL NOMBRE, LUEGO EL SEXO Y DESPUES LA EDAD, Y VALIDAR CADA UNO DE ELLOS
function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador=0
	while (contador < 3) 
	{
		nombre=prompt("Ingrese su nombre");
		sexo=prompt("Ingrese su sexo");
		while (sexo != "f" && sexo != "m") 
		{
			sexo=prompt("Error , ingrese un sexo");
		}
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while (isNaN(edad) || edad > 100 || edad < 0) 
		{
			edad=prompt("Edad invalida");
			edad=parseInt(edad);
		}
	contador++;
	}
	if 
	{
		
	}
}
