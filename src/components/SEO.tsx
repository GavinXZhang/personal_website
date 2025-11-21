import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = 'Gavin Zhang - Software Engineer',
  description = 'Software Engineer specializing in web and backend development. Building innovative solutions with modern technologies.',
  keywords = 'software engineer, web development, backend development, React, TypeScript, Python, portfolio',
  ogImage = '/images/Profile.JPG',
  ogType = 'website',
}: SEOProps) {
  const siteUrl = window.location.origin;
  const fullTitle = title.includes('Gavin Zhang') ? title : `${title} | Gavin Zhang`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gavin Zhang" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
