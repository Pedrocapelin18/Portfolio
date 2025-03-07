// Adiciona interatividade aos ícones de redes sociais
document.querySelectorAll(".social-links a").forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault();
      const url = this.getAttribute("href");
      window.open(url, "_blank"); // Abre o link em uma nova aba
  });
});
