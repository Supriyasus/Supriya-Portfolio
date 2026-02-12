"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../components/use-outside-click";
import cards from "../constants/Project.jsx";

export function Projects() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  // ESC + body scroll lock
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }

    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* PROJECT LIST */}
      <section
        className="container mx-auto max-w-7xl px-6 section-spacing"
        id="projects"
      >
        <h2 className="text-heading px-8 py-10">Projects</h2>

        <ul className="max-w-6xl mx-auto w-full gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row
                          items-center md:items-center
                          text-center md:text-left
                          justify-center md:justify-between
                          hover:bg-neutral-50 dark:hover:bg-neutral-800
                          rounded-xl cursor-pointer"

            >
              <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-60 md:h-20 md:w-30 rounded-lg
                               object-cover mx-auto md:mx-0 bg-neutral-100 dark:bg-neutral-800"
                  />
                </motion.div>

                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold
                           bg-neutral-700 hover:bg-[rgb(108,0,162)] hover:text-white
                           mt-4 md:mt-0 md:self-auto self-center"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </section>

      {/* MODAL (PORTAL) */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active && typeof active === "object" && (
              <>
                {/* BACKDROP */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/30 z-999"
                />

                {/* MODAL CONTAINER */}
                <div className="fixed inset-0 grid place-items-center z-1000 px-4">
                  {/* CLOSE BUTTON */}
                  <motion.button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 bg-white rounded-full
                               h-8 w-8 flex items-center justify-center"
                  >
                    <CloseIcon />
                  </motion.button>

                  {/* CARD */}
                  <motion.div
                    ref={ref}
                    layoutId={`card-${active.title}-${id}`}
                    className="w-full max-w-180 h-[80vh]
                               flex flex-col bg-white dark:bg-neutral-900
                               rounded-3xl overflow-hidden"
                  >
                    {/* IMAGE */}
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                      <img
                        src={active.src}
                        alt={active.title}
                        className="w-full h-56 object-cover
                                   bg-neutral-100 dark:bg-neutral-800"
                      />
                    </motion.div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 min-h-0">
                      {/* HEADER */}
                      <div className="flex justify-between items-start p-4">
                        <div>
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-bold text-neutral-700 dark:text-neutral-200"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-600 dark:text-neutral-400"
                          >
                            {active.description}
                          </motion.p>
                        </div>

                        <motion.a
                          layoutId={`button-${active.title}-${id}`}
                          href={active.ctaLink}
                          target="_blank"
                          className="px-4 py-2 text-sm rounded-full font-bold
                                     bg-[rgb(108,0,162)] text-white"
                        >
                          Know More
                        </motion.a>
                      </div>

                      {/* SCROLLABLE TEXT */}
                      <div className="flex-1 overflow-hidden px-4 pb-4 min-h-0">
                        <motion.div
                          className="h-full overflow-y-auto pr-4
                                     text-neutral-600 dark:text-neutral-400
                                     text-xs md:text-sm lg:text-base
                                     flex flex-col gap-4
                                     scrollbar-hide"
                        >
                          {typeof active.content === "function"
                            ? active.content()
                            : active.content}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

export default Projects;
