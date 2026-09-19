let listaPedidos = [];

let total = 0;

function adicionarPedido() {
    const pedido = prompt("Cual es tu pedido?");
    const precio = prompt("Cual es el precio del pedido?");
    listaPedidos.push(pedido);
    total = total + precio;

    const lista =document.getElementById("listaPedidos");
    lista.innerHTML = "";

    for (let i = 0; i < listaPedidos.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = listaPedidos[i];
        lista.appendChild(elemento);
    }

    document.getElementById("total").textContent = total;
}