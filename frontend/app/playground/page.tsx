'use client'

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import Image from 'next/image'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const mountainRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const foregroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for full layout
    const handleLoad = () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.refresh();
        gsap.to(mountainRef.current, {
          y: -50,
          duration: 1.4
        })
        gsap.to(backgroundRef.current, {
          y: -80,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });

        gsap.fromTo(mountainRef.current, {
          y: -50,
        }, {
          y: -200,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });

        gsap.fromTo(foregroundRef.current, {
          y: -50,
          scale: 3,
          opacity: 0
        }, {
          y: 0,
          scale: 3,
          duration: 0.5,
          opacity: 1,
        });
      }, containerRef);

      return () => ctx.revert();
    };

    // Make sure DOM and images are ready
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="min-h-[300vh] relative">
      {/* Scroll-triggered parallax section */}
      <div ref={containerRef} className="relative h-[100vh] overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          <Image
            src="/background.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute z-10 left-1/2 top-[18rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          <div ref={foregroundRef}>
            Mountain
          </div>
        </div>
        <div
          ref={mountainRef}
          className="absolute top-0 left-0 w-full h-full z-20"
        >
          <Image
            src="/mountain.png"
            alt="mountain"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
