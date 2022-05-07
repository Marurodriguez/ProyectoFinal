function producto(mensaje){
    let dato = prompt(mensaje);
    console.log(dato)
    return dato;
}

let unidades = Number(producto("Ingrese la cantidad de unidades"));
let color = producto("Ingrese el color: NARANA / VIOLETA");


function vender (mensaje){
    alert(mensaje)

}

vender(unidades + " aros en color " + color + ". Debes abonar $" + 3000*unidades)  


