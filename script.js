document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((other) => {
        other.classList.remove("active");
        const icon = other.querySelector(".faq-icon");
        if (icon) icon.textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        const icon = item.querySelector(".faq-icon");
        if (icon) icon.textContent = "−";
      }
    });
  });

  const triggers = document.querySelectorAll(".lightbox-trigger");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxClose = document.getElementById("lightboxClose");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const image = trigger.getAttribute("data-image");
      const title = trigger.getAttribute("data-title") || "";

      lightboxImage.src = image;
      lightboxImage.alt = title;
      lightboxTitle.textContent = title;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxTitle.textContent = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});
