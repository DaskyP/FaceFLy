$(document).ready(function() {
    $("#genero").change(function() {
      if ($(this).val() === "Otro") {
        $("#otroContainer").show();
      } else {
        $("#otroContainer").hide();
        $("#otroText").val('');
      }
    });
  
    $("#registerForm").submit(function(e) {
      e.preventDefault();
      let errors = [];
      const username = $("#username").val().trim();
      const password = $("#password").val().trim();
      const confirmPassword = $("#confirmPassword").val().trim();
      const email = $("#email").val().trim();
      const nombre = $("#nombre").val().trim();
      const genero = $("#genero").val();
      const fechaNac = $("#fechaNacimiento").val();
  
      if (!username || !password || !confirmPassword || !email || !nombre || !genero || !fechaNac) {
        errors.push("Todos los campos obligatorios deben completarse.");
      }
      if (password !== confirmPassword) {
        errors.push("Las contraseñas no coinciden.");
      }
      if (email && (!email.includes("@") || !email.includes("."))) {
        errors.push("Email no es válido.");
      }
      if (fechaNac) {
        let cumple = new Date(fechaNac);
        let hoy = new Date();
        let edad = hoy.getFullYear() - cumple.getFullYear();
        if (edad < 18) {
          errors.push("Debes tener al menos 18 años.");
        }
      }
      if (errors.length > 0) {
        $("#error-msg").html(errors.join("<br>")) .show();
      } else {
        $("#error-msg").hide();
        alert("Registro exitoso (simulado)");
        window.location.href = "login.html";
      }
    });
  });