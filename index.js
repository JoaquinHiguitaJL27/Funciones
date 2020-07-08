'use strict';
//paralelismo el cafe
//let nombreDelCafe ='';

//nombreDelCafe = prompt('Ingrese el café que desea');
/*
function hacerCafe (nombreDelCafe){

    return `Aquí esta su ${nombreDelCafe}, que lo disfrutes`
}


console.log(hacerCafe('Capuccino'));

//Función sin parametros

function saludo (){
    return `Hola`;

}

console.log(saludo());

//funcion parametros
let numeroUno = 0;
let numeroDos = 0;

numeroUno = parseInt(prompt('Ingrese el numero 1'));
numeroDos = parseInt(prompt('Ingrese el numero 2'));

function sumar (numeroUno, numeroDos){
    return numeroUno + numeroDos;

}

console.log(sumar(numeroUno, numeroDos));


let nombre = 'Paola';
let age = 26;
let haveChildren = false;
let stuides = {
    nombre: 'UDEA',
    años: 5,

}
let monts =['enero', 'Febrero', 'Marzo'];
console.log(age);
console.log(nombre);
console.log(haveChildren);
console.log(stuides);
console.log(monts[0]);*/

//funciones anonimas
const sum = function (a,b){
   return a + b;

}

console.log(sum(2, 3));

//parametros y valores retorno

function multiplicación (a,b){
    const result = a * b;

    return result;
}
const multiresult = multiplicación(5,6);
console.log(multiresult);
//console.log(multiplicación(5,6));

//Ambito de las variables

const varibaleGlobal = 'Soy joaquin';


//Asegurarnos que entra en un bloque if(condicionak)

if ( 2 === 2){
 const varibaleGlobal = 'realmente no soy joaquin';
 const variableNoGlobal = 'No soy Joaquinl'
 //devolver

 console.log(varibaleGlobal);
 console.log(variableNoGlobal);
}
//fuera de su bloque
console.log(varibaleGlobal);
//console.log(varialeNoGlobal);

/*'2' == 2 //verdadero
'2' === 2 //Falso*/

//podemos acceder a variables del ámbito superior

let globalVar = 'Hey, i am Joaquín';

if (2 === 2){
    globalVar = 'Hey, i am STILL Joaquín'

    //devolver
    console.log(globalVar);
}

console.log(globalVar);

//No genera conflicto el tener dos constamtes igual en diferentes funciones

function f1 (){
    const item = 1;
    return item;

}

function f2 (){
    const item = 2;
    return item;
}
console.log(f1());
console.log(f2());

//funciones flecha ECMAS6

const multi = (a,b) => {
    return a * b;

}

console.log(multi(3,4));

//lo mismo que tener:
/*const multi = function (a,b){
    return a*b;
}*/

//podemos evitar los parentesis cuando la funcion tenga un unico parametro 
 
let minutes = 0;

minutes = parseInt(prompt('Ingrese el minuto'));

const printWattingTime = minutes => { 

   return (`Please, wait ${minutes} minutes`);

}

console.log(printWattingTime(minutes));


//equivale a, usando palabras reservada function