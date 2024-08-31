//EJERCICIO 10: PRECIOS DE IMPRESION EN FOTOCOPIADORA
let cant_copias = Number(prompt("Ingrese la cantidad de copias a sacar: "))
let precio_copias = 0
if(cant_copias >= 0 && cant_copias < 500){
    precio_copias = 120
}else if(cant_copias >= 500 && cant_copias < 750){
    precio_copias = 100
}else if(cant_copias >= 750 && cant_copias < 999){
    precio_copias = 80
}else if(cant_copias >= 1000){
    precio_copias = 50
}else{
    precio_copias = "ERROR"
}
alert("El precio de cada copia es de: $"+ precio_copias + " pesos.")
alert("El total a pagar es de: $" + cant_copias*precio_copias + " pesos.")
