"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "DevX Technologies Private Limited",
        role: "Software Engineer",
        period: "04/2025 - Present",
        location: "Sri Lanka",
        responsibilities: [
            "Developed production-grade SaaS applications with Next.js (React) front-end and .NET back-end, ensuring modular and scalable architecture",
            "Integrated secure payment flows and third-party services, aligning with fintech-grade standards",
            "Optimized queries in Entity Framework Core, reducing data retrieval time",
            "Created and maintained technical documentation for APIs and database architecture",
        ],
        technologies: ["Next.js", "React", ".NET", "Entity Framework Core", "SaaS"],
    },
    {
        company: "Echonlabs Private Limited",
        role: "Associate Software Engineer",
        period: "03/2024 - 04/2025",
        location: "Battaramulla",
        responsibilities: [
            "Built and maintained full-stack SaaS applications with Angular, NestJS, and MongoDB",
            "Built and optimized payment gateway integrations (transaction ledger, security, compliance), improving reliability and user trust",
            "Optimized database queries, improving reporting performance by 50%",
            "Developed unit and integration tests with Jest and participated in code reviews to uphold coding standards",
            "Managed deployments via GitLab CI/CD pipelines, ensuring reliable releases",
            "Collaborated in Agile ceremonies, breaking down complex tasks into actionable sprint items",
        ],
        technologies: ["Angular", "NestJS", "MongoDB", "Jest", "GitLab CI/CD"],
    },
    {
        company: "Echonlabs Private Limited",
        role: "Trainee Software Developer",
        period: "02/2023 - 03/2024",
        location: "Battaramulla",
        responsibilities: [
            "Contributed to finance-related large-scale web applications using Angular, Node.js, and MongoDB",
            "Researched industry best practices to ensure secure, seamless financial transactions",
            "Collaborated with cross-functional teams to troubleshoot and resolve technical issues",
            "Wrote unit and integration tests with Jest, reducing production bugs",
        ],
        technologies: ["Angular", "Node.js", "MongoDB", "Jest"],
    },
    {
        company: "DevX Technologies Private Limited",
        role: "Trainee Mobile Software Engineer",
        period: "08/2022 - 01/2023",
        location: "Sri Lanka",
        responsibilities: [
            "Developed mobile applications using Flutter, integrating secure payment processing and API consumption",
            "Implemented Firebase authentication and real-time database features to enhance app security and performance",
            "Integrated OneSignal push notifications, improving user engagement",
            "Collaborated with cross-functional teams for smooth deployment and delivery",
        ],
        technologies: ["Flutter", "Firebase", "OneSignal", "Mobile Development"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative mb-8 md:mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                                        } md:w-1/2`}
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" style={{
                                        left: index % 2 === 0 ? "calc(100% + 1px)" : "-9px"
                                    }} />

                                    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-4 mb-2">
                                                <div className="flex-1">
                                                    <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                                        <Briefcase className="h-4 w-4" />
                                                        <span>{exp.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {exp.responsibilities.map((resp, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
