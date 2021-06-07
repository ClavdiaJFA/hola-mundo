alert("Este programa hace operaciones aritméticas entre dos números");

var eleccion = prompt("Ingrese el número de la operación que quiere realizar: (1 - Suma) (2 - Resta) (3 - División) (4 - Producto) ");

//Inicia condicional.
//Este condicional tiene varias cláusulas, todo depende del número que ingrese el usuario.

if(eleccion == 1){//Esta condición se lee, 'si la variable eleccion es igual a 1 entonces...'
   
    alert("Elegió suma");// Mensaje para indicar qué operación se eligió
    var a = prompt("Ingrese el primer número"); //El usuario tiene que ingresar los números que quiere operar.
    var b = prompt("Ingrese el segundo número");
    var c = a + b; // El resultado se guarda en esta variable. Así se define la suma.
    console.log("Este es el resultado de su suma: " + c);//El resultado se imprime en la consola.

} else if (eleccion == 2) { 
    alert("Elegió resta");
    var a = prompt("Ingrese el primer número");
    var b = prompt("Ingrese el segundo número");
    var c = a - b; // El resultado se guarda en esta variable. Así se define la resta.
    console.log("Este es el resultado de su resta: " + c);

} else if (eleccion == 3) { //El caso de la división está 'anidado'. Lo que quiere decir que tiene otro condicional en su interior.
    alert("Elegió división");
    var a = prompt("Ingrese el primer número");
    var b = prompt("Ingrese el segundo número");
    if(b != 0){//Esta condición se lee, 'si la variable b es distinta de cero entonces...'
        var c = a/b; // El resultado se guarda en esta variable. Así se define la división.
        console.log("Este es el resultado de su división: " + c);
    }else{//Aquí nos lleva si la variable b es igual a cero. Recordemos que en matemáticas no podemos dividir entre cero.
        console.log("Operación inválida");
    }

} else if (eleccion == 4) {
    alert("Elegió producto");
    var a = prompt("Ingrese el primer número");
    var b = prompt("Ingrese el segundo número");
    var c = a * b; // El resultado se guarda en esta variable. Así se define la multiplicación.
    console.log("Este es el resultado de su producto: " + c);
} 
// FIN