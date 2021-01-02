import React from 'react';
import NavList from '../elements/NavList';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

const NAVIGATIONS = [
  {
    href: '/',
    text: 'ホーム',
    icon: <HomeOutlinedIcon />,
  },
  {
    href: '/categories/top-rated',
    text: '最も評価が高い',
    icon: <ThumbUpOutlinedIcon />,
  },
  {
    href: '/categories/most-reviewed',
    text: '最もレビューが多い',
    icon: <RateReviewOutlinedIcon />,
  },
];

const Navigation: React.FC<NavigationProps> = ({
  className = '',
  onItemClick,
}) => {
  return (
    <nav className={className}>
      <NavList items={NAVIGATIONS} onItemClick={onItemClick} />
    </nav>
  );
};

export default Navigation;
