import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorFog } from "@/components/cursor-fog";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://thaju.vercel.app"),

  title: {
    default: "Thajul Niyas | Freelance Web Developer in Wayanad, Kerala",
    template: "%s | Thajul Niyas",
  },

  description:
    "Looking for a top Freelance Web Developer in Wayanad, Kerala? Thajul Niyas builds high-performance websites using Next.js, React, Node.js, and Express. Trusted by businesses across India and worldwide.",

  keywords: [
    "Freelance Web Developer Wayanad",
    "Web Developer Kerala",
    "Full Stack Developer Kerala",
    "Next.js Developer India",
    "React Developer Kerala",
    "Node.js Developer India",
    "Best Web Developer Wayanad",
    "Hire Web Developer Kerala",
    "Portfolio Thajul Niyas",
  ],

  authors: [{ name: "Thajul Niyas", url: "https://thaju.vercel.app" }],
  creator: "Thajul Niyas",
  publisher: "Thajul Niyas",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thaju.vercel.app",
    title: "Thajul Niyas | Freelance Full Stack Developer (Kerala, India)",
    description:
      "Expert in Next.js, React, Node.js, API development & high-performance websites. Freelance developer based in Wayanad, Kerala.",
    siteName: "Thajul Niyas Portfolio",
    images: [
      {
        url: "/thaju.png",
        width: 1200,
        height: 630,
        alt: "Thajul Niyas – Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@your_twitter_handle",
    title: "Thajul Niyas | Next.js & Node.js Developer (India)",
    description:
      "Freelance Full Stack Developer specializing in React, Next.js, Node.js, and scalable backend APIs.",
    images: ["/thaju.png"],
  },

  verification: {
    google: "o0ybReO9_BPYj2bJZA-rWSZOjHMuPWtU1_8jleqpxl0",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Wayanad",
    "geo.position": "11.6854;76.1320",
    ICBM: "11.6854, 76.1320",
    "theme-color": "#000000",
    "format-detection": "telephone=yes",
    "language": "English",
    "author": "Thajul Niyas",
    "contact": "thajulniyas100@gmail.com",
    "reply-to": "thajulniyas100@gmail.com",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thajul Niyas",
    alternateName: "Thaju",
    jobTitle: "Freelance Full Stack Developer",
    description:
      "Top-rated Freelance Web Developer in Wayanad, Kerala, India. Specializing in Next.js, React, Node.js, Express.js, MongoDB, PostgreSQL, and AWS. Building high-performance web applications for global clients.",
    url: "https://thaju.vercel.app",
    image: "https://thaju.vercel.app/thaju.png",
    email: "thajulniyas100@gmail.com",
    telephone: "+91-7736701050",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wayanad",
      addressRegion: "Kerala",
      postalCode: "673579",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/1thaju",
      "https://linkedin.com/in/thajul-niyas",
      "https://www.instagram.com/thaju.n_",
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "AWS",
      "Vercel",
      "Git",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Development",
      "API Development",
      "Frontend Development",
      "Backend Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "JCT College of Engineering and Technology",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Degree",
      educationalLevel: "Bachelor's Degree",
      about: "Computer Science",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Thajul Niyas - Freelance Web Development Services",
    description:
      "Professional freelance web development services specializing in Next.js, React, Node.js, and full-stack development. Based in Wayanad, Kerala, serving clients worldwide.",
    provider: {
      "@type": "Person",
      name: "Thajul Niyas",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: [
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "API Development",
      "React Development",
      "Next.js Development",
      "Node.js Development",
    ],
    url: "https://thaju.vercel.app",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Thajul Niyas",
    legalName: "Thajul Niyas",
    url: "https://thaju.vercel.app",
    logo: "https://thaju.vercel.app/thaju.png",
    founder: {
      "@type": "Person",
      name: "Thajul Niyas",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7736701050",
      contactType: "Customer Service",
      email: "thajulniyas100@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Malayalam"],
    },
    sameAs: [
      "https://github.com/1thaju",
      "https://linkedin.com/in/thajul-niyas",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thajul Niyas Portfolio",
    alternateName: "Thaju Portfolio",
    url: "https://thaju.vercel.app",
    description:
      "Portfolio website of Thajul Niyas, a freelance full-stack developer based in Wayanad, Kerala, India. Specializing in Next.js, React, Node.js, and modern web technologies.",
    publisher: {
      "@type": "Person",
      name: "Thajul Niyas",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thaju.vercel.app/projects?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thajul Niyas - Freelance Web Developer",
    image: "https://thaju.vercel.app/thaju.png",
    "@id": "https://thaju.vercel.app",
    url: "https://thaju.vercel.app",
    telephone: "+91-7736701050",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wayanad",
      addressLocality: "Wayanad",
      addressRegion: "Kerala",
      postalCode: "673579",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.6854,
      longitude: 76.132,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thaju.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://thaju.vercel.app/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://thaju.vercel.app/projects",
      },
    ],
  };

  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Web Development",
      provider: {
        "@type": "Person",
        name: "Thajul Niyas",
      },
      areaServed: "Worldwide",
      description: "Custom web application development using Next.js and React",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Full Stack Development",
      provider: {
        "@type": "Person",
        name: "Thajul Niyas",
      },
      areaServed: "Worldwide",
      description: "End-to-end full-stack development with Node.js, Express.js, and modern databases",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "API Development",
      provider: {
        "@type": "Person",
        name: "Thajul Niyas",
      },
      areaServed: "Worldwide",
      description: "RESTful API development and integration services",
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased`}
        style={{ "--font-poppins": poppins.style.fontFamily } as React.CSSProperties}
      >
     
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        
 \
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
       
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        {servicesSchema.map((service, index) => (
          <script
            key={`service-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
          />
        ))}

        <ThemeProvider>
          <CursorFog />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
