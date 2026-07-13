document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-nav");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  const setMenuState = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle("is-open", open);
  };

  if (menuButton && mobileMenu) {
    setMenuState(false);

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
