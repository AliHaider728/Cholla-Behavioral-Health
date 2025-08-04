import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// Register ScrollTrigger if available
if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger)
  })
}

export const useGSAP = () => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Fade in animation
    const fadeElements = element.querySelectorAll(".gsap-fade-in")
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Slide up animation
    const slideUpElements = element.querySelectorAll(".gsap-slide-up")
    slideUpElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Slide left animation
    const slideLeftElements = element.querySelectorAll(".gsap-slide-left")
    slideLeftElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Slide right animation
    const slideRightElements = element.querySelectorAll(".gsap-slide-right")
    slideRightElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Scale animation
    const scaleElements = element.querySelectorAll(".gsap-scale")
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Stagger animation
    const staggerElements = element.querySelectorAll(".gsap-stagger")
    if (staggerElements.length > 0) {
      gsap.fromTo(
        staggerElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: staggerElements[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    return () => {
      // Cleanup ScrollTrigger instances
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return ref
}
