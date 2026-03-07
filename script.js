/* =========================
   Zubolaa Website Scripts
========================= */

/* Footer year auto update */
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* =========================
   Academy Modules Toggle
========================= */

function toggleModules(id) {

  const panel = document.getElementById(id);

  if (!panel) return;

  panel.classList.toggle("open");

}


/* =========================
   Future Ready Placeholder
========================= */

/* Smooth scroll fix for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    }

  });

});
