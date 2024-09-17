let usrCedulas = []
let tipoEstudiante = 0
let tipoDirectivo = 0

if(confirm("Bienvenido a la linea de atención del SENA\n¿Deseas continuar?")){
    while (true){
        let usrTipo = prompt("Que tipo de atencion necesitas? \n1)Llamada telefonica\n2)Asesoria\n3)Salir")
        if(usrTipo == "3"){
            alert("Gracias por comunicarte con nosotros!")
            break
        }
        let usrCed = prompt("Ingresa tu numero de documento:")
        usrCedulas.push(usrCed)
        if(usrTipo == "1" || usrTipo == "2"){
            switch(usrTipo){
                case "1":
                    let usrNum = prompt("Ingresa el numero telefonico al cual quieres ser contactado.")
                    alert("Llamada programada....\nUsuario: "+usrCed + "\nTelefono: "+usrNum);break
                case "2":
                    let usrTipo2 = prompt("Que tipo de asesoria necesitas? \n1)Directivo \n2)Estudiante")
                    if(usrTipo == "1" || usrTipo == "2"){
                        switch(usrTipo2){
                            case "1":
                                tipoDirectivo += 1
                                let usrDirectivo = prompt("Describe tu solicitud para ser procesada")
                                alert("La solicitud del usuario: "+ usrCed + "Correspondiente a: \n"+ usrDirectivo + "\nFue procesada exitosamente, se le comunicara la respuesta en los proximos 4 dias habiles")
                                break
                                case "2":
                                tipoEstudiante += 1
                                let usrEstudiante = prompt("Describe tu solicitud para ser procesada")
                                alert("La solicitud del usuario: "+ usrCed + "Correspondiente a: \n"+ usrEstudiante + "\nFue procesada exitosamente, se le comunicara la respuesta en los proximos 4 dias habiles")
                                break
                        }
                    }else{alert("Opcion no valida")}   
            }
        }else{alert("Opcion invalida......\nIngresa nuevamente")}
    }
}else{
    alert("Gracias por comunicarte con nosotros!")
    flag = false
}

alert(`El total de usuarios atendidos es de: ${usrCedulas.length} \nUsuarios atendidos por Directivo: ${tipoDirectivo} \nUsuarios atendidos por Estudiante: ${tipoEstudiante}`)
