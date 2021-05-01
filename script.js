//hola mundo
//alert('soy javascript');

//comentarios

//comentario de linea
/*comentario de mas
de una linea */


//sentencias

//alert('hola'); alert('mundo');

//alert('hola');
//alert('mundo');

//alert('hola')
//alert('mundo')

//variables

let mensaje;
mensaje ="hola mundo"
alert(mensaje)

//let a=5;
//let b=6;
//let la suma = a + b;
//console.log("el resultado de la suma es: ", suma)

let nombre = "Jesus";
let nombre2= nombre;

nombre2= "carlo";
console.log("el nombre uno es:",nombre);
console.log("el nombre dos es:", nombre2);


//nombrar variable con camel case
nombreunno = "jesus";
nombredos = "manuel";

//nombrar con underscore
nombre_uno = "jesus";
nombre_dos = "manuel";

//nombres no comunes
let $ =1;
let _ =2;

//no se puede nombrar variable
/* let 1a =3;
let primer-nombre =4;*/

"use strict"
mensaje = "hola mundo";

//constante
const PI = 3.1416;
const COLOR_ROJO = "#fffff";
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

//const id_account = get_id_account(45);

//tipos de datos
// Dinamicamente tipado
let mensaje_dos ="hola";
mensaje_dos=12234

// Numero
let n = 123;
n = 12.456;

//Valores numericos epeciales Infinity, -Infinity y NaN

// Infinity: respresenta el infiinito matematico, es un valor especial que es mayor que cualquier numero;

console.log(1 / 0);
console.log(Infinity)

// NaN representa un error de calculo, es el resultado de una operacion
//matematica incorrecta o indefinida

console.log("no es un numero" / 2);

//NaN es pegajooso, cualquier operacion sobre NaN devuelve NaN

console.log("no es un numero" / 2 + 5);

//tipo de datos BigInt

//Valores enteros mayore, que (2^53-1)  o menor que -(2^53-1) 9.007.199.254.740.991


let numero_grande = 12243243543534534345n;
console.log("numero_grande");

//tipo string
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "Jesus";
console.log("hola",nomb);
console.log('hola',nomb);
console.log(`hola`,nomb);
console.log("hola ${nomb}");
console.log('hola ${nomb}');
console.log(`hola ${nomb}`);

// tipo booleano
 // true y false

let verdadero = true;
let falso = false;

let mayor =  4 > 1; //true

//tipo de dato null
//valo especial que no pertenece a ningun tipo de dato anterior.
//forma un tipo propio separado que contiene solo el valor null.

let edad = null;
console.log(edad);

// en JS null NO significa un objeto no existe
// es un solo valor especial que representa nada, vacio o calor desconocido

//valor undefined
// valor especial que no pertenece a ningun tipo de dato anterior
// el significado de undefinet significa valor no asignado

let edad_dos;
console.log(edad_dos);

// El operador typeof
/*console.log(typeof undefined);//undefined
console.log(typeof 0);//number
console.log(typeof true);//boolean
console.log(typeof 10n);//bigint
console.log(typeof "hola");//string

console.log(typeof(alert));//function
console.log(typeof(null));// object -ERROR DE JS
console.log(typeof(Math)); //object*/



//interacciones : alert, prompt, confirm

//let nombre_prompt = prompt('Digite el nombre', 'hola');
//alert(nombre_prompt);

//prompt('Digite el nombre');
//prompt('Digite el nombre', '')//solo para IE

//confirm

//let esHelado = confirm('¿te gusta el helado?');
//console.log(esHelado); //true si presionan ok y false si precionan cancelar


//conversion de tipos
//existen dos tipos de conversiones, explicita e implicita

//convertir a string

let valor = true; 
console.log(typeof valor);

valor = String(valor);// "true"
valor = String(false);//false
valor = String(null);//null
valor = String(undefined);//undefined
console.log(valor);
console.log(typeof valor);

//convertir a numero
// conversiones nuemerias ocurren automaticamemette en funciones matematicas y expresiones

//alert('6' / '2'); //3

let cadena = "123";
let num_cad = Number(cadena); //123

console.log(Number('hola'));

/* undefined -> NaN
null -> 0
true -> 1
false ->0
string '' -> 0
string 'hola'-> NaN
*/

// convertir  a booleano
 console.log(Boolean("hola"));

/* undefined -> false
null -> false
string " " -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true */

console.log(Boolean(String(0)));
console.log(Boolean(0));
























