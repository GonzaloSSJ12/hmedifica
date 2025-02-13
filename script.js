document.addEventListener("DOMContentLoaded", function(){
  // Actualiza el enlace de WhatsApp
  var waLink = document.getElementById("whatsappLink");
  if (waLink) {
    var baseUrl = "https://wa.me/541128596257";
    var message = waLink.getAttribute("data-text");
    var encodedMessage = encodeURIComponent(message);
    waLink.href = baseUrl + "?text=" + encodedMessage;
  }

  // Aquí se mantienen el resto de tus scripts, por ejemplo:
  
  // Script para cargar imágenes adicionales en la galería
  document.getElementById("verMasBtn").addEventListener("click", function() {
    let galeria = document.getElementById("proyectosGaleria");
    // Cargar imágenes del 9 al 44
    for (let i = 9; i <= 44; i++) {
      let div = document.createElement("div");
      div.classList.add("col-md-3", "proyecto");
      div.innerHTML = `<img src="Fotos/foto${i}.webp" class="img-fluid" alt="Proyecto ${i} - Imagen de obra">`;
      galeria.appendChild(div);
    }
    document.getElementById("verMasBtn").style.display = "none";
    document.getElementById("verMenosBtn").style.display = "inline-block";
  });

  document.getElementById("verMenosBtn").addEventListener("click", function() {
    let galeria = document.getElementById("proyectosGaleria");
    let proyectos = galeria.getElementsByClassName("proyecto");
    while (proyectos.length > 8) {
      galeria.removeChild(proyectos[proyectos.length - 1]);
    }
    document.getElementById("verMasBtn").style.display = "inline-block";
    document.getElementById("verMenosBtn").style.display = "none";
  });

  // Delegación de eventos para ampliar imágenes en la galería
  document.getElementById("proyectosGaleria").addEventListener("click", function(e) {
    if (e.target && e.target.tagName === "IMG") {
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
      
      var enlargedImg = document.createElement('img');
      enlargedImg.src = e.target.src;
      enlargedImg.style.maxWidth = '90%';
      enlargedImg.style.maxHeight = '90%';
      enlargedImg.style.boxShadow = '0 0 15px #fff';
      
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
});
