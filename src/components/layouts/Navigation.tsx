import React, {useMemo} from 'react';
import NavList from '../elements/NavList';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import {useAuth} from '../../contexts/auth';

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
    href: '/brands',
    text: 'ブランド一覧',
    icon: <LabelOutlinedIcon />,
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

const AUTH_NAVIGATIONS = [
  {
    href: '/reviews/my-reviews',
    text: '自分のレビュー',
    icon: <ListOutlinedIcon />,
  },
];

const Navigation: React.FC<NavigationProps> = ({
  className = '',
  onItemClick,
}) => {
  const {user} = useAuth();

  const navigations = useMemo(() => {
    if (!user) {
      return NAVIGATIONS;
    }

    return [...NAVIGATIONS, ...AUTH_NAVIGATIONS];
  }, [user]);

  return (
    <nav className={className}>
      <NavList items={navigations} onItemClick={onItemClick} />
    </nav>
  );
};

export default Navigation;
