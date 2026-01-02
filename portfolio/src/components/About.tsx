"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: Code2,
            title: "Full-Stack Expertise",
            description: "Proficient in modern web and mobile technologies including React, Next.js, .NET, Node.js, and Flutter",
        },
        {
            icon: Rocket,
            title: "Scalable Solutions",
            description: "Experience building production-grade SaaS applications with focus on performance and security",
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Thrives in Agile environments with strong communication and code review practices",
        },
    ];

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                        <p className="text-center text-muted-foreground text-lg leading-relaxed">
                            Versatile Software Engineer with 2+ years of experience in full-stack web and mobile development.
                            Skilled in building secure backend APIs, optimizing databases, and creating modern UIs.
                            Quick learner who adapts to new technologies and thrives in Agile, collaborative teams.
                            Passionate about scalable, high-quality solutions across diverse tech stacks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                                    <CardContent className="p-6 text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                            <highlight.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                                        <p className="text-muted-foreground">{highlight.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
