import React from 'react';
import {Drawer as MuiDrawer, IconButton} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({open, handleDrawerClose}) => {
  return (
    <MuiDrawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {/* <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
    </MuiDrawer>
  );
};

export default Drawer;
