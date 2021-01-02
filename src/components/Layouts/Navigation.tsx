import React from 'react';
import NavList from '../elements/NavList';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

const NAVIGATIONS = {
  category: [
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
  ],
};

const Navigation: React.FC<NavigationProps> = ({
  className = '',
  onItemClick,
}) => {
  return (
    <nav className={className}>
      <NavList
        subheader="カテゴリ"
        name="category"
        items={NAVIGATIONS.category}
        onItemClick={onItemClick}
      />
    </nav>
  );
};

export default Navigation;
