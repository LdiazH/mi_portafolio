// Datos de proyectos más completos
    const proyectos = [
      {
        titulo: "Portafolio Personal",
        descripcion: "Sitio web profesional que muestra mi trayectoria, habilidades y proyectos realizados con un diseño moderno y responsive.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      },
      {
        titulo: "TaskMaster - Gestor de Tareas",
        descripcion: "Aplicación web interactiva para gestionar tareas pendientes con arrastrar y soltar, categorías y recordatorios.",
        tecnologias: ["React", "Node.js", "MongoDB", "Express"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      },
      {
        titulo: "E-commerce Boutique",
        descripcion: "Tienda online completa con carrito de compras, pasarela de pago y panel de administración.",
        tecnologias: ["JavaScript", "PHP", "MySQL", "Stripe API"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      },
      {
        titulo: "Blog de Tecnología",
        descripcion: "Plataforma de blog con sistema de comentarios, búsqueda y categorización de artículos.",
        tecnologias: ["React", "Firebase", "Tailwind CSS"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      },
      {
        titulo: "Clima App",
        descripcion: "Aplicación del clima con pronóstico extendido usando API de OpenWeatherMap y geolocalización.",
        tecnologias: ["JavaScript", "API REST", "LocalStorage"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      },
      {
        titulo: "Sistema de Reservas",
        descripcion: "Sistema para reservas de citas con calendario interactivo, notificaciones y confirmación por email.",
        tecnologias: ["Node.js", "Express", "MongoDB", "SendGrid API"],
        enlace: "#",
        imagen: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        github: "#"
      }
    ];

    // Renderizar proyectos
    $(document).ready(function() {
      proyectos.forEach(proyecto => {
        const tecnologiasHTML = proyecto.tecnologias.map(tech => 
          `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`
        ).join('');
        
        const tarjeta = `
          <div class="col-md-6 col-lg-4">
            <div class="card project-card h-100">
              <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
              <div class="card-body">
                <h5 class="card-title">${proyecto.titulo}</h5>
                <p class="card-text">${proyecto.descripcion}</p>
                <div class="mb-3">${tecnologiasHTML}</div>
              </div>
              <div class="card-footer bg-white border-0">
                <div class="d-flex justify-content-between">
                  <a href="${proyecto.enlace}" class="btn btn-sm btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt me-1"></i> Demo
                  </a>
                  <a href="${proyecto.github}" class="btn btn-sm btn-outline-secondary" target="_blank">
                    <i class="fab fa-github me-1"></i> Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
        $("#project-list").append(tarjeta);
      });

      // Manejar el formulario de contacto
      $("#contact-form").submit(function(e) {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
        this.reset();
      });
    });
