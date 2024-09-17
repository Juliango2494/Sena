/// EJERCICIO 1: CALCULAR EL VALOR DE NOMINA SEMANAL DE XXXX TRABAJADOR
alert("EJERCICIO 1: CALCULAR SALARIO SEMANAL")
let salario1 = 30000
let salario2 = 33000
let diasTrabajados = prompt("Ingrese los dias trabajados:")
let totalHoras = diasTrabajados * 8

if(totalHoras > 0 && totalHoras < 11){
    alert("El salario semanal es de: "+ totalHoras * salario1 + " pesos.")
}else if(totalHoras > 10){
    alert("El salario semanal es de: "+ totalHoras * salario2 + " pesos.")
}else{
    alert("Ingreso un numero negativo")
}
    