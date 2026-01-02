"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
    {
        category: "Frontend",
        skills: ["React", "Next.js", "Angular", "Flutter", "TypeScript", "JavaScript"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        category: "Backend",
        skills: [".NET", "Node.js", "NestJS", "Python", "RESTful APIs"],
        color: "from-purple-500 to-pink-500",
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Firebase", "Entity Framework Core"],
        color: "from-green-500 to-emerald-500",
    },
    {
        category: "Tools & Practices",
        skills: ["Git", "GitLab CI/CD", "Docker", "Jest", "Agile/Scrum", "Unit Testing"],
        color: "from-orange-500 to-red-500",
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                                    <CardContent className="p-6">
                                        <div className="mb-4">
                                            <h3
                                                className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                            >
                                                {category.category}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <motion.div
                                                    key={skill}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-sm py-1.5 px-3 cursor-default hover:bg-primary/20 transition-colors"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <Card className="max-w-3xl mx-auto border-2">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3">Additional Expertise</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {[
                                        "Full-Stack Development",
                                        "SaaS Platforms",
                                        "Secure Transactions",
                                        "Payment Gateway Integration",
                                        "Multi-tenant Architecture",
                                        "Cross-platform Development",
                                    ].map((expertise) => (
                                        <Badge key={expertise} variant="outline" className="text-sm">
                                            {expertise}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
