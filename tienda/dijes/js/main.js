class producto {
    constructor(id, nombre, precio, stock, disponible){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
    }
}

const prod1 = new producto (1,"ARO1", 2500, 5, true);
const prod2 = new producto (2, "ARO2", 3000, 5, true);
const prod3 = new producto (3, "ARO3", 2000, 5, false);
const prod4 = new producto (1, "DIJE1", 2000, 5, true);
const prod5 = new producto (2, "DIJE2", 2000, 5, true);

const catalogoaros = [prod1, prod2, prod3];
const catalogodijes = [prod4, prod5];

console.log(catalogoaros);
console.log(catalogodijes);

const prod6 = catalogodijes.push(new producto(3, "DIJE3", "2500", 5, true));
console.log(catalogodijes);

console.log(catalogodijes[2])

let color
let unidades
let prodElegido
let dije1
let dije2
let dije3

const elegirColor = () => { 
    color = prompt("Ingrese el color de dije: NARANJA / VIOLETA / AZUL");

    while (color === ""){
        color = prompt("Ingrese el color de aro: NARANJA / VIOLETA / AZUL");  
    }
    
    if (color === "NARANJA"|| color === "Naranja"|| color === "naranja"|| color === "VIOLETA"||color === "Violeta"|| color === "violeta"|| color === "AZUL"|| color === "Azul" || color === "azul"){ 
        unidades = parseInt(prompt("Ok, cuantas unidades?"))

    }
    else {
        alert("No entiendo")
        elegirColor();  
    }  
    }

    

    const vender =()=>{

        if (dije1 === true){
                if (prod4.disponible === true && prod4.stock >= unidades){
                    alert("Debes abonar $" + unidades * prod4.precio)
                } 
                else { 
                alert("Ups. Nos hay esa cantidad disponible.")
                mostrarProductos()}
        }
        else if (dije2 === true){
                    if (prod5.disponible === true && prod5.stock >= unidades){
                    alert("Debes abonar $" + unidades * prod5.precio)
                } 
                else { 
                alert("Ups. No hay esa cantidad disponible.")
                mostrarProductos()}
        }
        else if (dije3 === true){
    
                if (prod6.disponible === true && prod6.stock >= unidades){
                    alert("Debes abonar" + unidades * prod6.precio)            
                } 
                else { 
                alert("Ups. No hay esa cantidad disponible.")
                mostrarProductos()}
    
        }     
        else {
            console.log(Error);
        }
        }
    



const mostrarProductos = () => {
    let lista = ""
    catalogodijes.forEach(element=>{
        lista += `${element.id}) ${element.nombre}\n`;}
        )
    console.log(lista)

    prodElegido = prompt ("Ingrese el n° de producto\n" + lista);
        
    while (prodElegido ==="") {
        prodElegido = prompt ("Ingrese el n° de producto\n" + lista);
    }

    if (prodElegido === "1"){
        dije1 = true;
        elegirColor()
        vender()
    }else if (prodElegido === "2"){
        dije2 = true;
        elegirColor()
        vender()
    }else if (prodElegido === "3"){
        dije3 = true;
        elegirColor()
        vender()
    }
 
    
    else{
        alert ("Ingrese un n° válido")
        mostrarProductos()
    }
     
}

    mostrarProductos()

