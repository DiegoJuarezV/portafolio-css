(function () {
  emailjs.init("d8741liG6DNIprBLi"); 
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      nombre: form.nombre.value,
      email: form.email.value,
      numero: form.numero.value,
      asunto: form.asunto.value,
      mensaje: form.mensaje.value
    };

    emailjs.send("service_196th9i", "template_hv0gjrq", templateParams)
      .then(function (response) {
        Swal.fire({
          title: '😊👌',
          text: '¡Gracias! Tu mensaje fue enviado correctamente.',
          icon: 'success',
          width: '50rem',
          background: '#081b29',
          color: '#ffffff',
          customClass: {
            popup: 'custom-swal-modal'
          },
          confirmButtonColor: '#00abf0',
          confirmButtonText: 'Aceptar'
        });
        form.reset();
      }, function (error) {
        Swal.fire({
          title: '😓',
          text: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.',
          icon: 'error',
          width: '50rem',
          background: '#081b29',
          color: '#ffffff',
          customClass: {
            popup: 'custom-swal-modal'
          },
          confirmButtonColor: '#00abf0',
          confirmButtonText: 'Aceptar'
        });
      });
  });
});
