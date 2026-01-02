"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sameeradias98@gmail.com",
        href: "mailto:sameeradias98@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+94 76 1140 025",
        href: "tel:+94761140025",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Sri Lanka",
        href: null,
    },
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sameera-dias-387943110",
        color: "hover:text-blue-500",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/sameeradias",
        color: "hover:text-purple-500",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

                    <div className="max-w-3xl mx-auto">
                        <Card className="border-2">
                            <CardContent className="p-8">
                                <p className="text-center text-lg text-muted-foreground mb-8">
                                    I'm always open to discussing new opportunities, interesting projects, or
                                    potential collaborations. Feel free to reach out!
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {contactInfo.map((contact, index) => (
                                        <motion.div
                                            key={contact.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="text-center"
                                        >
                                            {contact.href ? (
                                                <a
                                                    href={contact.href}
                                                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors group"
                                                >
                                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                        <contact.icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-muted-foreground mb-1">
                                                            {contact.label}
                                                        </p>
                                                        <p className="text-sm font-semibold">{contact.value}</p>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div className="flex flex-col items-center gap-3 p-4">
                                                    <div className="p-3 rounded-full bg-primary/10">
                                                        <contact.icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-muted-foreground mb-1">
                                                            {contact.label}
                                                        </p>
                                                        <p className="text-sm font-semibold">{contact.value}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center gap-6">
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <Button
                                                key={social.label}
                                                asChild
                                                variant="outline"
                                                size="lg"
                                                className="group"
                                            >
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={social.color}
                                                >
                                                    <social.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                                    {social.label}
                                                </a>
                                            </Button>
                                        ))}
                                    </div>

                                    <Button asChild size="lg" className="group">
                                        <a href="mailto:sameeradias98@gmail.com">
                                            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                            Send me an email
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
