let hotelDB = [
    {   h : "1", tipo : "individual", fumadores : true, mascotas : false, capacidad : 2, estado : true},
    {   h : "2", tipo : "doble", fumadores : false, mascotas : false, capacidad : 4, estado : true},
    {   h : "3", tipo : "familiar", fumadores : false, mascotas : true, capacidad : 6, estado : true},
    {   h : "4", tipo : "individual", fumadores : true, mascotas : true, capacidad : 2, estado : false},
    {   h : "5", tipo : "individual", fumadores : true, mascotas : true, capacidad : 2, estado : true},
    {   h : "6", tipo : "individual", fumadores : true, mascotas : false, capacidad : 2, estado : true},
    {   h : "7", tipo : "doble", fumadores : false, mascotas : true, capacidad : 4, estado : true},
    {   h : "8", tipo : "doble", fumadores : true, mascotas : false, capacidad : 4, estado : false},
    {   h : "9", tipo : "doble", fumadores : false, mascotas : false, capacidad : 4, estado : true},
    {   h : "10", tipo : "familiar", fumadores : true, mascotas : true, capacidad : 6, estado : true},
    {   h : "11", tipo : "familiar", fumadores : false, mascotas : true, capacidad : 4, estado : true},
    {   h : "12", tipo : "familiar", fumadores : true, mascotas : true, capacidad : 4, estado : true},
    {   h : "13", tipo : "familiar", fumadores : false, mascotas : true, capacidad : 4, estado : true},
    {   h : "14", tipo : "familiar", fumadores : true, mascotas : true, capacidad : 4, estado : true}
]
let reserva = [
    {nombre : "SANTIAGO GAÑAN", pais : "BOLIVIA", cantidad : "4", fecha : "1 ENERO", habitacion : "4"},
    {nombre : "SEBASTIAN", pais : "ECUADOR", cantidad : "2", fecha : "22 OCTUBRE", habitacion : "8"}
]
function verReservas (){
    if (reserva.length == 0){
        return "No hay reservas registradas"
    }else {
        let msjReservas = "Las Reservas registradas son: "
        reserva.forEach(i => msjReservas += `\n${i.nombre}`)
        alert(msjReservas)
        while (true){
            let usrReserva = (prompt("¿Que reserva deseas ver?")).toUpperCase()
            let reservaBuscar = reserva.find(i => i.nombre === usrReserva)
            if (reservaBuscar){
                let msjResultado = "Los detalles de la reserva son:"
                for (let x in reservaBuscar){
                    msjResultado += `\n${x}: ${reservaBuscar[x]}`
                }
                return msjResultado
                break
            }else{
                alert("El nombre no corresponde a ninguna reserva")
            }
        }
    }
}
function verHabitaciones (){
    let msjResultado = "Las habitaciones disponibles son: "
    let habitacionesDisponibles = hotelDB.filter(x => x.estado === true)
    habitacionesDisponibles.forEach(x => msjResultado += ` habitación: ${x.h},`)
    return msjResultado
}
//funcion que me indique habitaciones vacías.
//RESERVA POR HABITACION //CANTIDAD HUESPEDES//FUMADOR//MASCOTA

let usrMenu = confirm("+------------------------------+\n |BIENVENIDO A SENAHOTEL| \n |       ¿Deseas continuar?       | \n+------------------------------+")
if(usrMenu){
        flag = true
        while (flag){
            let menuHotel = prompt("Ingresa la opcion deseada\n 1)Agregar habitación\n 2)Ver reserva (carrito)\n 3) Vaciar reserva (carrito)\n 4) Ver habitaciones reservadas \n 5) Continuar || Salir")
            switch (menuHotel){
                case "1":
                    console.log("case 1 menu hotel")
                    let usrTipo = prompt("¿Que tipo de habitacion buscas?\n 1) Individual\n 2) Doble\n 3) Familiar")
                    console.log(`Usuario ingresa opcion ${usrTipo}`)
                    switch(usrTipo){
                        case "1": usrTipo = "individual"; break
                        case "2": usrTipo = "doble"; break
                        case "3": usrTipo = "familiar";break
                    }
                    console.log(`usrTipo = ${usrTipo}`)
                    let usrFuma = prompt("¿Habitacion para fumadores?\n 1) Si\n 2) No")
                    console.log(`Usuario ingresa opcion: ${usrFuma}`)
                    switch(usrFuma){
                        case "1": usrFuma = true; break
                        case "2": usrFuma = false; break
                    }
                    console.log(`usrFuma: ${usrFuma}`)
                    let usrMascota = prompt("¿Habitacion para mascotas?\n 1) Si\n 2) No")
                    console.log(`Usuario ingresa opcion: ${usrMascota}`)
                    switch(usrMascota){
                        case "1": usrMascota = true; usrTipo = "familiar"; break
                        case "2": usrMascota = false; break
                    }
                    console.log(`usrMascota: ${usrMascota}`)
                    let usrCantidad = Number(prompt("Ingresa la cantidad de huespedes para la habitación:\n (Maximo 6 ocupantes)"))
                    console.log(`usrCantidad: ${usrCantidad}`)
                    let filtroHabitaciones = hotelDB.filter(habitacion =>
                        habitacion.tipo === usrTipo &&
                        habitacion.fumadores === usrFuma && // ESTABLECER QUE SI NO ES FUMADOR TAMBIEN MUESTRE LAS DE FUMADORES
                        habitacion.mascotas === usrMascota &&
                        habitacion.capacidad >= usrCantidad &&
                        habitacion.estado === true
                    )
                    if (filtroHabitaciones.length > 0){
                        console.log("Filtro encontro habitaciones disponibles")
                        msjDisponible = "Estan disponibles :"
                        filtroHabitaciones.forEach(x => msjDisponible += " Habitacion "+ x.h)
                        alert(msjDisponible)
                        let menuReserva = true
                        while(menuReserva){
                            let usrHabitacion = prompt("Digita el numero de la habitacion deseada.\n Digita (0) para salir")
                            let habitacionBuscar = filtroHabitaciones.find(habitacion => habitacion.h === usrHabitacion)
                            if (usrHabitacion == "0"){menuReserva = false}
                            if (habitacionBuscar){
                                console.log("La habitacion ingresada existe dentro de las habitaciones filtradas")
                                let confirmarReserva = confirm(`Deseas reservar la habitacion ${habitacionBuscar.h}?`)
                                if(confirmarReserva){
                                    let objReserva = {}
                                    // AÑADIR DATOS DE RESERVA A objReserva
                                    console.log("objReserva || solicita datos de entrada para la reserva")
                                    objReserva.nombre = (prompt("Ingresa tu nombre completo")).toUpperCase()
                                    objReserva.pais = (prompt("De que pais nos visitas?")).toUpperCase()
                                    objReserva.cantidad = usrCantidad
                                    objReserva.fecha = (prompt("Indica la fecha de reserva.")).toUpperCase()
                                    if(usrMascota){
                                        objReserva.mascota = "Mascota (si)"
                                    }else{
                                        objReserva.mascota = "Mascota (no)"
                                    }
                                    // SE AÑADE objReserva al array de reservas
                                    reserva.push(objReserva)
                                    alert("Habitacion reservada satisfactoriamente!")
                                    let msjReserva = "Tu reserva de habitacion es: \nNombre: " + objReserva.nombre + "\nPais origen: "+ objReserva.pais + "\nCantidad de huespedes: " + objReserva.cantidad + "\n" + objReserva.mascota
                                    alert(msjReserva)
                                    let reservaConfirmada = hotelDB.find(habitacion => habitacion.h === usrHabitacion)
                                    reservaConfirmada.estado = false
                                    console.log("Confirmar reserva habitacion // modif obj- estado = false")
                                    menuReserva = false
                                }else{console.log("Habitacion no confirmada // seleccionar nuevamente")}
                            }else{
                                alert("Error, habitacion no valida")
                                console.log("La habitacion no existe dentro de las habitaciones filtradas")
                            }
                        }
                    }else{
                        alert("No hay habitaciones disponibles para los criterios ingresdos")
                        console.log("No hay coincidencias para los criterios en el filtrado")
                    }
                    break
                case "2":
                    alert(verReservas());break
                case "3":
                    reserva.pop()
                case "4":
                    alert(verHabitaciones());break
                case "5":
                    flag = false
                    break


            }
                
        }
}else{ 
        console.log("Menu inicio//cancelar o null")
}

alert("Has salido con exito!\n Vuelve pronto")
