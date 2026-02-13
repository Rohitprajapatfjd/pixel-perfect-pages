import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

// Fade in from below
export const FadeIn = ({ children, className, delay = 0, duration = 0.6, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

// Slide up with more dramatic movement
export const SlideUp = ({ children, className, delay = 0, duration = 0.7, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Slide from left
export const SlideInLeft = ({ children, className, delay = 0, duration = 0.7, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

// Slide from right
export const SlideInRight = ({ children, className, delay = 0, duration = 0.7, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

// Scale reveal
export const ScaleReveal = ({ children, className, delay = 0, duration = 0.6, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

// Parallax wrapper - moves slower than scroll
interface ParallaxProps extends AnimationProps {
  speed?: number;
}

export const Parallax = ({ children, className, speed = 0.3 }: ParallaxProps) => (
  <motion.div
    className={className}
    initial={{ y: 0 }}
    whileInView={{ y: 0 }}
    viewport={{ once: false }}
    style={{ willChange: "transform" }}
    transition={{ duration: 0 }}
  >
    <motion.div
      initial={{ y: 50 * speed }}
      whileInView={{ y: -50 * speed }}
      viewport={{ once: false, margin: "-200px" }}
      transition={{ duration: 0.8, ease: "linear" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Stagger children animation container
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const StaggerContainer = ({ children, className, staggerDelay = 0.12, once = true }: StaggerProps) => (
  <motion.div
    className={className}
    variants={{
      ...staggerVariants,
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={staggerItemVariants}>
    {children}
  </motion.div>
);

// Section reveal with clip-path
export const RevealSection = ({ children, className, delay = 0, duration = 0.8, once = true }: AnimationProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once, margin: "-100px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);
