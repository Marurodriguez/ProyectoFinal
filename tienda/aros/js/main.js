cclass articulo {
    constructor(id, nombre, precio, stock, disponible){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
        this.img=img;
    }
} 

const catalogo = [
    {id:1, img: "", nombre:"ARO1", precio:2500, stock: 5, disponible: true},
    {id:2, img: "", nombre:"ARO2", precio:3000, stock: 5, disponible: true},
    {id:3, img: "", nombre:"ARO3", precio:2000, stock: 5, disponible: false},
    {id:4, img: "", nombre:"DIJE1", precio:2000, stock: 5, disponible: true},
    {id:5, img: "", nombre:"DIJE2", precio:1800, stock: 5, disponible: true},

]

console.log(catalogo)

const mostrarProductos = () =>{


for (const articulo of catalogo){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = 
    `<h3>Código: ${articulo.id}</h3> 
    <img>${articulo.img}</img>
    <p>${articulo.nombre}</p>
    <b>Precio: $${articulo.precio}</b>`
    
    document.body.appendChild(contenedor);
    contenedor.className="listado"

}
}
mostrarProductos()

const inputCodigo = document.querySelector("#codigo")
const inputCantidad = document.querySelector("#cantidad")

class prodElegido {
    constructor (codigo, cantidad){
    this.codigo = codigo;
    this.cantidad = cantidad;
}
}

const crearCarrito = (codigo, cantidad) => {
    codigo = inputCodigo.value;
    cantidad = inputCantidad.value;
    new prodElegido(codigo, cantidad)
 }

crearCarrito()
console.log(prodElegido);

const mostrarCarrito = () => {
        let carrito = document.createElement("p");
        carrito.innerHTML = 
        `Debes abonar ${articulo.precio}*${prodElegido.cantidad}`
        
        document.body.appendChild(carrito);
    

}

boton.addEventListener("click", () => {
    const cargarCarrito = crearCarrito(codigo,cantidad);
    mostrarCarrito (cargarCarrito)

})



