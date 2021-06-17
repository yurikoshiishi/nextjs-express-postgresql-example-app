import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactElement;
}

const NavLink: React.FC<NavLinkProps> = ({href, children, ...rest}) => {
  const {asPath} = useRouter();
  const child = React.Children.only(children);
  const childClassName = child.props.className || '';

  const isActive = asPath.split('?')[0] === href;
  const className = isActive ? `${childClassName} active` : childClassName;

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(child, {className})}
    </Link>
  );
};

export default NavLink;
