alert("Programa de requisitos de Generation");

//Ingreso de datos por el usuario en la página WEB después del mensaje inicial.
var edad = prompt("Indica tu edad");

// A partir de aquí ya no se verá en la página. 

//Inicio del condicional.

if(edad >= 18 && edad <30){ //En esta línea de código se coloca mayor o igual que 18 pero menor de 29. 
    console.log("Usted ha sido aceptado en el programa de Generation");//Esto pasará en la consola de la página WEB si se cumple la condición.
    alert ("Usted ha sido aceptado en el programa de Generation");

}else{//Se coloca como el caso contrario de la condición.
    console.log("Usted no cumple los requisitos"); //Esto pasará en la consola de la página WEB si no se cumple la condición.
    alert ("Usted no cumple con los requisitos");
}



