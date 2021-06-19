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

const DEFAULT_TITLE = 'PReview';
const TITLE_SUFFIX = ' | プロテインのレビューが集まるサイト';
const DEFAULT_DESCRIPTION =
  '世の中のマッチョからプロテインのレビューが集まるサイトPReview。あなたに最適なプロテインが必ず見つかります。';

const Head: React.FC<HeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl,
  url,
  noIndex,
}) => {
  const {asPath} = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const metaUrl = url ? url : `${BASE_URL}${asPath || ''}`;
  const metaImage = imageUrl ? imageUrl : `${BASE_URL}/ogp.png`;

  const titleWithSuffix = title + TITLE_SUFFIX;
  const descriptionWithSuffix =
    description.length <= 50 ? description + DEFAULT_DESCRIPTION : description;

  return (
    <NextHead>
      <meta charSet="utf-8" key="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />

      <title>{titleWithSuffix}</title>
      <meta
        name="description"
        content={descriptionWithSuffix}
        key="description"
      />

      <meta property="og:title" content={titleWithSuffix} key="og:title" />
      <meta
        property="og:description"
        content={descriptionWithSuffix}
        key="og:description"
      />
      <meta property="og:url" content={metaUrl} key="og:url" />
      <meta property="og:image" content={metaImage} key="og:image" />
      <meta name="twitter:card" content="summary" key="twitter:card" />
      <meta
        name="twitter:title"
        content={titleWithSuffix}
        key="twitter:title"
      />
      <meta
        name="twitter:description"
        content={descriptionWithSuffix}
        key="twitter:description"
      />
      <meta name="twitter:image" content={metaImage} key="twitter:image" />
      <link rel="canonical" href={metaUrl} key="canonical" />

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        key="apple-touch-icon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon16"
      />
      <link rel="manifest" href="/site.webmanifest" key="manifest" />
      <meta
        name="msapplication-TileColor"
        content="#da532c"
        key="msapplication-TileColor"
      />
      <meta name="theme-color" content="#ffffff" key="theme-color" />

      {noIndex && <meta name="robots" content="noindex" key="noindex" />}
    </NextHead>
  );
};

export default Head;
