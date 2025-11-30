const observers = new WeakMap<HTMLElement, IntersectionObserver>();

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const vAppear = {
  mounted(el: HTMLElement) {
    if (prefersReducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all .6s ease";

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      });
    });

    observers.set(el, observer);
    observer.observe(el);
  },
  unmounted(el: HTMLElement) {
    const observer = observers.get(el);
    if (observer) {
      observer.unobserve(el);
      observer.disconnect();
      observers.delete(el);
    }
  },
};