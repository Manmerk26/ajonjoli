
 
  carrito= JSON.parse(localStorage.getItem('carrito')) || [];
  let detalleCompra = ""; 
  for (i=0;i<carrito.length;i++){
    detalleCompra+= `
Producto:${carrito[i].producto.nombre}
Cantidad:${carrito[i].cantidad} 
Precio:$${carrito[i].producto.precio}
Total:$${carrito[i].cantidad*carrito[i].producto.precio}
                     ` }

 
  mensaje = document.getElementById('mensaje');
  mensaje.value= detalleCompra;



(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
    console.log(forms)
  
    console.log(Array.from(forms)) 
    
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          Swal.fire({
            imageUrl: '/imagenes/imagenlogo.jpeg',
            imageHeight: 100,
            imageWidth: 100,
            background: '#d6d6d6',
            width: 300,
            title: `<h5 class="text-info">Error al completar el formulario de contacto.
            Verifique los datos ingresados.</h5>`,
            showConfirmButton: true,
          })
        }
        else{
        event.preventDefault()
        const enviarSolicitud = document.getElementById('enviar-solicitud');
        let nombre = document.getElementById('nombre');
        let apellido = document.getElementById('apellido');
        let email = document.getElementById('email');
        let telefono = document.getElementById('telefono');
        let direccion = document.getElementById('direccion');
        
       

        enviarSolicitud.value = 'Procesando...';

        //Enviamos informacion en forma de parametros a traves de la url
        let params = {
            user_id: 'yVrRAHjsxIJshwpBg',
            service_id: 'default_service',
            template_id: 'template_lnzcymw',
            template_params: {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            telefono: telefono.value,
            direccion: direccion.value,
            mensaje:mensaje.value
            }
        };
    
        let headers = {
            'Content-type': 'application/json'
        };
    
        
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        };
    
        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then(async (httpResponse) => {
            if (httpResponse.ok) {
                

                setTimeout(() => {
                    enviarSolicitud.value = 'Enviar';
                    Swal.fire({
                        imageUrl: '/imagenes/imagenlogo.jpeg',
                        imageHeight: 80,
                        imageWidth: 80,
                        background: '#d6d6d6',
                        width: 300,
                        title: '<h5 class="text-info">Formulario enviado</h5>',
                        showConfirmButton: true,
                    }).then(function () {
                        window.location.href = "../pages/porfolio.html";
                    })

                }, 2000);


            } else {
                const text = await httpResponse.text();
                return await Promise.reject(text);
            }
        })
        .catch((error) => {
            enviarSolicitud.value = 'Enviar';
            console.log(error)
            Swal.fire({
                imageUrl: '/imagenes/imagenlogo.jpeg',
                imageHeight: 80,
                imageWidth: 80,
                background: '#d6d6d6',
                width: 300,
                title: `<h5 class="text-info">No se pudo realizar el envio del formulario. Intente nuevamente.</h5>`,
                showConfirmButton: true,
              })
        });
        }
        
        form.classList.add('was-validated')
      }, false)
      })
    })()

    let botonLimpiarLocal = document.getElementById (`enviar-solicitud`);

    botonLimpiarLocal.onclick= () => {
        localStorage.clear();
    };


    

