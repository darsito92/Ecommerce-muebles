 const modalImagen = document.querySelector('#modal-imagen');
 modalImagen.addEventListener('show.bs.modal',function(event){
    const enlace = event.relatedTarget;
    const rutaImagen =enlace.getAttribute('data-bs-imagen')

    //construir la imagen
    const imagen = document.createElement('IMG');
    imagen.src=`img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid')
    imagen.alt = 'Imagen Galeria';

    console.log(imagen)

    const contenidoModal = document.querySelector('.modal-body')
    contenidoModal.appendChild(imagen);
 });

 modalImagen.addEventListener('hidden.bs.modal',function(){
    const contenidoModal = document.querySelector('.modal-body')
    contenidoModal.textContent = '';
 })