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
            <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 relative">
                <div>
                    <AnimatedBackground animationName="auroraBorealis" />
                    <div className="sm:w-full sm:left-[0.00%] w-1/2 md:w-1/3 absolute top-[15.00%] left-[10.00%] bg-[#011627] text-white p-6 rounded-lg shadow-lg bg-opacity-50">
                        <h1 className="text-5xl font-extrabold text-[#41EAD4] mb-6">Ciphercurve LLC</h1>
                        <p className="text-lg text-white leading-relaxed">
                            We are a software contracting company focussing on Rust and Blockchain development, with deep expertise in Applied Cryptography and Zero Knowledge Proofs.
                        </p>
                        <a href="mailto:contact@ciphercurve.com" className="inline-block mt-6 px-6 py-3 bg-[#41EAD4] text-[#011627] font-semibold rounded-lg shadow-md hover:bg-[#1985A1] transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>

                <AnimatePresence>
                    {showArrow && (
                        <motion.div
                            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-[#41EAD4]"
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
                    <section className="py-20 px-10 bg-[#012B3A] text-center border border-[#1985A1] rounded-lg">
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