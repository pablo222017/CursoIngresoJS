/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    /* SINTAXIS Y COMANDOS BASICOS 
    
    var: me permite generar una variable
    
    signo igual (=): me permite interactuar entre comandos y asignar valores a mis variables

    Punto y coma (;): cierra la linea de codigo escrita
    
    */ 
    
    /* COMANDOS PARA LOGRAR ENTRADAS Y SALIDAS 
    
    prompt:Nos permite ingresar un dato a travez de un cuadro de dialogos 
    
    document.getElementById("el numero").value
    
    document: comando que nos permite interactuar con la pagina web
    
    getElementById: me permite ingresar un dato a travez de un objeto especifico de la pagina web
    
    .value: permite tomar el valor que ingrese por el objeto que especifique a travez del ID
    
    */

    /* El signo igual nos permite interactuar entre comandos, pero dependiendo del orden de los comandos, su funcion cambiara, ejemplo:

    nombre=prompt("ingrese su nombre");

    Esta linea de codigo nos dice que estamos pidiendo ingresar un dato para darle valor a la variable nombre
    */

    //el signo mas en alert concatena valores, no los suma
    //parseInt: transforma la variable a un numero entero
    //resto (%) = me permite tomar el resto de una division

    var nombre;
    nombre=prompt("escriba su nombre");
    alert(nombre);



}

