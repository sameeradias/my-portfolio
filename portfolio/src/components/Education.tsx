"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
    {
        degree: "BSc. in Applied Sciences",
        field: "Computer Science, Physics, Chemistry",
        institution: "Rajarata University of Sri Lanka",
        year: "2021 - 2024",
        icon: GraduationCap,
    },
    {
        degree: "GCE A/L Examination",
        field: "Bio Science Stream - 3 C's",
        institution: "Dharmasoka College, Ambalangoda",
        year: "2018",
        icon: Award,
    },
    {
        degree: "GCE O/L Examination",
        field: "8 A's, 1 B",
        institution: "Dharmasoka College, Ambalangoda",
        year: "2014",
        icon: Trophy,
    },
];

const extracurricular = [
    {
        role: "Chairperson",
        organization: "IEEE Student Branch",
        period: "2023 – 2024",
    },
    {
        role: "Vice Chairperson",
        organization: "IEEE Student Branch",
        period: "2022 – 2023",
    },
];

export function Education() {
    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Education & Leadership
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="max-w-4xl mx-auto">
                        {/* Education */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold mb-6">Academic Qualifications</h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                                            <CardHeader>
                                                <div className="flex items-start gap-4">
                                                    <div className="p-3 rounded-lg bg-primary/10">
                                                        <edu.icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <CardTitle className="text-lg mb-1">{edu.degree}</CardTitle>
                                                        <p className="text-sm text-muted-foreground mb-1">{edu.field}</p>
                                                        <p className="text-sm font-medium text-primary">{edu.institution}</p>
                                                        <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Extracurricular */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold mb-6">Leadership Experience</h3>
                            <Card className="border-2">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {extracurricular.map((activity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between pb-4 last:pb-0 border-b last:border-b-0 border-border"
                                            >
                                                <div>
                                                    <h4 className="font-semibold text-lg">{activity.role}</h4>
                                                    <p className="text-sm text-muted-foreground">{activity.organization}</p>
                                                </div>
                                                <span className="text-sm font-medium text-primary">{activity.period}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
