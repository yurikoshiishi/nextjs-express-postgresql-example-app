import React from 'react';

interface attributionsProps {}

const attributions: React.FC<attributionsProps> = ({}) => {
  return (
    <div>
      Icons made by{' '}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
    </div>
  );
};

export default attributions;
