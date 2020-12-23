import React from 'react';
import Link from 'next/link';
import {Link as MuiLink} from '@material-ui/core';

interface TextLinkProps {
  href: string;
}

const TextLink: React.FC<TextLinkProps> = ({href, children}) => {
  return (
    <Link href={href} passHref>
      <MuiLink>{children}</MuiLink>
    </Link>
  );
};

export default TextLink;
