import React, {useState} from 'react';
import Head from 'next/head';
import Header from './Header';
import Drawer from './Drawer';
import Main from './Main';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  noIndex?: boolean;
  disableContainer?: boolean;
  centerContent?: boolean;
}

const DEFAULT_TITLE = 'PReview';
const TITLE_SUFFIX = ' | プロテインのレビューが集まるサイト';
const DEFAULT_DESCRIPTION =
  '世の中のマッチョからプロテインのレビューが集まるサイト、PReview。あなたに最適なプロテインが必ず見つかります。';

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl = '',
  url = '',
  noIndex,
  disableContainer,
  centerContent,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const titleWithSuffix = title + TITLE_SUFFIX;
  const descriptionWithSuffix =
    description.length <= 50 ? description + DEFAULT_DESCRIPTION : description;

  return (
    <>
      <Head>
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
      </Head>

      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main disableContainer={disableContainer} centerContent={centerContent}>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
