const readline = require("readline");

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaPedidos = [];

let subtotal = 0;
let iva = 0;
let total = 0;

function notificar(pedido){
    console.log("NOTIFICACIÓN: Tu pedido de " + pedido.nombre + " fue recibido.");
}

function pedidoListo(pedido){
    pedido.estado = "Listo";
    console.log("NOTIFICACIÓN: Tu pedido de " + pedido.nombre + " está listo para recoger.");
}

    pedido.estado = "Cancelado";
    console.log("NOTIFICACIÓN: Tu pedido de " + pedido.nombre + " fue cancelado.");
}

function agregarPedido(notificar){
    entrada.question("Cual es tu pedido? ", (nombre) => {
        entrada.question("Cual es el precio del pedido? ", (precio) => {
            precio =Number(precio);

            let nuevoPedido = { 
                nombre: nombre,
                precio: precio,
                estado: "Pendiente"
            };

            console.log("--------------------------------");
            listaPedidos.push(nuevoPedido);
            console.log("--------------------------------");
            subtotal = subtotal + precio;
            console.log("--------------------------------");
            iva = subtotal * 0.16;
            console.log("--------------------------------");
            total = subtotal + iva;
            console.log("--------------------------------");
            console.log("Pedido agregado: " + nombre);
            notificar(nuevoPedido);
            mostrarPedidos();
            menu();

        });

    });
}

function mostrarPedidos() {
    console.log("\nLista de pedidos: ");

    if (listaPedidos.length === 0) {
        console.log("No hay pedidos.");
    }else {
        for (let i = 0; i < listaPedidos.length; i++) {
        console.log((i + 1) + ". " + 
        listaPedidos[i].nombre +
        " - $" + listaPedidos[i].precio +
        " - Estado: " + listaPedidos[i].estado
    );
    }
}

    console.log("--------------------------------");
    console.log("Subtotal: $" + subtotal);
    console.log("--------------------------------");
    console.log("IVA: $" + iva);
    console.log("--------------------------------");
    console.log("Total: $" + total);
}

function mostrarPendientes() {
    console.log("\nPedidos pendientes: ");

    let existenPendientes = false;
    for (let i=0; i<listaPedidos.length; i++) {
        if (listaPedidos[i].estado === "Pendiente") {
            console.log((i + 1) + ". " +
            listaPedidos[i].nombre +
            " - $" + listaPedidos[i].precio
        );
        existenPendientes = true;
        }
    }

    if (existenPendientes) {
        console.log("No hay pedidos pendientes.");
    }
}

function seleccionarPedido(notificar) {
    if (listaPedidos.length === 0) {
        console.log("No hay pedidos.");
        menu();
        return;
    }

    mostrarPendientes();

    entrada.question("Seleccione el número del pedido: ", (numero) => {
        let posicion = Number(numero) - 1;
        if (
            posicion >= 0 &&
            posicion < listaPedidos.length 
        ){
            let pedido = listaPedidos[posicion];
            if (pedido.estado === "Pendiente") {
            notificar(pedido);
        }else {
            console.log("Pedido listo: " +
                pedido.estado);
        }
} else {
            console.log("Número de pedido no válido.");
}
menu();
}
);
}

function menu() {
    console.log("1. Agregar pedido");
    console.log("2. Mostrar pedidos");
    console.log("3. Pedidos pendientes");
    console.log("4. Pedido listo");
    console.log("5. Pedido cancelado");
    console.log("6. Salir");

    entrada.question("Seleccione una opción: ", function(opcion) {
        if (opcion === "1") {
            agregarPedido(notificar);
        } else if (opcion === "2") {
            mostrarPedidos();
            menu();
        } else if (opcion === "3") {
            mostrarPendientes();
            menu();
            } else if (opcion === "4") {
                seleccionarPedido(pedidoListo);
            
        } else if (opcion === "5") {
            seleccionarPedido(pedidoCancelado);

        } else if (opcion === "6") {
            console.log("Programa finalizado");
            entrada.close();
        } else {
            console.log("Opción no válida");
            menu();
        }
    });
}

menu ();