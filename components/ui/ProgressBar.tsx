'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const progress = (current / total) * 100;

    return (
        <div className="w-full relative h-6 mb-8">
            {/* Background track */}
            <div className="absolute inset-0 bg-white rounded-full border-2 border-[var(--color-baby-pink)/30]" />

            {/* Fill */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 bg-[var(--color-baby-pink)] rounded-full border-2 border-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />

            {/* Icon indicator at the end of the bar */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 text-xl"
                style={{ left: `calc(${progress}% - 12px)` }}
                animate={{ left: `calc(${progress}% - 12px)` }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
                💖
            </motion.div>

            {/* Text label */}
            <div className="absolute right-0 -top-8 text-sm font-bold text-[var(--color-neon-pink)]">
                {current} / {total}
            </div>
        </div>
    );
}
