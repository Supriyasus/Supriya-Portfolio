"use client";
import { useEffect, useRef } from "react";
import "./DigitalPass.css";

const DigitalPass = () => {
  const wrapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const container = containerRef.current;
    if (!wrap || !container) return;

    const w = 300;
    const h = 360;

    const updateTilt = (x, y) => {
      const rY = (-(x - w / 2) / 3) / 3;
      const rX = ((y - h / 2) / 3) / 3;

      container.style.setProperty("--rY", rY.toFixed(2));
      container.style.setProperty("--rX", rX.toFixed(2));
      container.style.setProperty("--bX", `${50 - rY * 4}%`);
      container.style.setProperty("--bY", `${80 - rX * 4}%`);
    };

    const reset = () => {
      container.style.setProperty("--rX", 0);
      container.style.setProperty("--rY", 0);
      container.style.setProperty("--bX", "50%");
      container.style.setProperty("--bY", "80%");
    };

    // 🖱 Desktop
    const handleMouseMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      updateTilt(e.clientX - rect.left, e.clientY - rect.top);
    };

    // 📱 Mobile
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = wrap.getBoundingClientRect();
      updateTilt(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("touchmove", handleTouchMove, { passive: true });
    wrap.addEventListener("mouseleave", reset);
    wrap.addEventListener("touchend", reset);

    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("touchmove", handleTouchMove);
      wrap.removeEventListener("mouseleave", reset);
      wrap.removeEventListener("touchend", reset);
    };
  }, []);

  return (
    <div
        ref={wrapRef}
        className="
            digital-wrap
            flex justify-center lg:justify-end
            w-full lg:w-auto
            mt-12 lg:mt-0
        "
        >
        <div
            ref={containerRef}
            className="
            digital-container
            w-[220px] sm:w-[260px] lg:w-[280px]
            h-[280px] sm:h-[320px] lg:h-[360px]
            "
            style={{
            backgroundImage: "url(/assets/Profile.jpeg)",
            }}
        />
        </div>

  );
};

export default DigitalPass;
