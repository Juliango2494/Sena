let articulos = [
    {nombre : "chocolatina", precio : 1500, stock : 4},
    {nombre : "barquillos", precio : 1500, stock : 8},
    {nombre : "empanada", precio : 1500, stock : 6},
    {nombre : "dedo", precio : 1500, stock : 4},
    {nombre : "sanduche", precio : 1500, stock : 3},
    {nombre : "papaslimon", precio : 1500, stock : 5},
    {nombre : "doritos", precio : 1500, stock : 6}
]
let pedidoTotal = []
if(confirm("Bienvenido al carrito de compras de la tienda SENA.\nDeseas continuar?")){
    let flag = true
    while(flag){
        let menu1 = prompt("Selecciona la opción deseada: \n1)Ver productos disponibles \n2)Ver carrito de compras \n3)Pagar \n4)Salir")
        if(menu1 == "4"){alert("Has salido con exito.");flag = false}
        switch(menu1){
            case "1":
                //VER Y SELECCIONAR PRODUCTOS DISPONIBLES
                let menuOp = true
                let listadoMenu = "MENU:"
                articulos.forEach(x => listadoMenu+= `\n${x.nombre}----$${x.precio}`)
                while(menuOp){
                    let menu2 = prompt(`Que deseas agregar al carrito?\n${listadoMenu}\n8)Salir`)
                    if(menu2 == "8"){alert("Saliendo del carrito.");menuOp = false;break}
                    let cantidad = Number(prompt("Que cantidad deseas?"))
                    let objSeleccionado = articulos.find(x => x.nombre === menu2)
                    if(objSeleccionado){
                        if(cantidad<objSeleccionado.stock){
                            let pedido ={}
                            pedido.nombre = menu2
                            pedido.cantidad = cantidad
                            pedido.subtotal = cantidad * objSeleccionado.precio
                            pedidoTotal.push(pedido)
                            alert("Pedido agregado al carrito.")
                        }else{alert("No hay esa cantidad en stock")}
                    }else{alert("Articulo no encontrado")}
                }
                break
            case "2":
                //VER CARRITO (ARTICULOS, CANTIDAD, SUBTOTAL)
                let msjCarrito = "En carrito: "
                pedidoTotal.forEach(x => msjCarrito += `\nNombre: ${x.nombre},  Cantidad: ${x.cantidad},  Sub Total: $${x.subtotal}`)
                alert(msjCarrito)
                break
            case "3":
                //MOSTRAR TOTAL DE LA COMPRA
                let msjTotal = "Total a pagar:"
                let totalPagar = 0
                pedidoTotal.forEach(x => totalPagar += x.subtotal)
                alert(`${msjTotal}\n$${totalPagar} pesos.`)
                flag = false
                break
        }
    }
}else{alert("Has salido")}
