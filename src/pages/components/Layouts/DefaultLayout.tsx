import React, {useState} from 'react';
import Head from 'next/head';
import Header from './Header';
import Drawer from './Drawer';
import Main from './Main';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
}

//TODO: set open to true if desktop, false if mobile

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  title = 'プロテインレビュー',
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
