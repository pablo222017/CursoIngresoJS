function mostrar()
{
	var marca;
	var peso;
	var tempAlmacen;
	var respuesta="si";
	var tempPares=0;
	var contador=0;
	var pesoMin;
	var pesoMax;
	var marcaPesoMax;
	var promPeso=0;
	//var sumaParcial=0;
	peso=parseInt(peso);
	tempAlmacen=parseInt(tempAlmacen);
	respuesta=prompt("¡Bienvenido! Si desea ingresar al programa, escriba ¡si!");
	while (respuesta=="si")
	{
		contador++;
		marca=prompt("Ingrese la marca del producto");
		peso=prompt("Ingrese el peso del producto");
		while (peso<1 || peso>100)
		{
			peso=prompt("El valor del peso debe ser entre 1 y 100 inclusive");
		}
		if(contador==1)
		{
			marcaPesoMax=marca;
			pesoMax=peso;
			pesoMin=peso;
			promPeso=peso;
		}
		peso=parseInt(peso);
		promPeso=parseInt(promPeso);
		promPeso=promPeso+peso;
		if (peso>pesoMax)
		{
			pesoMax=peso;
			marcaPesoMax=marca;
		}
		pesoMax=parseInt(pesoMax);
		if (peso<pesoMin)
		{
			pesoMin=peso;
		}
		pesoMin=parseInt(pesoMin);
		tempAlmacen=prompt("Ingrese el valor de la temperatura del producto");
		while (tempAlmacen<-30 || tempAlmacen>30)
		{
			tempAlmacen=prompt("Las temperaturas deben oscilar entre -30° y 30°");
		}
		if (tempAlmacen%2 == 0)
		{
			tempPares++;
		}
		respuesta=prompt("Si desea continuar, excriba ¡si!");
	}
	console.log("el peso maximo es " +pesoMax);
	console.log("el peso minimo es " +pesoMin);
	console.log("el producto mas pesado es " +marcaPesoMax);
	console.log("la cantidad de temperaturas pares es: " +tempPares);
	console.log("la suma total de los pesos es "+promPeso);
	console.log("el promedio total de los pesos es "+promPeso/contador);
}