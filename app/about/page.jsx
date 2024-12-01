"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuroraBackgroundDemo() {
    const router = useRouter();
    const guide = async () => {
        router.push("/generate");
    }
    return (
        (<AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4">
                <div className="text-2xl md:text-4xl font-bold dark:text-white text-center sm:px-10">
                    Certifier For MAR is a cutting-edge digital certificate generator and minting website. Our platform allows users to create, manage, and distribute digital certificates with ease. Utilizing blockchain technology, we ensure that each certificate is unique, tamper-proof, and easily verifiable. Whether you are an educational institution, a professional organization, or a business, Certifier For MAR provides a seamless solution for all your certification needs
                </div>
                <div className="flex gap-x-10">
                    <button onClick={guide} className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-500 text-white hover:bg-transparent">
                            Generate Certificate
                        </div>
                    </button>
                </div>
            </motion.div>
        </AuroraBackground>)
    );
}
