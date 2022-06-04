
const catalogo = [
    {id:1, img: "js/img/aro1.png", nombre:"Aro solitario turquesa", precio:2500, stock: 5, disponible: true},
    {id:2, img:"js/img/aro2.png", nombre:"Aro solitario naranja", precio:3000, stock: 5, disponible: true},
    {id:3, img:"js/img/aro3.png", nombre:"Aro solitario violeta", precio:2000, stock: 5, disponible: false},
]

console.log(catalogo)


const caja = document.getElementById("caja");
const divCarrito = document.getElementById("divCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function mostrarCatalogo (){
    catalogo.forEach(element=> {
        caja.innerHTML += 
        `<div class="aro">
        <h3>${element.nombre}</h3> 
        <img style="width:250px;" class="imgcatalogo" src="${element.img}">
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
            articulo.cantidad = 1;
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
        `<div class="aro">
        <h3>${element.nombre}</h3> 
        <img style="width:100px;" class="imgcatalogo" src="${element.img}">
        <b>CANTIDAD: ${element.cantidad}</b>
        <button id="quitar${element.id}"> Quitar del carrito </button>
        </div>
       `;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    quitarArticulo();
}

function quitarArticulo(){
    carrito.forEach((articulo)=>{ 
        document
            .querySelector(`#quitar${articulo.id}`)
            .addEventListener("click",()=>{
            carrito = carrito.filter(element=>element.id !== articulo.id);
            mostrarCarrito();
        });
    })
}

}

mostrarCatalogo() 
mostrarCarrito()    
          


