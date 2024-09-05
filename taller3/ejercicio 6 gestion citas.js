//ALMACENAR DATOS EN ARREGLOS U OBJETOS
let citas = []
let clientes =["1234", "1000", "1111", "4444"]
function programCita(id){
    //PROGRAMAR CITAS // NOMBRE - FECHA - HORA CITA - MEDICO
    if(clientes.includes(id)){
        while(true){
            let cita = {}
            cita.nombre = prompt("INGRESO EXITOSO \nIngresa tu nombre")
            cita.fecha = prompt("Ingresa la fecha")
            cita.hora = prompt("Ingresa la hora")
            cita.medico = prompt("Selecciona el medico de preferencia:\nDisponibles (Julian, Camilo, Andres, Maria)")
            citas.push(cita)
            if(confirm("Deseas agendar otra cita?")){
                //Repite ciclo
            }else{alert("Saliendo...");break}
        }
    }else{alert("ID no existe en base de datos")}
}
function verCitas(id){
    //VER CITAS PROGRAMADAS
    if(clientes.includes(id)){
        //alert(`cantidad en arreglo de citas = ${citas.length}`)
        let msjCitas = "Citas programadas para el usuario "+ id + ":"
        citas.forEach(x => msjCitas += `\nNombre: ${x.nombre}, Fecha: ${x.fecha}, Hora: ${x.hora}, Medico: ${x.medico}`)
        alert(msjCitas)
    }else{alert("ID no existe en base de datos")}
}
function cancelarCita(id){
    //CANCELAR CITAS   NO ENCUENTRA USUARIO REVISAR
    if(clientes.includes(id)){
        let usrProgram = "CITAS: "
        citas.forEach(x => usrProgram += `${x.nombre}, `)
        let usrCancela = prompt(`Ingrese el nombre del usuario de la cita que desea cancelar \n${usrProgram}`)
        if(citas.find(x => x.nombre == usrCancela)){
            citas = citas.filter(x => x.nombre !== usrCancela)
            alert("Cita eliminada")
        }else{alert("El nombre no coincide con ninguna reserva")}
    }else{alert("ID no existe en base de datos")}
}
let flag = true
if(confirm("Bienvenido a SENA EPS\n Deseas gestionar tus citas?")){
    while(flag){
        //MENU PRINCIPAL
        let menu1 = prompt("Que deseas realizar? \n1)Programar cita \n2)Ver Citas \n3)Cancelar Cita \n4)Salir")
        if(menu1 == "4"){alert("Has salido satisfactoriamente"); flag = false; break}
        switch(menu1){
            case "1":
                let usrID = prompt("Ingresa tu numero de documento")
                programCita(usrID)
                break
            case "2":
                let usrID2 = prompt("Ingresa tu numero de documento")
                verCitas(usrID2)
                break
            case "3":
                let usrID3 = prompt("Ingresa tu numero de documento")
                cancelarCita(usrID3)
                break
        }
    }
}else{alert("Saliste del programa")}