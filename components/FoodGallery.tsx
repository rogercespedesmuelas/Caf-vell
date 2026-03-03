import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

const FoodGallery: React.FC = () => {
    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-[url('/bg-hero.jpeg')] bg-cover bg-center bg-scroll lg:bg-fixed"></div>
            <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {ASSETS.food.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                            }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        >
                            <img
                                src={item.url}
                                alt={item.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FoodGallery;
