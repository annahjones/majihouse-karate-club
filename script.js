// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form demo (no backend)
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formMsg) formMsg.textContent = "✅ Message sent (demo). Add a backend later to receive messages.";
    contactForm.reset();
  });
}
function openImage(img){
  document.getElementById("imageViewer").style.display = "flex";
  document.getElementById("fullImage").src = img.src;
}

function closeImage(){
  document.getElementById("imageViewer").style.display = "none";
}