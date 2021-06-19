import React, {useState} from 'react';
import Header from './Header';
import Drawer from './Drawer';
import Main from './Main';
import Footer from './Footer';
import Head from './Head';
import Content from './Content';

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

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  title,
  description,
  imageUrl,
  url,
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

  return (
    <>
      <Head
        title={title}
        description={description}
        url={url}
        imageUrl={imageUrl}
        noIndex={noIndex}
      />
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Content disableContainer={disableContainer}>
        <Main centerContent={centerContent} disableContainer={disableContainer}>
          {children}
        </Main>
      </Content>
      <Footer />
    </>
  );
};

export default DefaultLayout;
