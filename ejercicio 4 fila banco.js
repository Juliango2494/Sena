//FUNCION TOMAR TURNO
//FUNCION LLAMAR CLIENTE
//FUNCION MOSTRAR COLA ESPERA
//CONTADOR DE TURNOS
let filaBanco = []
let turno = 1
let caja = "Ninguna"
function clienteNuevo() {
    return Math.floor(100000 + Math.random() * 900000);
}
function tomarTurno (id){
    filaBanco.push(turno)
    alert(`El usuario ${id}, ha sido asignado correctamente. \nEl turno del usuario es el: ${turno}`)  
    turno += 1
}
function clienteCaja (id){
    let turnoActual = filaBanco[0]
    caja = Math.floor(Math.random() * 5) + 1
    alert(`El turno #${turnoActual}, pase a caja#${caja}`)
    filaBanco.shift()
}
let start = confirm("BIENVENIDO A BANCO SENA \nIniciar sistema de atencion?")
if(start){
    let flag = true
    while (flag){
        let menu1 = prompt("BANCO SENA \nQue deseas realizar? \n1)Asignar turno a cliente \n2)Pasar cliente a caja \n3)Mostrar usuarios en espera \n4)Mostrar turno actual \n5)Salir")
        if (menu1 == "5"){alert("Has salido del sistema.");flag = false}
        switch(menu1){
            case "1":
                //ASIGNAR TURNO A CLIENTE
                let newUsr = clienteNuevo()
                let asignTurno = confirm(`El usuario ${newUsr} solicita un turno. \n¿Asignar turno a usuario?`)
                if(asignTurno){
                    tomarTurno(newUsr)
                }
                break
            case "2":
                //PASAR CLIENTE A CAJA
                clienteCaja()
                break
            case "3":
                //MOSTRAR USUARIOS EN ESPERA
                let msjEspera = "Turnos en espera: "
                filaBanco.forEach(turno => msjEspera += `\n${turno}`)
                alert(msjEspera)
                break
            case "4":
                //MOSTRAR TURNO ACTUAL
                alert(`Turno actual: ${filaBanco[0] - 1} en caja #${caja}`)
                break
        }
    }
}else{alert("Sistema apagado")}
