function saludar (nombre) {
    console.log("Hola" +" "+nombre+ "!")
} 
saludar("Luciano")

function multiplicar (num1, num2) {
    console.log(num1 * num2)
}
multiplicar(3, 7)

function areaTriangulo (num1, num2) {
    console.log((num1 * num2) /2)
}
 areaTriangulo (5, 6)

 function perimetroTriangulo (num1, num2, num3) {
    console.log(num1+num2+num3)
 }
 perimetroTriangulo (2,3,5)

 function esMayorDeEdad (num) {
    if (num >= 18){
        console.log("Eres mayor de edad")
    } else {
        console.log("Eres menor de edad")
    } 
 }
esMayorDeEdad (18)
esMayorDeEdad (17)

function calcularImpuesto(ingreso) {
    let impuesto;
    if (ingreso <= 10000) {
        impuesto = ingreso * 0.10;
    } else if (ingreso > 10000 && ingreso <= 20000) {
        impuesto = ingreso * 0.15;
    } else {
        impuesto = ingreso * 0.20;
    }
    console.log (impuesto);
}
calcularImpuesto(50000)

function verificarDia(num) {
    let dia;
    switch (num){
        case 1:
            dia = "Es un día laboral"
            break;
        case 2:
            dia = "Es un día laboral"
            break;
        case 3:
            dia = "Es un día laboral"
            break;
        case 4:
            dia = "Es un día laboral"
            break;
        case 5:
            dia = "Es un día laboral"
            break;
        case 6:
            dia="Es un fin de semana"
        case 7:
            dia="Es un fin de semana"
            break;
            default:
                dia="No es un día valido"
    } console.log(dia)
}
verificarDia (1)
verificarDia (6)
verificarDia (8)

