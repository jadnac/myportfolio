import { education, profile, seoKeywords, siteUrl } from "@/lib/data";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.jobTitle,
    description:
      "Senior Full Stack Developer & Technical Consultant with 10+ years delivering enterprise software, from architecture through production support.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jbeil",
      addressCountry: "LB",
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: seoKeywords,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
