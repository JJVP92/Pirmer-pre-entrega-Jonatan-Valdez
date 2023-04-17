const vacio= "";
const contraseña= 1992
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

const productos =[
    {nombreproducto: "CarteInterior", precioxm2: 4500},
    {nombreproducto: "CartelExterior", precioxm2: 5605},
    {nombreproducto: "Redlinepuma", precioxm2:50034},
    {nombreproducto: "PunteraIsla", precioxm2:3043},
]
const lugaresdeservicios= ["GBA", "CABA","Mendoza"]
lugaresdeservicios.push("Cordoba");
console.log(lugaresdeservicios)

let apellido = prompt ("Cual es tu apellido?");
let edad = prompt ("Cual es tu edad?");
let cuit = prompt ("Cual es tu CUIT?");
let residencia = prompt("Donde queres hacer el trabajo?")

class Datos{
    constructor(nombre, apellido, edad, cuit, Residencia){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cuit = cuit;
    this.Residencia = Residencia;}
}
const usuario1 = new Datos (nombre, apellido, edad, cuit, residencia);
console.log (usuario1);

let respuesta = prompt("Actualizar los precios?");
let inflacion=prompt("ingresa el porcentaje de la inflacion")
let porcentaje= inflacion/100

if (respuesta.toLowerCase() == "si") {
  let contraseña = prompt("Ingresa contraseña:");
  if (contraseña == contraseña) {
    console.log("Las contraseñas coinciden");
   
   const preciosActualizados = productos.map((producto) => {
     return {
         nombre: producto.nombre,
         precio: producto.precioxm2 * porcentaje
     }
 });
 console.log(productos);
 console.log(preciosActualizados);
  } else {
    console.log("Las contraseñas no coinciden");
  }
} else {
 console.log("Acceso denegado.");
}