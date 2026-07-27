(() => {
  const nav = document.querySelector(".nav");
  const year = document.querySelector("#year");
  const reveals = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const updateNav = () => {
    if (nav) {
      nav.classList.toggle("is-scrolled", window.scrollY > 40);
    }
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  reveals.forEach((element) => observer.observe(element));
})();
