//EJERCICIO 9: TRES ANGULOS DEL TRIANGULO = 180
alert("Ingrese 3 angulos de un triangulo para verificar si es válido.")
let ang1 = Number(prompt("Ingrese el angulo 1: "))
let ang2 = Number(prompt("Ingrese el angulo 2: "))
let ang3 = Number(prompt("Ingrese el angulo 3: "))
if((ang1 + ang2 + ang3) == 180){
    alert("Es un triangulo valido!!")
}else{
    alert("INVALIDO")
}