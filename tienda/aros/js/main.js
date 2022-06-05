/* class articulo {
    constructor(id, nombre, precio, stock, disponible){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
        this.img=img;
    }
}   */

const catalogo = [
    {id:1, img: "js/img/aro1.png", nombre:"Aro solitario turquesa", nombrePlural: "Aros solitarios turquesa", precio:2500, stock: 5, disponible: true},
    {id:2, img:"js/img/aro2.png", nombre:"Aro solitario naranja", nombrePlural: "Aros solitarios naranja", precio:3000, stock: 5, disponible: true},
    {id:3, img:"js/img/aro3.png", nombre:"Aro solitario violeta", nombrePlural: "Aros solitarios violeta", precio:2000, stock: 5, disponible: false},
]

console.log(catalogo)

const [articulo1, articulo2, articulo3] = catalogo

console.log(articulo1)
console.log(articulo2)
console.log(articulo3)


const caja = document.getElementById("caja");
const divCarrito = document.getElementById("divCarrito");
const listaCompra = document.getElementById("listaCompra");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let compra = JSON.parse(localStorage.getItem("compra")) || [];


function mostrarCatalogo (){
    catalogo.forEach(element=> {
        caja.innerHTML += 
        `<div class="producto">
        <h3>${element.nombre}</h3> 
        <div id ="imagenes">
        <a href="${element.img}" data-lightbox="imagen" data-title="" alt=""><img style="width:250px;" class="imgcatalogo" src="${element.img}"></a>
        </div>
        <b>Precio: $${element.precio}</b>
        <button id="btn${element.id}"> Agregar al carrito </button>
        </div>
       `
    }) 


    catalogo.forEach(articulo=>{
        document.querySelector(`#btn${articulo.id}`).addEventListener("click",()=>{
            console.log(articulo)
            agregarAlCarrito(articulo)
           
            
                    
        });
        
    
    });

function agregarAlCarrito(articulo){
        
        let existe = carrito.some((element=>element.id === articulo.id))
        
        if (!existe){
            articulo.cantidad = 1,
            carrito.push(articulo)
        }else{
            articulo.cantidad++
            console.log(carrito)
        }
        mostrarCarrito();
    }

function mostrarCarrito(){
    divCarrito.innerHTML="";
    carrito.forEach((element)=>{
        divCarrito.innerHTML += 
        `<div class="cajaCarrito">
        <h3>${element.nombre}</h3> 
        <img style="width:100px;" class="imgcatalogo" src="${element.img}">
        <b>CANTIDAD: ${element.cantidad}</b>
        <button id="quitar${element.id}"> Quitar del carrito </button>
        </div>
       `;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    quitarArticulo();
    mostrarCompra();
}

function quitarArticulo(){
    carrito.forEach((articulo)=>{ 
        document
            .querySelector(`#quitar${articulo.id}`)
            .addEventListener("click",()=>{
            carrito = carrito.filter(element=>element.id !== articulo.id);
            compra = compra.filter(element=>element.id !== articulo.id);
            mostrarCarrito();
            mostrarCompra();
        });
    })
}

}


function mostrarCompra(){
    listaCompra.innerHTML="";
    carrito.forEach((element)=>{
        element.cantidad === 1 
        ? 
        listaCompra.innerHTML +=
        `<li>
        ${element.cantidad} ${element.nombre}: $${element.precio}</b> 
        </li>
       `
       :
        listaCompra.innerHTML +=
        `<li>
        ${element.cantidad} ${element.nombrePlural}: $${element.precio}*${element.cantidad}</b> 
        </li> 
       `
       }
    )};

const pagar = document.getElementById("pagar")

pagar.addEventListener("click", () =>{

    Swal.fire ({
        title: "Exito!",
        text: "Gracias por tu compra",
        icon: "success",
        confirmButtonText: "Salir"
    })
})


mostrarCatalogo() 


