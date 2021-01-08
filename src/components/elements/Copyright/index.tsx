import React from 'react';

interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = ({}) => {
  return (
    <div className="Copyright">
      {' '}
      {'Copyright © '}
      PReview {new Date().getFullYear()}
      {'.'}
    </div>
  );
};

export default Copyright;
