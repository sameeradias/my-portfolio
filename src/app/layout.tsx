import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sameeradias.coderatechnologies.com'),
  title: {
    default: "Sameera Roshan Dias | Software Engineer",
    template: "%s | Sameera Roshan Dias",
  },
  description: "Portfolio of Sameera Roshan Dias - Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter. 2+ years of experience building scalable web and mobile applications.",
  keywords: [
    "Sameera Roshan Dias",
    "Sameera Dias",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    ".NET Developer",
    "Node.js Developer",
    "Flutter Developer",
    "TypeScript",
    "Sri Lanka",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Sameera Roshan Dias", url: "https://sameeradias.coderatechnologies.com" }],
  creator: "Sameera Roshan Dias",
  publisher: "Sameera Roshan Dias",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameeradias.coderatechnologies.com",
    siteName: "Sameera Roshan Dias Portfolio",
    title: "Sameera Roshan Dias | Software Engineer",
    description: "Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter with 2+ years of experience building scalable web and mobile applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameera Roshan Dias - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameera Roshan Dias | Software Engineer",
    description: "Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter. Building scalable web and mobile applications.",
    images: ["/og-image.jpg"],
    creator: "@sameeradias",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
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
