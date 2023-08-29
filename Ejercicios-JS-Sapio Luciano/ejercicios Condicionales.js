/* Ejercicio 1 :

const num1= prompt ("introduce un número");
const num2= prompt ("introduce un segundo numero");
if (num1 > num2){
    console.log("El primero es mayor")
} else {
    console.log("El primero no es mayor")
}

*/

/* Ejercicio 2

const num1 = prompt("introduce un número")
const num2 = prompt("introduce un segundo número") 
if (num1 === num2) {
    console.log("Son iguales")
}else {
    console.log ("Son diferentes")
}
*/

/*Ejericio 3

const num1= prompt("introduce un numero:")
const num2= prompt("introduce un segundo numero")
if (num1 === num2) {
    console.log("Son iguales")
} else if (num1 > num2){
    console.log(num1+ " " + "Es Mayor")
} else {
    console.log(num2 + " " + "Es mayor")
}
*/

/*Ejercicio 4

const num1 = prompt("introduce un número")
const num2 = prompt("introduce un segundo número")
const num3 = prompt("introduce un tercer número")
    if(num1<num2 && num1<num3) {
        alert (num1 + " "+ "Es el mas chico")
    } else if (num2<num1 && num2<num3){
        alert(num2+ " "+ "Es el mas chico")
    } else {
        alert (num3+ " "+ "Es el mas chico")
    }
*/

/*Ejercicio 5
const persona1 = {
    nombre: prompt("Introduce el nombre de la primera persona: "),
    edad:prompt("Introduce la edad de la primera persona: "),
    altura: prompt("Introduce la altura de la primera persona (cm): ")
};

const persona2 = {
    nombre: prompt("Introduce el nombre de la segunda persona: "),
    edad: prompt("Introduce la edad de la segunda persona: "),
    altura: prompt("Introduce la altura de la segunda persona (cm): ")
};

if (persona1.altura > persona2.altura) {
    alert(persona1.nombre + " " + "es más alto que" + " " + persona2.nombre);
} else if (persona1.altura < persona2.altura) {
    alert(persona2.nombre + " " + "es más alto que" + " " + persona1.nombre);
} else {
    alert(persona1.nombre + " " + "y" + " " + persona2.nombre + " " + "tienen la misma altura");
}

if (persona1.edad > persona2.edad) {
    alert(persona1.nombre + " es mayor que " + persona2.nombre);
} else if (persona1.edad < persona2.edad) {
    alert(persona2.nombre + " es mayor que " + persona1.nombre);
} else {
    alert(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad");
}
*/

/* Ejercicio 6 
const persona = {
    nombre: prompt("Introduce tunombre: "),
    edad:prompt("Introduce tu edad: "),
    altura: prompt("Introduce tu altura (cm): "),
    vision: prompt("introduce tu vision del 1 al 10: "),
};

if (persona.edad >= 18 && persona.altura>150 && persona.vision>=8) {
    alert("Puedes conducir")
}else {
    alert("No puedes conducir")
}
*/

/* Ejercicio 7

const nombreDeCliente =prompt("Introduce tu nombre: ");
const tipoDePase=prompt("Introduce tu tipo de pase (vip o normal): ");
const poseeEntrada= prompt("¿Posee Entrada? (si o no): ");
    if(nombreDeCliente === "Luciano"){
        alert("Sea bienvenido, pase gratis por coincidencia de nombre")
    } else if (tipoDePase === "vip"){
        alert ("Bienvenido, " +nombreDeCliente+ " pase gratis por pase VIP")
    } else if(poseeEntrada === "si"){
        const usoDeEntrada = prompt("¿Desea usar su entrada? (si o no): ")
        if (usoDeEntrada === "si") {
            alert("Bienvenido, " +nombreDeCliente+ " Se utilizó la entrada con éxito")
        }
    }
                else {
            const deseaComprar = prompt("No Puedes Ingresar sin una entrada ¿Desea Comprar una? (si o no): ");
            if (deseaComprar === "si") {
                const dineroDisponible =prompt("Introduce tu dinero disponible: ");
                if (dineroDisponible >= 1000) {
                    alert("Venta exitosa, sea bienvenido "+nombreDeCliente);
                } else {
                    alert("El monto ingresado no es suficiente");
                }
            } else {
                alert("Gracias por visitarnos, pero no puede ingresar sin entrada, vuelva pronto");
            }
        }

*/

/*ejercicio 8
const numeroIncognita= 5
const numeroIngresado1= prompt("Ingresa un numero del 1 al 10 y adivina el numero que tengo en mente:")
if (numeroIngresado1 === numeroIncognita){
    alert("Ganaste, has adivinado el número.")
} else if (numeroIngresado1<numeroIncognita){
    alert("El numero ingresado es menor, vuelve a intentarlo.")
} else {
    alert("El numero ingresado es mayor, vuelve a intentarlo.")
}

const numeroIngresado2= prompt("Ingresa un numero del 1 al 10 y adivina el numero que tengo en mente:")
if (numeroIngresado2 === numeroIncognita){
    alert("Ganaste, has adivinado el número.")
} else if (numeroIngresado2<numeroIncognita){
    alert("El número ingresado es menor, vuelve a intentarlo.")
} else {
    alert("El número ingresado es mayor, vuelve a intentarlo.")
}
const numeroIngresado3= prompt("Estoy pensando en un número del 1 al 10 ¿Cuál crees que sea?: ")
if (numeroIngresado3 === numeroIncognita){
    alert("Ganaste, has adivinado el número.")
} else if (numeroIngresado3<numeroIncognita){
    alert("Haz perdido mejor suerte la próxima.")
} else {
    alert("Haz perdido mejor suerte la próxima.")
}

*/

/*Ejercicio 9

const edad = prompt("Introduce tu edad (números): ")
if(edad<=12){
    alert("Eres un infante")
} else if (edad>12 && edad<=18){
    alert ("Eres un adolecente")
} else if (edad>18 && edad<=45){
    alert ("Eres un adulto joven")
} else if (edad>48 && edad<=100){
    alert ("Eres un anciano")
} else {
    const viejardo=prompt("¿De verdad tienes esa edad?:  ")

}
*/


/* Ejercicio 10

const eleccion1 = prompt("¿que eliges? (piedra, papel o tijeras): ")
const eleccion2 = prompt("¿que eliges? (piedra, papel o tijeras): ")
 
if (eleccion1 === eleccion2) {
    alert("Han empatado, elijan de vuelta")
} else if (eleccion1 === "piedra" && eleccion2 === "tijeras") {
    alert ("Ganó el jugador 1")
}  else if (eleccion1 === "piedra" && eleccion2 === "papel") {
    alert ("Ganó el jugador 2")
}   else if (eleccion1 === "tijeras" && eleccion2 === "papel") {
    alert ("Ganó el jugador 1")
}    else if (eleccion1 === "tijeras" && eleccion2 === "piedra") {
    alert ("Ganó el jugador 2")
}  else if (eleccion1 === "papel" && eleccion2 === "piedra") {
    alert ("Ganó el jugador 1")
}    else if (eleccion1 === "papel" && eleccion2 === "tijeras") {
    alert ("Ganó el jugador 2")
}  else {
    alert("Un jugador a hecho trampa")
}
*/

/* ejercicio 11

const color= prompt("Introduzca un color")
switch (color) {
    case "Negro":
        alert("Falta de color.")
    break;
    case "Blanco":
        alert("Falta de color.")
    break;
    case "Verde.":
        alert("El color de la naturaleza.")
    break;
    case "Azul":
        alert("El color del agua.")
    break;
    case "Amarillo":
        alert("El color del sol.")
    break;
    case "Rojo":
        alert("El color del fuego")
    break;
    case "Marrón":
        alert("El color de la tierra")
    break;
    default:
        alert("Excelente elección, no lo teníamos pensado")

}
*/

/* EJERCICIO 12 
const num1 = parseFloat(prompt("Introduce el primer número: "));
const num2 = parseFloat(prompt("Introduce el segundo número: "));
const operacion = prompt("Introduce la operación (suma, resta, multiplicación, división): ");

let resultado;

if (operacion === "suma") {
    resultado = num1 + num2;
    alert( "resultado:"+ resultado);
} else if (operacion === "resta") {
    resultado = num1 - num2;
    alert("resultado:"+ resultado);
} else if (operacion === "multiplicación") {
    resultado = num1 * num2;
    alert("resultado:"+ resultado);
} else if (operacion === "división") {
    if (num2 === 0) {
        alert("SYNTAX ERROR");
    } else {
        resultado = num1 / num2;
        alert("resultado:"+ resultado);
    }
} else {
    alert("Operación no válida");
}
*/





/* Ejercicio 13


const nombre = prompt("Introduce tu nombre: ");
const apellido = prompt("Introduce tu apellido: ");
const dni = prompt("Introduce tu número de DNI (sin puntos ni comas): ");
const fechaNacimiento = prompt("Introduce tu fecha de nacimiento (dd/mm/aaaa): ");
const domicilio = prompt("Introduce tu domicilio: ");

const mensaje = "Los datos ingresados son:\n" +
    "Nombre: " + nombre + "\n" 
    +"Apellido: " + apellido + "\n" 
    +"DNI: " + dni + "\n" 
    +"Fecha de nacimiento: " + fechaNacimiento + "\n" 
    +"Domicilio: " + domicilio;
alert(mensaje);


const confirmacion = prompt("¿Están correctos los datos? (si o no): ");

if (confirmacion === "si") {
    const documentoNacionalDeIdentidad = {
        Nombre: nombre,
        Apellido: apellido,
        DNI: dni,
        Fecha_de_nacimiento: fechaNacimiento,
        Domicilio: domicilio
    };
    console.table(documentoNacionalDeIdentidad);
    alert("Registro exitoso");
} else {
    alert("Vuelva a intentarlo en 1 mes");
}

13*/




