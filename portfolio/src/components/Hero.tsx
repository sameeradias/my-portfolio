"use client";

import { motion, easeOut } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />

            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div variants={itemVariants} className="mb-6">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                            Sameera Roshan Dias
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-semibold">
                            Software Engineer
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Full-stack developer specializing in React, Next.js, .NET, and Node.js.
                        Building scalable web and mobile applications with 2+ years of experience.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 mb-8"
                    >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>Sri Lanka</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>+94 76 1140 025</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span>sameeradias98@gmail.com</span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button asChild size="lg" className="group">
                            <a
                                href="https://www.linkedin.com/in/sameera-dias-387943110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="group">
                            <a
                                href="https://github.com/sameeradias"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                GitHub
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="group">
                            <a href="mailto:sameeradias98@gmail.com">
                                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                Email Me
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-foreground/40 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
