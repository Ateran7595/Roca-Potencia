import { useEffect } from "react";

// Observe presentation elements only; forms and interactive controls remain usable.
const targets = [
  ".hero-photo",
  ".intro-image",
  ".welcome-section > div",
  ".editorial > div",
  ".editorial > h2",
  ".section-heading",
  ".location-card",
  ".community-feature > img",
  ".community-feature > div",
  ".newsletter-grid > div",
  ".visit-grid > div",
  ".photo-carousel",
  ".section-divider > h2",
  ".verse-section > .container",
  ".ministry-poster",
  ".video-block",
].join(", ");

export default function useScrollReveal(mainRef, route) {
  useEffect(() => {
    const root = mainRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || motionPreference.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const tracked = new Set();
    const reveal = (element, immediate = false) => {
      if (immediate) element.style.setProperty("--reveal-delay", "0ms");
      element.classList.add("is-revealed");
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    const register = () => {
      root.querySelectorAll(targets).forEach((element) => {
        if (tracked.has(element)) return;
        tracked.add(element);
        // Never hide content already on screen, including the initial hero.
        if (element.getBoundingClientRect().top < window.innerHeight - 32) return;
        element.style.setProperty("--reveal-delay", `${(tracked.size % 3) * 60}ms`);
        element.classList.add("scroll-reveal");
        observer.observe(element);
      });
    };
    register();

    // Firebase event carousels can arrive after the page's initial render.
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    const handleFocus = (event) => {
      const element = event.target.closest(".scroll-reveal");
      if (element) reveal(element, true);
    };
    const handleMotionChange = () => {
      if (!motionPreference.matches) return;
      observer.disconnect();
      mutations.disconnect();
      tracked.forEach((element) => reveal(element, true));
    };
    root.addEventListener("focusin", handleFocus);
    motionPreference.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener("focusin", handleFocus);
      motionPreference.removeEventListener("change", handleMotionChange);
      tracked.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [mainRef, route]);
}
