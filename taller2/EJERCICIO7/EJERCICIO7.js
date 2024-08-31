//EJERCICIO 7: APOYO DE GOBIERNO / HOMBRE MUJER
let sexo = prompt("¿Es hombre o mujer? 1.Hombre 2.Mujer")
let edad = Number(prompt("Ingrese su edad:"))
let subsidio = 0
if(sexo == 2 && edad > 50){
    subsidio = 120000
}else if(sexo == 2 && edad > 30 && edad < 50){
    subsidio = 100000
}else if(sexo == 1){
    subsidio = 40000
}else{
    subsidio ="ERROR"
}
alert("El valor de su subsidio es de: $"+ subsidio + " Pesos.")
