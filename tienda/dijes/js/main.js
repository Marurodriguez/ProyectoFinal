function producto(mensaje){
    let dato = prompt(mensaje);
    console.log(dato)
    return dato;
}

let unidades = Number(producto("Ingrese la cantidad de unidades"));
let color = producto("Ingrese el color: AZUL / ROSA");


function vender (mensaje){
    alert(mensaje)

}

vender(unidades + " dijes en color " + color + ". Debes abonar $" + 2000*unidades)  



/* function producto(nombre, color, stock){
    this.nombre = nombre;
    this.color = color;
    this.stock = stock;
}

const producto3 = new producto("Dije1", "Azul", 5)
const producto4 = new producto("Dije2", "Rosa", 5)

 */