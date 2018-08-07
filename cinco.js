function mostrar()
{
	var planeta=prompt("Ingrese el nombre de un planeta del sistema solar")
	switch (planeta)
	{
		case "tierra":
		alert("Acá vivimos");
		break;
		case "mercurio":
		case "venus":
		alert("Acá hace mas calor");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		alert("Acá hace mas frio");
		break;
		default:
		alert("No es un planeta valido, porfavor, ingrese un planeta valido");
	}

}
//document.getElementById('FormIngreso').value="caca";
/*
Mercurio
Venus
Tierra
Marte
Júpiter
Saturno
Urano
Neptuno
Enunciado:
Bienvenidos. 
(SWITCH)pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/