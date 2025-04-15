document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for your message! (This doesn't send yet — backend coming soon.)");
      form.reset();
    });
  });
  