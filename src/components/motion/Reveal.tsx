"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  // Safety net: if the IntersectionObserver-driven animation never fires
  // (e.g. unusual viewport/rendering environments), force content visible
  // after a short delay so it can never get stuck hidden.
  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
