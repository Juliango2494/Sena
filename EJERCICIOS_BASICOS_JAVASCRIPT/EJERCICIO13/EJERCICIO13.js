//EJERCICIO 13: APLICACION CELUMOVIL PAQUETES DE DATOS
let tigo_minuto = 200
let claro_minuto = 100
let movistar_minuto = 250
let operador = prompt("Seleccione su operador: 1)TIGO  2)CLARO  3)MOVISTAR")
let minutos_cons = Number(prompt("Ingrese la cantidad de minutos consumidos"))
if(operador == 1){
    alert("Valor a pagar = $"+ minutos_cons*tigo_minuto + " pesos.")
}else if(operador == 2){
    alert("Valor a pagar = $"+ minutos_cons*claro_minuto + " pesos.")
}else if(operador == 3){
    alert("Valor a pagar = $"+ minutos_cons*movistar_minuto + " pesos.")
}else{
    alert("ERROR")
}