//EJERCICIO 3: EMPRESA DE ALQUILER DE LAVADORAS. DETERMINAR VALOR DE ALQUILER
alert("EJERCICIO 3")
let lavadoraPequeña = 3000
let lavadoraGrande = 4000
let cantidadLavadoras = Number(prompt("Ingrese la cantidad de lavadoras que desea alquilar:"))
let tipoLavadora = prompt("Que tipo de lavadora necesita?: Grande = 1    Pequeña = 2")
let cantidadHoras = Number(prompt("Ingrese la cantidad de horas que desea alquilar:"))
if(cantidadLavadoras > 3){
    lavadoraGrande *= 0.97
    lavadoraPequeña *= 0.97
}
if(tipoLavadora == 1){
    alert("El valor del alquiler es de: $"+ lavadoraGrande * cantidadHoras * cantidadLavadoras +" pesos.")
}else if(tipoLavadora == 2){
    alert("El valor del alquiler es de: $"+ lavadoraPequeña * cantidadHoras * cantidadLavadoras +" pesos.")
}else{
    alert("Datos incorrectos")
}