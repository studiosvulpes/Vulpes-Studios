const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));

const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const eventInfo = {
  "last-life": ["Last Life", "Un evento de supervivencia y permadeath creado por Vulpes Studios. Mantente atento al Discord para conocer fechas, reglas, inscripciones y novedades."],
  "next": ["Próximo desafío", "Este proyecto todavía está en desarrollo. Las primeras noticias e información oficial se publicarán en nuestros canales."],
  "secret": ["Proyecto secreto", "Todavía no podemos revelar todos los detalles. Únete al Discord para enterarte cuando llegue el momento."]
};
document.querySelectorAll("[data-event]").forEach(btn => {
  btn.addEventListener("click", () => {
    const info = eventInfo[btn.dataset.event];
    modalTitle.textContent = info[0];
    modalText.textContent = info[1];
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});
document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
function closeModal(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); }

document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
