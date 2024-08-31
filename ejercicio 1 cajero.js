let dataBase = [
    {   documento : "1094940970", pin : "1234", name : "Julian Camilo", saldo : 450000},
    {   documento : "1094940900", pin : "2345", name : "Hector Andres", saldo : 7850000},
    {   documento : "1094940922", pin : "3456", name : "Campo Elias", saldo : 2370000}
]
function loginUsr(){
    count = 1
    console.log("Funcion loginUsr // 3 intentos")
    while (count < 4){
        let usrID = prompt("Ingresa tu número de documento:")
        let usrPin = prompt("Ingresa tu PIN")
        let verifyUsr = dataBase.find(id => id.documento === usrID)
        let validPin = 0
        console.log(`Numero del intento= ${count}`)
        if (verifyUsr){
            validPin = verifyUsr.pin
            if (usrPin === validPin){
                usuarioID = usrID
                usuarioPIN = usrPin
                console.log("Ingreso exitoso // retorno: true")
                return true
            }else{
                alert("ID Usuario / contraseña\n    NO VALIDO  ")
                count += 1
            }      
        }else{
            alert("ID Usuario / contraseña\n    NO VALIDO  ")
            count += 1            
        }
    }
    if (count >= 3){
        alert("HAS EXCEDIDO EL LIMITE DE INTENTOS \n Espera hasta mañana para volver a intentar")
        console.log("Ingreso fallido // retorno: false")
        return false
    }
}
function retiroCajero (monto){
    let verifyUsr = dataBase.find(id => id.documento === usuarioID)
    let usrSaldo = verifyUsr.saldo
    if (monto < usrSaldo){
        if (monto % 50000 == 0){
            verifyUsr.saldo = usrSaldo - monto
            return `Retiro exitoso! \n Nuevo saldo = $ ${verifyUsr.saldo} pesos.`
        }else{
            return "VALOR NO VALIDO \n Solo billetes de $50.000"
        }
    }else{
        return "SALDO INSUFICIENTE"
    }
}
function depositoCajero (idDeposito, monto){
    let verifyUsr = dataBase.find(id => id.documento === idDeposito)
    if (monto % 50000 == 0){
        verifyUsr.saldo += monto
        return `Deposito exitoso! \n Nuevo saldo = $${verifyUsr.saldo}`
    }else{
        return "VALOR NO VALIDO \n Solo billetes de $50.000"
    }
    
}
function transferencia (idTransf, monto){
    let verifyUsr = dataBase.find(id => id.documento === usuarioID)
    let usrSaldo = verifyUsr.saldo
    if (monto < usrSaldo){
        verifyUsr.saldo -= monto
        let usuarioDestino = dataBase.find(id => id.documento === idTransf)
        usuarioDestino.saldo += monto
        return `Transferencia exitosa! \n Tu saldo es de $${verifyUsr.saldo}`
    }else{
        return "SALDO INSUFICIENTE"
    }
}
function saldoCajero (usrID){
    let verifyUsr = dataBase.find(id => id.documento === usrID)
    let usrSaldo = verifyUsr.saldo
    return `Tu saldo es de = $${usrSaldo} pesos.`
}
let flag = true
let usuarioID = 0
let usuarioPIN = 0
let usuarioTransferencia = 0

while (flag){
    console.log("Inicio cuerpo del programa // ciclo while menu")
    alert("¡Bienvenido a SENABANK! \n Selecciona una opción del menu.")
    let usrOption = prompt("1. Retirar \n 2. Depositar \n 3. Transferir \n 4. Consultar saldo \n 5. Salir")
    console.log(`Opcion del usuario= ${usrOption}`)
    let options = ["1", "2", "3", "4"]
    if (options.includes(usrOption) ){
        switch(usrOption){
            case "1":
                //FUNCION RETIRO
                console.log("Case 1 (entro) funcion retiro")
                if (loginUsr()){
                    let usrRetiro = Number(prompt("Ingresaste exitosamente. \n ¿Que valor deseas retirar?"))
                    let operation = retiroCajero(usrRetiro)
                    alert(operation)
                }
                flag = false
                break
            case "2":
                //FUNCION DEPOSITO
                console.log("Case 2 (entro) funcion deposito")
                let usrDeposito = prompt("Ingresa el ID de la cuenta destino: ")
                let verifyUsr = dataBase.find(id => id.documento === usrDeposito)
                if (verifyUsr){
                    console.log("ID usuario destino (ok)")
                    usuarioID = usrDeposito
                    let montoDeposito = Number(prompt("Ingresa cantidad a depositar: "))
                    let operation = depositoCajero(usrDeposito, montoDeposito)
                    alert(operation)
                }else{
                    alert("Numero de cuenta destino no encontrada")
                    console.log("Id no aparece en objeto")
                }
                flag = false
                break
            case "3":
                console.log("Case 3 (entro) funcion transferir")
                // FUNCION PARA TRANSFERIR
                if (loginUsr()){
                    let usrTransfer = prompt("Ingresaste existosamente! \n Ingresa el ID de la cuenta destino")
                    let verifyUsr = dataBase.find(id => id.documento === usrTransfer)
                    console.log("Login ok // verificacion de usuario destino")
                    if (verifyUsr){
                        console.log("ID usuario destino (ok)")
                        usuarioTransferencia = usrTransfer
                        let montoTransfer = Number(prompt("Ingresa el valor a transferir: "))
                        let operation = transferencia(usrTransfer, montoTransfer)
                        alert(operation)
                    }else{
                        alert("Numero de cuenta destino no encontrada")
                        console.log("ID no aparece en objeto")
                    }
                }
                flag = false
                break
            case "4":
                console.log("Case 4 (entro) funcion consultar saldo")
                // FUNCION PARA CONSULTAR SALDO
                if (loginUsr()){
                    let operacion = saldoCajero(usuarioID)
                    alert(operacion)
                }
                flag = false
                break
        }
    }else{alert("Transaccion finalizada!"); flag = false}
}
// SECCION PARA PROBAR SI LA FUNCION ME ESTA MODIFICANDO EL SALDO DEL OBJETO // OK
let verifyUsraa = dataBase.find(id => id.documento === usuarioID)
let usrSaldooo = verifyUsraa.saldo
console.log(`TEST usuario 1094940970 fuera de la funcion y el ciclo\n Valores de saldo antes y despues de operacion \n antes$450.000, ahora ${usrSaldooo}`)
let verifyUsr2 = dataBase.find(id => id.documento === usuarioTransferencia)
let usrSaldo2 = verifyUsr2.saldo
console.log(`Valor Saldo destino, antes y despues de operacion\n antes $7.850.000 despues $${usrSaldo2}`)

