//EJERCICIO 6: PROGRAMA PARA VERIFICAR NUMERO MAYOR EN 3 NUMEROS
let num1 = Number(prompt("Ingrese numero 1:"))
let num2 = Number(prompt("Ingrese numero 2:"))
let num3 = Number(prompt("Ingrese numero 3:"))
if(num1>num2 && num1>num3){
    alert("El numero mas grande es: "+ num1)
}else if(num2 > num1 && num2 > num3){
    alert("El numero mas grande es: "+ num2)
}else if(num3 > num1 && num3 > num2){
    alert("El numero mas grande es: "+ num3)
}else{
    alert("Datos iguales o erroneos")
}
//**********MEJORANDO EL CODIGO PARA EJERCICIO 6*************
 let list_numbers = []
 let flag = true
 while(flag){
    let input_numbers = Number(prompt("Desea ingresar numeros? 1.SI 2.NO"))
    if(input_numbers == 1){
        let numero_ingresado = Number(prompt("Ingrese un numero: "))
        list_numbers.push(numero_ingresado)
    }else{
        flag = false
    }
 }
 list_numbers.sort()
 alert("El numero mas grande es: "+ list_numbers[list_numbers.length-1])
