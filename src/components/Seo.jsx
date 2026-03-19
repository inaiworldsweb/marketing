import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, keywords, noIndex = false, urlSlug }) => {
  const siteUrl = "https://marketing-omega-pink.vercel.app/"; // Apni actual domain yahan replace karein
  const fullUrl = `${siteUrl}${urlSlug}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots Tag (Students page ke liye noindex handling) */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Yahan aap apna preview image path dal sakte hain */}
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;