var nombre = document.getElementById('name');
var correo = document.getElementById('email');
var asunto = document.getElementById('subject');
var mensaje = document.getElementById('message');
var error = document.getElementById('Error');
error.style.color = 'Red';

// function enviarFormulario(){
//     console.log('Enviando formulario...');

//     var mensajesError = [];
    
//     if(nombre.value === null || nombre.value === ''){
//         mensajesError.push('Ingresa tu nombre');
//     }
//     if(correo.value === null || correo.value === ''){
//         mensajesError.push('Ingresa tu email');
//     }

//     if(asunto.value === null || asunto.value === ''){
//         mensajesError.push('Ingresa un asunto');
//     }
//     if(mensaje.value === null || mensaje.value === ''){
//         mensajesError.push('Ingresa un mensaje');
//     }

//     error.innerHTML = mensajesError.join(', ');

//     return false
    
// }

var form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
         var mensajesError = [];
    
            if(nombre.value === null || nombre.value === ''){
                mensajesError.push('Ingresa tu nombre');
            }
            if(correo.value === null || correo.value === ''){
                mensajesError.push('Ingresa tu email');
            }

            if(asunto.value === null || asunto.value === ''){
                mensajesError.push('Ingresa un asunto');
            }
            if(mensaje.value === null || mensaje.value === ''){
                mensajesError.push('Ingresa un mensaje');
            }

            error.innerHTML = mensajesError.join(', ');

})