'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    const baseStyles = "py-4 px-8 rounded-full font-bold text-lg shadow-md transition-shadow active:shadow-inner";
    const styles = variant === 'primary'
        ? "bg-gradient-to-r from-[var(--color-baby-pink)] to-[var(--color-neon-pink)] text-white border-2 border-white"
        : "bg-white text-[var(--color-dark-gray)] border-2 border-[var(--color-baby-pink)]";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                // "jiggle" effect on hover defaults to handled by Framer Motion gestures if complex,
                // but simple scale is good for now. For "purun" (jelly like), we can add keyframes on hover
            }}
            className={`${baseStyles} ${styles} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
