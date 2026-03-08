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
function toggleZubChat() {
  const chatBox = document.getElementById("zubChatBox");
  if (chatBox) {
    chatBox.classList.toggle("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const zubBotNames = ["Zubi", "Booboo", "Zuzu", "Laddu"];
  const randomBot = zubBotNames[Math.floor(Math.random() * zubBotNames.length)];

  const botNameEl = document.getElementById("zubBotName");
  const botWelcomeEl = document.getElementById("zubBotWelcome");
  const yearEl = document.getElementById("year");

  if (botNameEl) {
    botNameEl.textContent = randomBot + " Assistant";
  }

  if (botWelcomeEl) {
    botWelcomeEl.innerHTML =
      "Hi 👋<br>I’m <strong>" + randomBot + "</strong>, your Zubolaa assistant.<br><br>" +
      "You can explore:<br>" +
      "• Trading Academy<br>" +
      "• Digital Services<br>" +
      "• Participation Program<br>" +
      "• ZBL Token Ecosystem<br><br>" +
      "How would you like to continue?";
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("click", function (event) {
    const widget = document.querySelector(".zub-chat-widget");
    const chatBox = document.getElementById("zubChatBox");
    if (!widget || !chatBox) return;

    const clickedInside = widget.contains(event.target);
    if (!clickedInside && chatBox.classList.contains("active")) {
      chatBox.classList.remove("active");
    }
  });
});

document.addEventListener("keydown", function (e) {
  const chatBox = document.getElementById("zubChatBox");
  if (!chatBox) return;

  if (e.key === "Escape") {
    chatBox.classList.remove("active");
  }
});
