function mostrar()
{
	/*var precio;
	var porcentaje;
	var descuento;
	var precioFinal;
	precio=prompt("Ingrese precio");
	porcentaje=prompt("Ingrese porcentaje");
	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);
	descuento=precio*(porcentaje/100);
	precioFinal=precio-descuento;
	document.getElementById('elPrecioFinal').value=precioFinal;
	//volver a guardar */
	var precio=prompt("Ingrese el precio");
	var porcentaje=20;
	var descuento;
	precio=parseInt(precio);
	descuento=precio-precio*porcentaje/100;
	document.getElementById('elPrecioFinal').value=descuento;
}
