
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "scaleUp" | "slideRight";
}

const animations = {
    fadeUp: {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { type: "spring", stiffness: 50, damping: 20 } as const,
    },
    fadeIn: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" } as const,
    },
    scaleUp: {
        initial: { opacity: 0, scale: 0.92 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { type: "spring", stiffness: 50, damping: 20 } as const,
    },
    slideRight: {
        initial: { opacity: 0, x: -15 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { type: "spring", stiffness: 50, damping: 20 } as const,
    },
};

const MotionWrapper = ({
    children,
    delay = 0,
    className = "",
    animation = "fadeUp",
}: MotionWrapperProps) => {
    const selectedAnimation = animations[animation];

    return (
        <motion.div
            initial={selectedAnimation.initial}
            whileInView={selectedAnimation.whileInView}
            viewport={selectedAnimation.viewport}
            transition={{ ...selectedAnimation.transition, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
