"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { twMerge as cn } from "tailwind-merge";
import { motion } from "framer-motion";

/* =========================
   CAROUSEL
========================= */
export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex w-full overflow-x-scroll scroll-smooth py-10 [scrollbar-width:none] md:py-16"
      >
        <div className="flex gap-4 pl-6 pr-[20vw]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mr-10 flex justify-end gap-2">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

/* =========================
   CARD
========================= */
export const Card = ({ card }) => {
  return (
    <motion.div
      className="
        relative flex-shrink-0 overflow-hidden
        rounded-xl bg-gray-100 dark:bg-neutral-900
      "
    >
      {/* Responsive dimensions */}
      <div
        className="
          relative
          h-[480px] w-[380px]
          sm:h-[260px] sm:w-[320px]
          md:h-[520px] md:w-[380px]
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />

        {/* Text */}
        <div className="relative z-30 p-5">
          <p className="text-xs sm:text-sm font-medium text-white">
            {card.category}
          </p>
          <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {card.title}
          </h3>
        </div>

        {/* Image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
        />
      </div>
    </motion.div>
  );
};

/* =========================
   BLUR IMAGE
========================= */
export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoading(false)}
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};

export default { Carousel, Card };
