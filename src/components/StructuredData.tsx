export function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sameera Roshan Dias",
        alternateName: "Sameera Dias",
        jobTitle: "Software Engineer",
        description: "Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter with 2+ years of experience building scalable web and mobile applications.",
        email: "sameeradias98@gmail.com",
        telephone: "+94761140025",
        address: {
            "@type": "PostalAddress",
            addressCountry: "LK",
            addressLocality: "Sri Lanka",
        },
        url: "https://sameeradias.coderatechnologies.com",
        sameAs: [
            "https://www.linkedin.com/in/sameera-dias-387943110",
            "https://github.com/sameeradias",
        ],
        knowsAbout: [
            "React",
            "Next.js",
            ".NET",
            "Node.js",
            "Flutter",
            "TypeScript",
            "JavaScript",
            "Full Stack Development",
            "Web Development",
            "Mobile Development",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Sameera Roshan Dias - Software Engineer Portfolio",
        description: "Portfolio of Sameera Roshan Dias - Full-stack Software Engineer specializing in React, Next.js, .NET, Node.js, and Flutter.",
        url: "https://sameeradias.coderatechnologies.com",
        author: {
            "@type": "Person",
            name: "Sameera Roshan Dias",
        },
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateCreated: "2026-01-03T14:20:00+05:30",
        dateModified: new Date().toISOString(),
        mainEntity: {
            "@type": "Person",
            name: "Sameera Roshan Dias",
            jobTitle: "Software Engineer",
            url: "https://sameeradias.coderatechnologies.com",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
        </>
    );
}
