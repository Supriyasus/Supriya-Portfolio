import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection({ children, className = "" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 99%", "end 10%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const opacity = useTransform(smooth, [0, 1], [0.80, 1]);
  const y = useTransform(smooth, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
