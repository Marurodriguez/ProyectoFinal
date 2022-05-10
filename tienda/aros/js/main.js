let unidades = Number(producto("Ingrese la cantidad de unidades"));
let color = producto("Ingrese el color: NARANA / VIOLETA");


function vender (mensaje){
    alert(mensaje)

}
vender(unidades + " aros en color " + color + ". Debes abonar $" + 3000*unidades)  
 */


const catalogoaros = ["ARO1", "ARO2" , "ARO3"];
const catalogodijes = ["DIJE1", "DIJE2"];
const catalogo = [catalogoaros, catalogodijes];

class productos {
    constructor(nombre, color, precio, stock, disponible){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
    }
}

const producto1 = new productos ("ARO1", "Naranja", 2500, 5, true);
const producto2 = new productos ("ARO2", "Violeta", 3000, 5, true);
const producto3 = new productos ("ARO3", "Azul", 2000, 5, false);
const producto4 = new productos ("DIJE1", "Azul", 2000, 5, true);
const producto5 = new productos ("DIJE2", "Rosa", 2000, 5, true);
console.log(catalogo);

catalogodijes.push(new productos("DIJE3", "NEGRO", "2500", 5, true));
console.log(catalogo);

let color
let unidades
let aronaranja
let aroazul
let arovioleta

function elegir (){
    color = prompt("Ingrese el color de aro: NARANJA / VIOLETA / AZUL");

    if (color === "NARANJA"|| color === "Naranja"|| color === "naranja") {
        aronaranja = true;
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
    }
    else if (color === "VIOLETA"||color === "Violeta"|| color === "violeta"){
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
        arovioleta = true;}
    else if (color === "AZUL"|| color === "Azul" || color === "azul"){
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
        aroazul = true;}
    else {
        alert("No entiendo")
    }
 
            
         /*    switch (color) {
                case "NARANJA"||"Naranja" ||"naranja":
                    let aronaranja = true;

                    break;

                    case "VIOLETA":
                    let arovioleta = true;
                    break;

                case "AZUL":
                    let aroazul = true;
                    break;
                } */

     
        return color;
        return unidades;
        return aronaranja;
        return arovioleta;
        return aroazul;
    }

elegir()
console.log(color)
console.log(unidades);

console.log(aronaranja)
console.log(arovioleta)
console.log(aroazul)


function vender(){
    if (aronaranja === true){
            if (producto1.disponible === true && producto1.stock >= unidades){
                alert("Debes abonar $" + unidades * producto1.precio)
            } 
            else { 
            alert("Ups. Nos hay esa cantidad disponible.")}
    }
    else if (arovioleta === true){
                if (producto2.disponible === true && producto2.stock >= unidades){
                alert("Debes abonar $" + unidades * producto2.precio)
            } 
            else { 
            alert("Ups. No hay esa cantidad disponible.")}
    }
    else if (aroazul === true){

            if (producto3.disponible === true && producto3.stock >= unidades){
                alert("Debes abonar $" + unidades * producto3.precio)
            } 
            else { 
            alert("Ups. No hay esa cantidad disponible.")}

    }     
    else {
        console.log(Error);
    }
    }
          
vender()
