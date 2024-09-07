'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const Animation = ({
    children,
    speed = 1,
    y = 0,
    x = 0,
    className,
}: {
    children?: ReactNode
    speed?: number
    y?: number
    x?: number
    className?: string
}) => {
    const variants = {
        hidden: { y: y, x: x, opacity: 0 },
        visible: (speed: number) => ({
            y: 0,
            x: 0,
            opacity: 1,
            transition: { delay: speed * 0.2 },
        }),
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={speed}
            className={className}
        >
            {children}
        </motion.div>
    )
}
