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
   Zubolaa Chat Widget
========================= */

function toggleZubChat() {
  const chatBox = document.getElementById("zubChatBox");

  if (!chatBox) return;

  chatBox.classList.toggle("active");
}


/* =========================
   Smooth Scroll for Anchor Links
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId.length <= 1) return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      const chatBox = document.getElementById("zubChatBox");
      if (chatBox) {
        chatBox.classList.remove("active");
      }
    }
  });
});


/* =========================
   Close Chat on Outside Click
========================= */

document.addEventListener("click", function (e) {
  const chatWidget = document.querySelector(".zub-chat-widget");
  const chatBox = document.getElementById("zubChatBox");

  if (!chatWidget || !chatBox) return;

  if (!chatWidget.contains(e.target)) {
    chatBox.classList.remove("active");
  }
});


/* =========================
   Escape Key Closes Chat
========================= */

document.addEventListener("keydown", function (e) {
  const chatBox = document.getElementById("zubChatBox");

  if (!chatBox) return;

  if (e.key === "Escape") {
    chatBox.classList.remove("active");
  }
});
