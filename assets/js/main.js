(() => {
  const header = document.getElementById("site-header");
  const menuButton = document.querySelector("[data-menu-button]");
  const navLinks = document.getElementById("site-nav");
  const hero = document.querySelector(".hero");

  const onScroll = () => {
    if (!header) return;
    const useLight = !hero || window.scrollY > 40;
    header.classList.toggle("scrolled", useLight);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(".nav-links a:not(.nav-cta)").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const normalized = href.replace(/^\.\//, "").replace(/^\.\.\//, "").replace(/\/$/, "");
      let active = false;
      if (page === "home") active = href === "./" || href === "../" || href === "/" || normalized === "";
      else if (page === "products") active = normalized === "products" || href === "./";
      else if (page === "solutions") active = normalized === "solutions" || href === "./";
      else if (page === "about") active = normalized === "about" || href === "./";
      else if (page === "contact") active = normalized === "contact" || href === "./";
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }
})();
