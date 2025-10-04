document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar "active" de todos los botones
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Ocultar todas las secciones
      sections.forEach(sec => sec.classList.remove("active"));

      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById("cards-inicio").classList.remove("active");

      // Mostrar la sección correspondiente
      const target = btn.getAttribute("data-section");
      document.getElementById(target).classList.add("active");

      // Si en "inicio" quieres que también aparezcan las cards
      if (target === "inicio") {
        document.getElementById("cards-inicio").classList.add("active");
      }
    });
  });
});

