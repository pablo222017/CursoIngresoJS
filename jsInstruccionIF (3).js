function mostrar()
{
//tomo la edad 
	var edadUno;
	var edadDos;
	edadDos=17;
	edadUno=document.getElementById('edad').value;
	edadUno=parseInt(edadUno);
	edadDos=parseInt(edadDos);
	if (edadUno>edadDos) {
		alert("Usted es mayor de edad");
	}
	else {
		alert("Usted es menor de edad");
	}
}//FIN DE LA FUNCIÓN