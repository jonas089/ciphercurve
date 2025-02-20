import React, { useState, useEffect } from "react";
import { AnimatedBackground } from 'animated-backgrounds';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="relative min-h-screen flex flex-col items-center px-6 space-y-10 sm:mt-10 mt-20">
                <AnimatedBackground animationName="auroraBorealis" />

                <div className="w-full lg:max-w-4xl bg-[#011627] text-white p-6 md:p-10 rounded-lg shadow-lg bg-opacity-50 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#41EAD4] mb-6">
                        Ciphercurve GmbH i.G.
                    </h1>
                    <a href="mailto:contact@ciphercurve.com" className="inline-block mt-6 px-6 py-3 bg-[#41EAD4] text-[#011627] font-semibold rounded-lg shadow-md hover:bg-[#1985A1] transition duration-300">
                        Contact Us
                    </a>
                </div>

                <div className="w-full lg:max-w-4xl bg-[#011627] text-white p-6 md:p-10 rounded-lg shadow-lg bg-opacity-50 text-center">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        We are a software company focussing on Rust and Blockchain development, with deep expertise in Applied Cryptography and Zero Knowledge Proofs.
                    </p>
                </div>


                <AnimatePresence>
                    {showArrow && (
                        <motion.div
                            className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 text-[#41EAD4]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ChevronDown className="w-20 h-20 animate-bounce" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="bg-[#011627] w-full">
                <div>
                    <section className="py-20 px-10 bg-[#012B3A] text-center">
                        <h2 className="text-4xl font-bold text-[#41EAD4] mb-8">Our Expertise</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-[#011627] rounded-lg shadow-md">
                                <h3 className="text-2xl text-[#41EAD4]">Blockchain Development</h3>
                                <p className="text-[#1985A1] mt-2">Building secure and scalable blockchain applications.</p>
                            </div>
                            <div className="p-6 bg-[#011627] rounded-lg shadow-md">
                                <h3 className="text-2xl text-[#41EAD4]">Rust Programming</h3>
                                <p className="text-[#1985A1] mt-2">Developing high-performance applications with Rust.</p>
                            </div>
                            <div className="p-6 bg-[#011627] rounded-lg shadow-md">
                                <h3 className="text-2xl text-[#41EAD4]">Cryptography Solutions</h3>
                                <p className="text-[#1985A1] mt-2">Expertise in STARKs, SNARKs, and secure computations.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;