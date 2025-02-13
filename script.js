document.addEventListener("DOMContentLoaded", function(){
  // Actualiza el enlace de WhatsApp con el mensaje predefinido
  var waLink = document.getElementById("whatsappLink");
  if (waLink) {
    var baseUrl = "https://wa.me/541128596257";
    var message = waLink.getAttribute("data-text");
    var encodedMessage = encodeURIComponent(message);
    waLink.href = baseUrl + "?text=" + encodedMessage;
  }

  // Banner de Cookies
  var acceptBtn = document.getElementById('acceptCookies');
  var declineBtn = document.getElementById('declineCookies');
  var cookieBanner = document.getElementById('cookieBanner');

  if(cookieBanner) {
    if (localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'none';
    }
  
    if(acceptBtn){
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.style.display = 'none';
        // Aquí puedes activar scripts de cookies no esenciales.
      });
    }
  
    if(declineBtn){
      declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.style.display = 'none';
        // Aquí podrías evitar cargar scripts no esenciales.
      });
    }
  }

  // Script para cargar imágenes adicionales en la galería de Proyectos
  var verMasBtn = document.getElementById("verMasBtn");
  var verMenosBtn = document.getElementById("verMenosBtn");
  var proyectosGaleria = document.getElementById("proyectosGaleria");
  
  if(verMasBtn) {
    verMasBtn.addEventListener("click", function() {
      // Cargar las imágenes restantes (del 9 al 44)
      for (let i = 9; i <= 44; i++) {
        let div = document.createElement("div");
        div.classList.add("col-md-3", "proyecto");
        div.innerHTML = `<img src="Fotos/foto${i}.webp" class="img-fluid" alt="Proyecto ${i} - Imagen de obra">`;
        proyectosGaleria.appendChild(div);
      }
      verMasBtn.style.display = "none";
      verMenosBtn.style.display = "inline-block";
    });
  }

  if(verMenosBtn) {
    verMenosBtn.addEventListener("click", function() {
      // Eliminar imágenes agregadas dinámicamente dejando solo las primeras 8
      let proyectos = proyectosGaleria.getElementsByClassName("proyecto");
      while (proyectos.length > 8) {
        proyectosGaleria.removeChild(proyectos[proyectos.length - 1]);
      }
      verMasBtn.style.display = "inline-block";
      verMenosBtn.style.display = "none";
    });
  }

  // Delegación de eventos para ampliar imágenes de Proyectos
  var gallery = document.getElementById("proyectosGaleria");
  if(gallery){
    gallery.addEventListener("click", function(e) {
      if (e.target && e.target.tagName === "IMG") {
        // Crear overlay para mostrar imagen ampliada
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1050';
        
        // Imagen ampliada
        var enlargedImg = document.createElement('img');
        enlargedImg.src = e.target.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.boxShadow = '0 0 15px #fff';
        
        // Botón para cerrar el overlay
        var closeButton = document.createElement('button');
        closeButton.innerText = 'Cerrar';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        
        closeButton.addEventListener('click', function() {
          overlay.remove();
        });
        
        overlay.appendChild(enlargedImg);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);
      }
    });
  }
});
