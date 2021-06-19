import React from 'react';
import {Button, fade, makeStyles} from '@material-ui/core';
import Copyright from '../elements/Copyright';
import Logo from '../elements/Logo';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    '& .Copyright': {
      color: fade(theme.palette.primary.contrastText, 0.85),
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 3),
  },
  links: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  linkItem: {
    marginRight: theme.spacing(2),
  },
}));

interface FooterProps {}

const LINKS = [
  {href: '/', text: 'ホーム'},
  {href: '/legal/end-user-agreement', text: '利用規約'},
  {href: '/legal/privacy-policy', text: 'プライバシーポリシー'},
  {href: '/attributions', text: 'クレジット'},
];

const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.logoContainer}>
        <Logo variant="white" />
      </div>
      <ul className={classes.links}>
        {LINKS.map((l) => (
          <li key={l.href} className={classes.linkItem}>
            <Link href={l.href} passHref>
              <Button color="inherit" variant="text">
                {l.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <Copyright />
    </footer>
  );
};

export default Footer;
