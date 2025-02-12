// Script para el Banner de Cookies
function setCookieConsent(consent) {
    localStorage.setItem('cookieConsent', consent);
    document.getElementById('cookieBanner').style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('cookieConsent')) {
      document.getElementById('cookieBanner').style.display = 'none';
    }
  });
  
  document.getElementById('acceptCookies').addEventListener('click', function() {
    setCookieConsent('accepted');
    // Aquí puedes activar scripts de cookies no esenciales.
  });
  
  document.getElementById('declineCookies').addEventListener('click', function() {
    setCookieConsent('declined');
    // Aquí podrías evitar cargar scripts no esenciales.
  });
  
  // Script para cargar imágenes adicionales en la galería de Proyectos
  document.getElementById("verMasBtn").addEventListener("click", function() {
    let galeria = document.getElementById("proyectosGaleria");
    // Cargar las imágenes restantes (del 9 al 44)
    for (let i = 9; i <= 44; i++) {
      let div = document.createElement("div");
      div.classList.add("col-md-3", "proyecto");
      div.innerHTML = `<img src="Fotos/foto${i}.webp" class="img-fluid" alt="Proyecto ${i} - Imagen de obra">`;
      galeria.appendChild(div);
    }
    // Mostrar botón "Ver Menos" y ocultar "Ver Más"
    document.getElementById("verMasBtn").style.display = "none";
    document.getElementById("verMenosBtn").style.display = "inline-block";
  });
  
  document.getElementById("verMenosBtn").addEventListener("click", function() {
    let galeria = document.getElementById("proyectosGaleria");
    // Eliminar imágenes agregadas dinámicamente dejando solo las primeras 8
    let proyectos = galeria.getElementsByClassName("proyecto");
    while (proyectos.length > 8) {
      galeria.removeChild(proyectos[proyectos.length - 1]);
    }
    // Mostrar botón "Ver Más" y ocultar "Ver Menos"
    document.getElementById("verMasBtn").style.display = "inline-block";
    document.getElementById("verMenosBtn").style.display = "none";
  });
  
  // Delegación de eventos para ampliar imágenes de Proyectos
  document.getElementById("proyectosGaleria").addEventListener("click", function(e) {
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
  