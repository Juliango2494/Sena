//EJERCICIO 14: APLICACION SANDWICH 
let sandwich_peq = 6000
let sandwich_gran = 12000
let toc_pav = 3000
let queso = 2500
let usr_tamaño = prompt("Seleccione el tamaño del Sandwich: 1)Grande  2)Pequeño")
let total_sandwich = 0
let mensaje_sandwich = "Su pedido es un Sadwich "
if(usr_tamaño == 1){
    total_sandwich = sandwich_gran
    mensaje_sandwich += "(Grande) "
}else if(usr_tamaño == 2){
    total_sandwich = sandwich_peq
    mensaje_sandwich += "(Pequeño) "
}
let acumulado_ingred = []
let menu_inicio = true
while(menu_inicio){
    alert("Seleccione los ingredientes adicionales")
    let usr_adicion = prompt("1)Jalapeño 2)tocineta 3)pavo 4)queso 5)salir")
    if(usr_adicion == 5){
        menu_inicio = false
    }else if(usr_adicion == 2 || usr_adicion == 3){
        total_sandwich += toc_pav
        acumulado_ingred.push(" Toc_pav ")
    }else if(usr_adicion == 4){
        total_sandwich += queso
        acumulado_ingred.push(" Queso ")
    }else if(usr_adicion == 1){
        acumulado_ingred.push(" Jalapeño ")
    }
}
alert(mensaje_sandwich + " con los ingredientes " + acumulado_ingred)
alert("El valor total de su pedido es de: $"+ total_sandwich + " pesos.")

let ejemplo = prompt("").toLowerCase()