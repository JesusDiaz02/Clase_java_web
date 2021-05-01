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
/*let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "Jesus";
console.log("hola",nomb);
console.log('hola',nomb);
console.log(`hola`,nomb);
console.log("hola ${nomb}");
console.log('hola ${nomb}');
console.log(`hola ${nomb}`);*/

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

//operadores basicos
// operadores unarios y binarios


let a, b, res;
a = 5;
b = 2;
//binarios
res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; //mod
res = a ** b; //potencia

//alert('1' + 2); //12
//alert(1 + '2'); //12

//alert(2 + 2 + '1') ;//41
//alert('1' + 2 + 2); //122

//alert(2 - '1'); //1
//alert ('6' / '2'); //3
//alert ('6' / '2a'); //NaN

// operaion unaria 

a = 1;
console.log(+a);

a = -1;
console.log(+a);
console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");


a = "2";
b = "3";

console.log(+a + +b);
console.log(Number(a)+Number(b));

// operaion unaria -

a = 1;
console.log(-a);

a = -1;
console.log(-a);
console.log(-true);
console.log(-false);


//asignaciones

a = 2 + 3;
a = b = c = 2 + 3;
c = 2 + 3;
b = c;
a = b;
c = 3 - (a = b + 1);

//modificadore

a = a + 2;
a += 2;
a = a - 2;
a -= 2;

//incremento

// ++ incremento
// -- decremento

a = 2;
a ++;
console.log(a); //3

a = 2;
a --;
console.log(a); //1

// posicion del incremento o decremento

a = 1;
b  = ++ a;
console.log(b); //2

a = 1;
b = a ++;
c = a;
console.log(b); //1
console.log(c); //2


//comparaciones
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

let resultado = 2 >1

//comparaciones entre cadenas

console.log('Z' > 'A'); //true
console.log('Show' > 'show'); //flase
console.log('casa' > 'casas'); //false
console.log('a' > 'A');
console.log('carro' > 'cerro');

//1. la letra minuscula es mayor que la mayuscula
//2. la palabra con mas letras desppues de pasar la primera condicion es mayor que la de menos letras

//comparacion de diferentes tipos
//al comprar valores de diferentes tipos , JS convierte los valores a numeros
// el undefined y el null en las comparaciones de igualacion no estrictas
//actuan dferentes, 

a= 0,
b ='0';
boleano_a =Boolean(a);//false
boleano_b =Boolean(b);//true

console.log(a == b);//true
console.log('************');
console.log('2' > 1);//true
console.log('01'== 1);//true
console.log(true > 0);//true
console.log(false == 0);//true

console.log('******nan******');
//NaN
console.log('hola'>0);//false
console.log('hola'<0);//false
console.log('hola'==0);//false
console.log('*****undefined*******');

//undefined
console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined == 0);//false
console.log('******null******');


// null

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log('*******null y undefined*****');
//el undefined y el null en las comparaciones de igualacion no estrictas
//actuan diferentes: son iguales entre si, pero no a ningun otro valor

console.log(null == undefined); //true
console.log(null == 5);//false
console.log(undefined ==5);//false

console.log('*******no diferencias de 0 de falso*****');
console.log(0 == false);//true
console.log(''== false); //true

//igualacion estricta
console.log(0 === false);//false
console.log(  null === undefined);//false
console.log(null == undefined);//true

// sentencia if
console.log('*******if*****');
if(4 > 5) console.log('mensaje');

if(4 > 5){
    b = 5 + 3;
    console.log('mensaje');
}

if('45a'/3){
    console.log('no entro');
}
if('0'){
    console.log('entro');
}

if(4/2){
    console.log('entro');
}

if(1){
    console.log('entro o no entro?');
}

let edadx;

if(edadx){
    console.log('variable definida');
}else{
    console.log('variable indefinida')
}

//haga un algortimo que dado una edad imprima true si es mayor de edad
//false si no lo es

let edad_usuario = 17;
if(edad_usuario >=18){
    console.log(true);
}else{
    console.log(false)
}

console.log(edad_usuario>=18);

//operador ternario
//condicion ?operacion verdadera : operacion falsa
resultado = edad_usuario >=18 ? x =5 : x=7;

//operador logico
// OR
/*
v or v = v
v or f = v
f or v = v
f or f = f
*/

console.log('*****operador OR*****');
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false|| false);//false

if(4 ==4 || 2 > 5 ){
    console.log('verdadero');
}

//resultado = valor_uno || valor_dos||valor_tres;
//1. evalua los operandos de izq a der
//2. por cada operando, convierte el valor a booleano, si el resulado es true
//se detiene y retorna el valor original de ese operando.
//3. si todos los operandos ahn sido evaluados, (todos eran falsos)retorna el ultimo operadno

let  comparacion_booleana = true || false || true;
comparacion_booleana = '0' || '0';
comparacion_booleana = undefined || null || NaN || '';
comparacion_booleana = undefined || null || 3 || '';
comparacion_booleana = undefined || 'hola' || 3 || '';

console.log('*****operador AND*****');
console.log(true && true);//true
console.log(true && false);//true
console.log(false && true);//true
console.log(false && false);//false

if(4 ==4 && 2 < 5 ){
    console.log('verdadero');
}

//1. evalua los operandos de izq a der
//2. por cada operando, convierte el valor a booleano, si el resulado es true
//se detiene y retorna el valor original de ese operando.
//3. si todos los operandos ahn sido evaluados, (todos eran verdadero)retorna el ultimo operadno

let  comparacion_booleana_dos = true && false && true;
comparacion_booleana_dos = '0' && '0';
comparacion_booleana_dos = undefined && null && NaN && '';
comparacion_booleana_dos = undefined && null && 3 && '';
comparacion_booleana_dos = undefined && 'hola' && 3 && '';

// prevalencia u orden entre OR y AND

// a %% b || c && d

//negacion 
console.log(!true);
console.log(!false);
console.log(!!undefined);

// nullish o fusion de nulos
//resultafo = valor_uno ?? valor_dos ?? valor_tres;
//1. evalua los operadores de izq a dar
//2. por cada operando revisa si es null o undefined y regresa el primero 
//que no ea nulo ni undifined
//si todo los operandos han sido evaluados son nulos oundefined regrea el ultimmo.

a= null ?? undefined ?? null ?? 'hola' ?? null ?? 'carlos';
a= undefined?? undefined ?? null ?? null ?? null ?? null ;














