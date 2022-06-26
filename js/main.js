

const catalogo = [
    {id:1, img1: "js/img/aro1.png", img2: "js/img/aro1slide.jpeg", nombre:"Aro solitario turquesa", nombrePlural: "Aros solitarios turquesa", precio:2500, precioDesc: 2250, stock: 5, disponible: true},
    {id:2, img1:"js/img/aro2.png", img2: "js/img/aro2slide.jpeg", nombre:"Aro solitario naranja", nombrePlural: "Aros solitarios naranja", precio:3000, precioDesc: 2700, stock: 5, disponible: true},
    {id:3, img1:"js/img/aro3.png", img2: "js/img/aro3slide.jpeg", nombre:"Aro solitario violeta", nombrePlural: "Aros solitarios violeta", precio:2000, precioDesc: 1800, stock: 5, disponible: false},
]

console.log(catalogo)

const [articulo1, articulo2, articulo3] = catalogo


const caja = document.getElementById("caja");
const divCarrito = document.getElementById("divCarrito");
const listaCompra = document.getElementById("listaCompra");
const divTotal = document.getElementById("divTotal");

let carrito = []  ||  JSON.parse(localStorage.getItem("carrito"));
let compra = [] || JSON.parse(localStorage.getItem("compra"));


function mostrarCatalogo (){
    catalogo.forEach(element=> {
    
        caja.innerHTML += 

        `<div id="cajaProducto">
        
        <h3>${element.nombre}</h3> 
  
        <div class="fade">

        <div><img style="width:200px; repeat: no" class="imgcatalogo" src="${element.img1}"></div>
        <div><img style="width:200px;" class="imgcatalogo" src="${element.img2}"></div>

        </div>

        <b><u>Precio</u>: $${element.precio}</b>
        <button id="btn${element.id}"> Agregar al carrito </button>

        </div>
       `
       
    }) 
    
    $('.fade').slick()

    catalogo.forEach(articulo=>{
        document.querySelector(`#btn${articulo.id}`).addEventListener("click",()=>{
            console.log(articulo)

            agregarAlCarrito(articulo)
            mostrarModal()
    
            
                    
        });
        
    
    });

function agregarAlCarrito(articulo){
        
        let existe = carrito.some((element=> element.id === articulo.id))
        
        if (!existe){
            articulo.cantidad = 1,
            carrito.push(articulo)

        }else{
            articulo.cantidad++
            console.log(carrito)
        }


        mostrarCarrito();
        mostrarCompra();
    }
      
    const modal = document.getElementById("modal");    

function mostrarModal(){
    $(document).ready(function() {
    $("#modal").css({"display" : "block"}).fadeOut(4000)
    })};



function mostrarCarrito(){
    divCarrito.innerHTML="";
    carrito.forEach((element)=>{
        divCarrito.innerHTML += 
        `<div class="cajaCarrito">
        <img style="width:100px;" class="imgcatalogo" src="${element.img1}">
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
                let existe = carrito.some((element=> element.id === articulo.id))
        
        if (articulo.cantidad > 1){
            articulo.cantidad--

        }else{
            
            carrito = carrito.filter(element=>element.id !== articulo.id);
            compra = compra.filter(element=>element.id !== articulo.id);
        }

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
        ${element.cantidad} ${element.nombrePlural}: $${element.precio* element.cantidad}</b> 
        </li> 
       `
       }
    )
    mostrarTotal()
};



function mostrarTotal(){
    let total = 0;
    divTotal.innerHTML="";
    carrito.forEach((element)=>{

        const precio = element.precio
        const cantidad = element.cantidad

        total = total + precio*cantidad

        console.log(total);

        divTotal.innerHTML =
        `<h4><u>TOTAL</u>:
        $${total}
        </h4>
       `
    })
 
} 

mostrarCatalogo() 


