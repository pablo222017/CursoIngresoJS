function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioConDescuento;
	var iva;
	var resultadoFinal;
	precio=prompt("ingrese el precio");
	porcentaje=prompt("ingrese porcentaje de descuento");
	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);
	descuento=precio * (porcentaje/100);
	precioConDescuento=precio - descuento;
	iva=precio * (21/100);
	descuento=parseInt(descuento);
	precioConDescuento=parseInt(precioConDescuento);
	iva=parseInt(iva);
	alert("el valor del descuento es de " + descuento + "$, el valor del precio con el descuento es de " + precioConDescuento + "$, el valor del iva es de $" + iva);
	resultadoFinal=precioConDescuento + iva;
	document.getElementById('elPrecioFinal').value="$" + resultadoFinal;
	//volver a guardar
}
