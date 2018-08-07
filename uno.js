
function mostrar()
{
	var ancho=prompt("Ingrese el ancho del rectangulo"); 
	var largo=prompt("Ingrese el largo del rectangulo"); 
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	var perimetro=ancho*2 + largo*2;
	alert("El perimetro de su rectangulo es: " + perimetro);
}
