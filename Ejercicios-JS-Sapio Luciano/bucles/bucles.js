//ejercicio 1
//const num = parseFloat(prompt ("ingese un numero del 1 al 10"))
//for (i=0; i<num; i++)
//    console.log(i)

//ejercicio 2
//const num = parseFloat(prompt("ingresa un número de 1 a 10"))
//for (i=0; i<=10; i++)
//console.log (num+"x"+i+"="+ i*num)

//ejercicio 3
// let num = parseFloat(prompt("ingrese un numero"));
// let suma = 0;
// while (num>0){
//    suma += num;
//    num = parseInt(prompt("ingrese otro numero"))
// }
// console.log ("la suma total es de "+suma)

//ejercicio 4

// let num; 
// let suma = 0;
// do  {
//  num= parseInt(prompt("ingrese un numero: "));
// suma+= num;
 
// } while (num>0);
// console.log("la suma totoal es de: " +suma)

// ejercicio 5
// let intentos = 3;
// let num = parseFloat(prompt("ingrese un numero del 1 al 10 y adivine el numero que tengo en mente: "));
// let adivinanza = 5
// while (intentos>0) {
//     if (num === adivinanza){
//         alert("Enhorabuena haz adivinado")
//     }
    
//     else if (num>adivinanza) {
//         num = parseInt (prompt("te pasaste intenta con un numero mas chico: "))
//         intentos--
//     }
//     else if (num<adivinanza){
//         num = parseInt (prompt("te quedaste corto intenta con un numero mas grande: "))
//         intentos--
//     } 
// }
// if (intentos === 0) {
//     alert("Te haz quedado sin intentos");
// }


// ejericio 6

// let num = parseFloat(prompt("ingrese un numero: "))
// let divisor = num 
// while (divisor>0){
//     if (num%divisor ==0){
//         console.log(divisor)
//     }
//     divisor--
// }

// ejercicio 7
// const colores = ["rojo", "verde", "azul", "amarillo", "violeta", "celeste", "naranja",];
// for(color of colores){
//     console.log(color);
// }

// ejercicio 8

// const arrayOfNums = [3,5,6,9,10,15]

// for(number of arrayOfNums){
//     console.log(`el numero es ${number} y su doble es ` + number*2)
// }


// ejercicio 9
// const familia = [
//     {
//       nombre: 'Juan',
//       apellido: 'Pérez',
//       edad: 40,
//       rol: 'padre'
//     },
//     {
//       nombre: 'María',
//       apellido: 'Pérez',
//       edad: 38,
//       rol: 'madre'
//     },
//     {
//       nombre: 'Lucas',
//       apellido: 'Pérez',
//       edad: 12,
//       rol: 'hijo'
//     },
//     {
//       nombre: 'Sofía',
//       apellido: 'Pérez',
//       edad: 8,
//       rol: 'hija'
//     }
//   ];
//   for (integrante of familia) {
//     console.log(`Hola soy ${integrante.nombre}, tengo ${integrante.edad} y mi rol en la familia es: ${integrante.rol}`)
//   }


// ejericio 10
// const familia =  {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 40,
//     rol: 'padre',          
//     nacionalidad: "Argentino",
// };

// for (categories in familia){
//     console.log(categories)
// }


// ejercicio 11
// const persona =  {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 40,
//     rol: 'padre',          
//     nacionalidad: "Argentino",
// };
// for (const key in persona) {
//     console.log(persona[key]);
//   }

// ejercicio 12
// let num = parseFloat(prompt("ingrese un numero"));
// let sumaPar = 0;
// let sumaImpar =0;
// while (num>0){
//     if(num%2==0){
//         sumaPar += num;
//     }else {
//         sumaImpar += num;
//     }
//    num = parseInt(prompt("ingrese otro numero"))
// }
// console.log ("la suma total de pares es de: "+sumaPar)
// console.log ("la suma total de impares es de: "+sumaImpar)

// ejercicio 3
// const numeros = [3, 5, 1, 8, 10, 15, 7, 13, 4, 9];
// let maximo = numeros[0];

// for (const numero of numeros) {
//   if (numero > maximo) {
//     maximo = numero;
//   }
// }
// alert(`el numero mas grande es: ${maximo}` )
