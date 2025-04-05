
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
                                    
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  })
  //sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const projectId = btn.dataset.project;
      showProjectInfo(projectId);
    });
  });
  
  function showProjectInfo(projectId) {
    const projects = {
      odontologos: {
        title: 'Administrador de Odontólogos',
        description: 'Este proyecto es un sistema de gestión para una clínica odontológica que permite registrar pacientes, odontólogos y turnos.',
        techs: ['React.js', 'CSS', 'LocalStorage']
      },
      veterinaria: {
        title: 'Registro Veterinaria',
        description: 'Aplicación para registrar mascotas, dueños y consultas veterinarias. Ideal para clínicas pequeñas. Registra los sintomas y proporciona un ID único a cada uno de ellos.',
        techs: ['React.js', 'Tailwind CSS', 'TypeScript', 'Zustand']
      },
      calorias: {
        title: 'Control de Calorías',
        description: 'App que permite llevar un control de calorías diarias mediante ingreso de alimentos y cantidades, y el ejercicio hecho a lo largo del día.',
        techs: ['React.js', 'Tailwind CSS', 'LocalStorage']
      },
      gastos: {
        title: 'Control de Gastos',
        description: 'Herramienta para gestionar gastos personales y mensuales con visualización simple, dinámica y que proporciona un filtro con categorias para una busqueda más ágil del gasto ingresado.',
        techs: ['React.js', 'Tailwind CSS', 'React-date-picker', 'headlessui']
      },
      consumo: {
        title: 'Tabla de Consumo',
        description: 'La finalidad de este proyecto es mostrar el menú de comida ofrecida en un establecimiento donde podrás visualizar el total de la compra, agregar propina y eliminar lo agregado si asi lo deseas.',
        techs: ['React.js', 'Tailwind CSS', 'TypeScript']
      }
    };
  
    const project = projects[projectId];
  
    if (!project) return;
  
    const techList = project.techs.map(tech => `<li>${tech}</li>`).join('');
  
    Swal.fire({
      title: project.title,
      html: `
        <p style="font-size: 1.3rem; margin-bottom: 1rem;">${project.description}</p>
        <h2>Tecnologías/Herramientas usadas:</h2>
        <ul style="text-align: left; font-size: 1.2rem; line-height: 1.6;">${techList}</ul>
      `,
      icon: 'info',
      width: '50rem',
      background: '#081b29',
      color: '#ffffff',
      customClass: {
        popup: 'custom-swal-modal'
      },
      confirmButtonColor: '#00abf0',
      confirmButtonText: 'Cerrar'
    });
  }
})

document.addEventListener('DOMContentLoaded', () => {
  let readMoreBtn = document.querySelector('.read-more');

  readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Conocimientos e inicio en el Desarrollo Web',
      icon: 'info',
      html: `
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">
          He estado involucrado en el Desarrollo Web durante los ultimos 2 años, siendo autodidacta y realizando cursos sobre programación y desarrollo en el ámbito frontend y backend, Mis mayores conocimientos los adquirí durante mi certificación de Professional Developer en Digital House en conjunto con Mercado Libre y Globant, el cual tuvo una duracion de 1 año y medio. Mis principales habilidades son HTML, CSS y JavaScript, así como Java. También he estudiado y trabajado con frameworks y librerías como React.js y Spring Boot.
        </p>
        <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">
          Principales tecnologías que manejo dentro del desarrollo web:
        </h3>
        <ul style="text-align: left; font-size: 1.2rem; line-height: 1.6;">
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>AWS (EC2, S3, RDS)</li>
          <li>GIT/GITHUB</li>
        </ul>
      `,
      width: '50rem',
      background: '#081b29',
      color: '#ffffff',
      customClass: {
        popup: 'custom-swal-modal'
      },
      confirmButtonColor: '#00abf0',
      confirmButtonText: 'Cerrar'
    });
  })
})

document.addEventListener('DOMContentLoaded', () => {
  let toggleBtn = document.querySelector('.btns .btn-more');
  let hiddenProject = document.querySelectorAll('.project-card.hidden');

  console.log(toggleBtn);
  console.log(hiddenProject);

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    hiddenProject.forEach(project => {
      project.classList.toggle('hidden');
    })

    const icon = toggleBtn.querySelector('i');
    if (icon.classList.contains('bx-plus-circle')) {
      icon.classList.replace('bx-plus-circle', 'bx-minus-circle');
    } else {
      icon.classList.replace('bx-minus-circle', 'bx-plus-circle');
    }
  })
})
