$(document).ready(function() {
    $("#loginForm").submit(function(e) {
      e.preventDefault();
      const user = $("#username").val().trim();
      const pass = $("#password").val().trim();

      if (!user || !pass) {
        $("#error-msg").text("Por favor, llena todos los campos.").show();
      } else if (user === "demo" && pass === "demo123") {
        window.location.href = "timeline.html";
      } else {
        $("#error-msg").text("Usuario o contraseña incorrectos.").show();
      }
    });
  });