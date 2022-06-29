const form = document.getElementById('form');
const btn = document.getElementById('btnMensaje');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar mensaje';
      
    btn.addEventListener("click", () =>{
    form.innerHTML=
    `<p>Gracias por escribirnos! <br> 
    Te responderemos a la brevedad.</p>`

    
    
})
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});