export const STORAGE_KEYS = {
  thumbsup: 'preview_thumbsup',
};

export const PROVIDER_TO_NAME = {
  'google.com': 'Google',
  'twitter.com': 'Twitter',
  'facebook.com': 'Facebook',
};

export const CATEGORIES = {
  'top-rated': {
    title: '最も高評価のプロテイン',
    orderBy: 'avg_total_rating',
  },
  'most-reviewed': {
    title: '最もレビューの多いプロテイン',
    orderBy: 'review_count',
  },
};

export const DB_COLUMNS = {
  thumbsup_count: 'thumbsup_count',
  created_at: 'created_at',
  total_rating: 'total_rating',
};
