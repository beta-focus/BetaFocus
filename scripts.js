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
