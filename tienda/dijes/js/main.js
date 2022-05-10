

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
let dijeazul
let dijerosa
let dijenegro

function elegir (){
    color = prompt("Ingrese el color de dije: AZUL / ROSA / NEGRO");

    if (color === "AZUL"|| color === "Azul"|| color === "azul") {
        dijeazul = true;
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
    }
    else if (color === "ROSA"||color === "Rosa"|| color === "rosa"){
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
        dijerosa = true;}
    else if (color === "NEGRO"|| color === "Negro" || color === "negro"){
        unidades = parseInt(prompt("Ok, cuantas unidades?"))
        dijenegro = true;}
    else {
        alert("No entiendo")
    }
 
            
        return color;
        return unidades;
        return dijeazul;
        return dijerosa;
        return dijenegro;
    }

elegir()
console.log(color)
console.log(unidades);

console.log(dijeazul)
console.log(dijerosa)
console.log(dijenegro)


function vender(){
    if (dijeazul === true){
            if (producto4.disponible === true && producto4.stock >= unidades){
                alert("Debes abonar $" + unidades * producto4.precio)
            } 
            else { 
            alert("Ups. Nos hay esa cantidad disponible.")}
    }
    else if (dijerosa === true){
                if (producto5.disponible === true && producto5.stock >= unidades){
                alert("Debes abonar $" + unidades * producto5.precio)
            } 
            else { 
            alert("Ups. No hay esa cantidad disponible.")}
    }
    else if (dijenegro === true){

            if (producto6.disponible === true && producto6.stock >= unidades){
                alert("Debes abonar $" + unidades * producto6.precio)
            } 
            else { 
            alert("Ups. No hay esa cantidad disponible.")}

    }     
    else {
        console.log(Error);
    }
    }
          
vender()
