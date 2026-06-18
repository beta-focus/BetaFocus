document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#heroText > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    gsap.from("#heroImage", {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.from("#highlightBanner", {
      scrollTrigger: {
        trigger: "#highlightBanner",
        start: "top 80%"
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".ingredient-card", {
      scrollTrigger: {
        trigger: "#ingredientes",
        start: "top 75%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    const nutTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#nutricion",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    nutTL.from("#nutricion .section-header", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".serving-card", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.4)" }, "-=0.2")
      .from(".nutrition-table-wrapper", { y: 30, opacity: 0, scale: 0.98, duration: 0.7, ease: "power2.out" }, "-=0.2")
      .from(".nutrition-footnote", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".ingredients-list", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");

    gsap.from(".use-step", {
      scrollTrigger: {
        trigger: "#uso",
        start: "top 75%"
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(".origin-callout", {
      scrollTrigger: {
        trigger: ".origin-callout",
        start: "top 80%"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".testimonials .testimonial-card", {
      scrollTrigger: {
        trigger: "#testimonios",
        start: "top 75%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });

    gsap.from("#ctaBox", {
      scrollTrigger: {
        trigger: "#comprar",
        start: "top 80%"
      },
      scale: 0.98,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }

  const hamburger = document.querySelector(".hamburger");
  const headerNav = document.querySelector(".header-nav");

  if (hamburger && headerNav) {
    hamburger.addEventListener("click", () => {
      const isActive = headerNav.classList.toggle("active");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isActive);
      document.body.style.overflow = isActive ? "hidden" : "";
    });

    headerNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        headerNav.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => other.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
});
