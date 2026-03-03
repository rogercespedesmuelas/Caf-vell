import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedHero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["auténtico", "mediterráneo", "único", "especial", "tu casa"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter md:tracking-tight text-white mb-6 font-serif italic flex flex-col items-center justify-center gap-2 md:gap-4"
                    >
                        <span className="uppercase tracking-wider">CAFÈ VELL ES</span>
                        <span className="relative inline-flex w-full justify-center overflow-hidden h-[1.2em]">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={titleNumber}
                                    className="absolute left-0 right-0 text-gold"
                                    initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 20,
                                        opacity: { duration: 0.2 }
                                    }}
                                >
                                    {titles[titleNumber]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed"
                    >
                        Desde el primer café de la mañana hasta las últimas tapas de la noche.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export { AnimatedHero };
