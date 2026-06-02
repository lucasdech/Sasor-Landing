import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      gsap.from(".nav-inner", {
        y: -24,
        opacity: 0,
        duration: 0.6,
        delay: 0.05,
      });

      gsap.from(".page-hero-inner > *", {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });

      if (pathname === "/") {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
          .from(
            ".hero-title span",
            { opacity: 0, y: 40, stagger: 0.12, duration: 0.8 },
            "-=0.3",
          )
          .from(".hero-desc", { opacity: 0, y: 24, duration: 0.7 }, "-=0.4")
          .from(
            ".hero-cta .btn",
            { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 },
            "-=0.3",
          )
          .from(
            ".hero-phone",
            { opacity: 0, scale: 0.92, y: 60, duration: 1.1 },
            "-=0.8",
          );

        gsap.to(".hero-glow", {
          scale: 1.08,
          opacity: 0.7,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".map-bubble", {
          y: -8,
          duration: 2.2,
          stagger: { each: 0.35, from: "random" },
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.utils.toArray<HTMLElement>(".feature-card").forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 48,
            duration: 0.7,
            delay: i * 0.08,
          });
        });

        gsap.from(".map-section-content > *", {
          scrollTrigger: {
            trigger: ".map-section",
            start: "top 70%",
          },
          opacity: 0,
          x: -40,
          stagger: 0.15,
          duration: 0.8,
        });

        gsap.from(".map-preview", {
          scrollTrigger: {
            trigger: ".map-section",
            start: "top 70%",
          },
          opacity: 0,
          scale: 0.95,
          duration: 1,
        });

        gsap.from(".step-item", {
          scrollTrigger: {
            trigger: ".steps-grid",
            start: "top 80%",
          },
          opacity: 0,
          y: 32,
          stagger: 0.12,
          duration: 0.65,
        });

        gsap.from(".cta-box", {
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          scale: 0.98,
          duration: 0.9,
        });
      }

      if (pathname === "/tarifs") {
        gsap.from(".pricing-card", {
          scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" },
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.7,
        });
        gsap.from(".compare-table-wrap", {
          scrollTrigger: { trigger: ".pricing-compare", start: "top 85%" },
          opacity: 0,
          y: 24,
          duration: 0.8,
        });
      }

      if (pathname === "/faq") {
        gsap.from(".faq-sidebar", {
          opacity: 0,
          x: -24,
          duration: 0.6,
        });
        gsap.from(".faq-item", {
          scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
          opacity: 0,
          y: 20,
          stagger: 0.06,
          duration: 0.5,
        });
      }

      if (pathname === "/contact") {
        gsap.from(".contact-info > *", {
          opacity: 0,
          x: -24,
          stagger: 0.1,
          duration: 0.6,
        });
        gsap.from(".contact-form-wrap", {
          opacity: 0,
          y: 32,
          duration: 0.8,
          delay: 0.15,
        });
      }
    },
    { scope: rootRef, dependencies: [pathname] },
  );

  return rootRef;
}
