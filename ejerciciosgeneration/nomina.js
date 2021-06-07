alert("Este programa calcula su sueldo quincenal y mensual"); 

//Ingreso de datos por el usuario en la página WEB después del mensaje inicial.
var SalarioDiario = prompt("Ingresa tu salario diario"); 

// A partir de aquí ya no se verá en la página. 

//Variables definidas
var DiasLaboradosQ = 15; // Variable definida de los días de trabajo a la quincena.
var DiasLaboradosM = 30;// Variable definida de los días de trabajo al mes.

// Calculo del sueldo bruto
var SueldoBrutoQ = SalarioDiario * DiasLaboradosQ;//Se hace la operación para calcular el sueldo bruto quincenal.
var SueldoBrutoM = SalarioDiario * DiasLaboradosM;// Se hace la operación para calcular el sueldo bruto mensual.

//Calculo de impuesto ISR
var ISR_quincenal = SueldoBrutoQ * 0.30;//El ISR es el 30% del sueldo bruto. 30% es igual a 0.30 en deciamal.
var ISR_mensual = SueldoBrutoM * 0.30;

//Calculo de impuesto IMSS
var IMSS_quincenal = SueldoBrutoQ * 0.10;//El IMSS es el 10% del sueldo Neto.10% es igual a 0.10 en decimal.
var IMSS_quincenal = SueldoBrutoM * 0.10;

//Calculo de impuestos totales
var Impuestos_Q = ISR_quincenal + IMSS_quincenal; //Lo impuestos totales son la suma de ISR más IMSS.
var Impuestos_M = ISR_mensual + ISR_mensual;

//Calculo del Sueldo neto
var SueldoNetoQ = SueldoBrutoQ - Impuestos_Q; //El sueldo neto se obtiene restándole los impuestos al sueldo bruto.
var SueldoNetoM = SueldoBrutoM - Impuestos_M;

//Resultado
//Visualización de datos en la consola de la página WEB. Todo lo que ocupe 'console.log()' se verá en la consola.
console.log("Mi salario quincenal bruto es: " + SueldoBrutoQ);
console.log("Mi salario mensual bruto  es: " + SueldoBrutoM);
console.log("Mi salario neto quincenal es: " + SueldoNetoQ);
console.log("Mi salario neto mensual es: " + SueldoNetoM); 