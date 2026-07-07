import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.getpingdesk.com/logo512.png',
  type = 'website',
  // Blog post specific
  articleDate,
  articleCategory,
  // JSON-LD structured data
  jsonLd,
  // Breadcrumbs for mobile SERP display
  breadcrumbs,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="Pingdesk" />
    {type === 'article' && articleDate && (
      <meta property="article:published_time" content={articleDate} />
    )}
    {type === 'article' && articleCategory && (
      <meta property="article:section" content={articleCategory} />
    )}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    {jsonLd && !Array.isArray(jsonLd) && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
    {jsonLd && Array.isArray(jsonLd) && jsonLd.map((ld, i) => (
      <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
    ))}
    {breadcrumbs && breadcrumbs.length > 0 && (
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      })}</script>
    )}
  </Helmet>
);

export default SEO;
