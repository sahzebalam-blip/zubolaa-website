const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function toggleModules(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.classList.toggle("open");
}

function toggleZubChat() {
  const chatBox = document.getElementById("zubChatBox");
  if (!chatBox) return;
  chatBox.classList.toggle("active");
}

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

document.addEventListener("click", function (e) {
  const chatWidget = document.querySelector(".zub-chat-widget");
  const chatBox = document.getElementById("zubChatBox");

  if (!chatWidget || !chatBox) return;

  if (!chatWidget.contains(e.target)) {
    chatBox.classList.remove("active");
  }
});

document.addEventListener("keydown", function (e) {
  const chatBox = document.getElementById("zubChatBox");
  if (!chatBox) return;

  if (e.key === "Escape") {
    chatBox.classList.remove("active");
  }
});
