import React, {useState} from 'react';
import Header from './Header';
import Drawer from './Drawer';
import Main from './Main';
import Footer from './Footer';
import {Grid} from '@material-ui/core';
import Sidebar from './SideBar';
import Head from './Head';
import Content from './Content';

interface SidebarLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  noIndex?: boolean;
  disableContainer?: boolean;
  centerContent?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
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
        <Grid container>
          <Grid item xs={12} md={9}>
            <Main
              centerContent={centerContent}
              disableContainer={disableContainer}
            >
              {children}
            </Main>
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Content>
      <Footer />
    </>
  );
};

export default SidebarLayout;
