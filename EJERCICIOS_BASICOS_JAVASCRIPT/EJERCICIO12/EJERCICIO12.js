//EJERCICIO 12: AUTOMOVIL DEFECTUOSO
let autos_defectuosos = [119, 179, 189, 195, 221, 780]
let opcion_cliente = Number(prompt("Ingrese el numero de modelo de su carro: "))
if(autos_defectuosos.includes(opcion_cliente)){
    alert("El automovil esta defectuoso, llevarlo al taller")
}else{
    alert("El automovil no esta defectuoso")
}