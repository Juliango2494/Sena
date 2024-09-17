//EJERCICIO 5: PROMEDIO NOTAS DE 5 MATERIAS
let fisica = 0
let quimica = 0
let biologia = 0
let matematicas = 0
let informatica = 0
fisica = Number(prompt("Ingresa la nota obtenida en FISICA: "))
quimica = Number(prompt("Ingresa la nota obtenida en QUIMICA: "))
biologia = Number(prompt("Ingresa la nota obtenida en BIOLOGIA: "))
matematicas = Number(prompt("Ingresa la nota obtenida en MATEMATICAS: "))
informatica = Number(prompt("Ingresa la nota obtenida en INFORMATICA: "))
let promNotas = (fisica + quimica + biologia + matematicas + informatica) / 5
alert("El promedio de sus notas es de: " + promNotas)
if(promNotas >= 0 && promNotas < 6){
    alert("La calificación es mala :( ")
}else if(promNotas >= 6 && promNotas <= 8){
    alert("La calificacion es buena :) ")
}else if(promNotas > 8){
    alert("La casificacion es Excelente :D ")
}

//**********MEJORANDO EL CODIGO PARA EL EJERCICIO 5**********
let materias = {
}
let flag = true
while(flag){
    let opcion_menu = prompt("Desea ingresar materias y notas? 1)SI  2)NO")
    if(opcion_menu == 1){
        let ing_materia = prompt("Ingresa una materia: ")
        let ing_nota = Number(prompt("Ingresa la nota de la materia " + ing_materia))
        materias[ing_materia] = ing_nota
    }else if(opcion_menu == 2){
        flag = false
    }
}
let sum_lista = 0
for(let i in materias){
    sum_lista += materias[i]
}
let prom_lista = sum_lista / Object.keys(materias).length
alert("El promedio de sus notas es de: " + prom_lista)
if(prom_lista >= 0 && prom_lista < 6){
    alert("La calificación es mala :( ")
}else if(prom_lista >= 6 && prom_lista <= 8){
    alert("La calificacion es buena :) ")
}else if(prom_lista > 8){
    alert("La casificacion es Excelente :D ")
}
