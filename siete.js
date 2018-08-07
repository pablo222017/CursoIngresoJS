function mostrar()
{
	var contador=0;
	var nombre;
	var nota;
	var sexo;
	var contSexo=0;
	var cantVarones;
	var sumaNotas=0;
	var notaMin;
	var sexNotaMin;
	while (contador<5)
	{
		contador++;
		nombre=prompt("Ingrese el nombre del alumno");
		nota=prompt("Ingrese la nota del alumno");
		while (nota <0 || nota >9)
		{
			nota=prompt("Las notas deben oscilar entre 0 y 9, porfavor, ingrese la nota nuevamente");	
		}
		if (contador==1)
		{
			sumaNotas=nota;
			notaMin=nota;
		}else
		{
			sumaNotas=(sumaNotas=parseInt(sumaNotas))+(nota=parseInt(nota));	
		}
		sexo=prompt("Ingrese el sexo del alumno: Para Masculino escriba m, para femenino f");
		while (sexo!="f" && sexo!="m")
		{
			sexo=prompt("Sexo invalidor, porfavor, ingrese el sexo del alumno correctamente");
		}
		if (sexo=="m" && nota>=6)
		{
			contSexo++;
			cantVarones=contSexo;
		}
		if (notaMin>nota)
		{
			notaMin=nota;
			sexNotaMin=sexo;
		}	
	}
	alert("Los datos del alumno son: "+notaMin+" "+sexNotaMin+" "+sumaNotas/contador+" "+cantVarones);
}