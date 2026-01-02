"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "React ERP Application",
        description:
            "Developed comprehensive ERP platform with React frontend and .NET backend, focusing on scalability and multi-tenant architecture. Implemented modular design patterns for easy maintenance and feature expansion.",
        technologies: ["React", ".NET", "Multi-tenant", "Scalable Architecture"],
        highlights: [
            "Multi-tenant SaaS architecture",
            "Scalable and modular design",
            "Production-grade implementation",
        ],
    },
    {
        title: "SaaS Based ERP Platform",
        description:
            "Built a comprehensive SaaS-based ERP solution with secure authentication, extensive testing coverage, and thorough technical documentation. Focused on enterprise-grade security and reliability.",
        technologies: ["SaaS", "Authentication", "Testing", "Documentation"],
        highlights: [
            "Secure authentication system",
            "Comprehensive unit & integration tests",
            "Detailed API documentation",
        ],
    },
    {
        title: "Full-Stack Mobile Application",
        description:
            "Developed cross-platform mobile application with secure real-time data synchronization and Firebase authentication. Integrated payment processing and push notifications for enhanced user engagement.",
        technologies: ["Flutter", "Firebase", "Real-time Sync", "Mobile"],
        highlights: [
            "Cross-platform compatibility",
            "Real-time data synchronization",
            "Secure Firebase authentication",
        ],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-2">
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                {project.title}
                                            </CardTitle>
                                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                        </div>
                                        <CardDescription className="text-sm leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col justify-between">
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
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
