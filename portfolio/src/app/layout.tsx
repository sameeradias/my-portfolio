import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sameera Roshan Dias | Software Engineer",
  description: "Portfolio of Sameera Roshan Dias - Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter. 2+ years of experience building scalable web and mobile applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", ".NET", "Node.js", "Flutter", "TypeScript"],
  authors: [{ name: "Sameera Roshan Dias" }],
  openGraph: {
    title: "Sameera Roshan Dias | Software Engineer",
    description: "Full-stack Software Engineer specializing in modern web and mobile development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
