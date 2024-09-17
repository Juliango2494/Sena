//EJERCICIO 11: RESOLUCION DE PROBLEMAS EN COMPUTADOR 
let problema1 = prompt("EL COMPUTADOR EMPITE UN PITIDO? 1.SI  2.NO")
let problema2 = prompt("EL DISCO DURO GIRA? 1.SI  2.NO")
if(problema1 == 1 && problema2 == 1){
    alert("Pongase en contacto con el tecnico de apoyo")
}else if(problema1 == 1 && problema2 == 2){
    alert("Verificar contactos de la unidad")
}else if(problema1 == 2 && problema2 == 2){
    alert("Traiga la computadora para repararla en la central")
}else if(problema1 == 2 && problema2 == 1){
    alert("Compruebe las conexiones de altavoces")
}