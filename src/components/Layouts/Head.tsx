import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'PReview';
const TITLE_SUFFIX = ' | プロテインのレビューが集まるサイト';
const DEFAULT_DESCRIPTION =
  '世の中のマッチョからプロテインのレビューが集まるサイト、PReview。あなたに最適なプロテインが必ず見つかります。';

const Head: React.FC<HeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl = '',
  url = '',
  noIndex,
}) => {
  const titleWithSuffix = title + TITLE_SUFFIX;
  const descriptionWithSuffix =
    description.length <= 50 ? description + DEFAULT_DESCRIPTION : description;

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>{titleWithSuffix}</title>
      <meta name="description" content={descriptionWithSuffix} />

      <meta property="og:title" content={titleWithSuffix} />
      <meta property="og:description" content={descriptionWithSuffix} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={titleWithSuffix} />
      <meta name="twitter:description" content={descriptionWithSuffix} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />

      {noIndex && <meta name="robots" content="noindex" />}
    </NextHead>
  );
};

export default Head;
