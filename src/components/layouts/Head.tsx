import React from 'react';
import NextHead from 'next/head';
import {useRouter} from 'next/router';

interface HeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  noIndex?: boolean;
}

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://review-protein.com'
    : 'http://localhost';

const DEFAULT_TITLE = 'PReview';
const TITLE_SUFFIX = ' | プロテインのレビューが集まるサイト';
const DEFAULT_DESCRIPTION =
  '世の中のマッチョからプロテインのレビューが集まるサイト、PReview。あなたに最適なプロテインが必ず見つかります。';
const DEFAULT_IMAGE = `${BASE_URL}/ogp.png`;

const Head: React.FC<HeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE,
  url,
  noIndex,
}) => {
  const {asPath} = useRouter();
  const metaUrl = url ? url : `${BASE_URL}${asPath || ''}`;

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
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={titleWithSuffix} />
      <meta name="twitter:description" content={descriptionWithSuffix} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={metaUrl} />

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {noIndex && <meta name="robots" content="noindex" />}
    </NextHead>
  );
};

export default Head;
