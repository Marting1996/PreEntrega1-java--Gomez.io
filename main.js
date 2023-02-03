alert("Bienvenido a la tienda de celulares, el celular que tengo disponible de la marca Samsunng es el S22 a 700 USD y de Motorola el Edge 30 a 400 USD");
alert("Los precios de los productos estan en dolares, si desea pagarlos en pesos se toma el dolar a 380 pesos");

let seleccion = prompt("Que producto desea comprar?");
while (seleccion != "S22" && seleccion != "Edge 30") {
    alert("No tenemos ese producto")
    seleccion = prompt("Que producto desea comprar?")
}
if (seleccion == "S22") {
    precio = 700
} else if ("Edge 30") {
    precio = 400
} else if ("no voy a comprar") {
    alert("Gracias por venir");
}
let moneda = prompt("Por favor elija la moneda con la que va a realizar el pago");

while (moneda != "dolar" && moneda != "pesos") {
    alert("Solo se puede pagar en pesos o dolares");
    moneda = prompt("Por favor elija la moneda con la que va a realizar el pago");
    
}
if (moneda == "pesos") {
    precioFinal = precio * 380
} else if (moneda == "dolar") {
    precioFinal = precio
}
const suma = (a, b) => a + b
const iva = precioFinal => precioFinal * 0.21

let total = suma(precioFinal, iva(precioFinal))

alert("El precio total a pagar con iva incluido es de: " + total)






