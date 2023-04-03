const vacio= "";
let nombreempresa = prompt("Cual es el nombre de tu empresa?")
let nombre= prompt("Cual es tu nombre?")
while (nombreempresa == vacio || nombre ==vacio) {
    alert("Ingresa los datos validos")
    nombreempresa = prompt("Cual es el nombre de tu empresa?")
    nombre= prompt("Cual es tu nombre?")
}
alert("Bienvenido " + nombre + "de la empresa " +nombreempresa)
let tenescupom= prompt("Tenes un cupon de descuento?")
if (tenescupom=="si") {
    let cupon=prompt("Ingresa tu cupon")
    if (cupon="JJVP") {
        alert("felicitaciones, accediste a un descuesto")
    }else 
    {alert("Cupon no valido")
    }
}
else{
    alert("Ingresas a la pagina sin descuentos")
}

