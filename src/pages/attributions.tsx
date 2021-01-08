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
      <a href="https://www.freepik.com/vectors/people">
        People vector created by vectorjuice - www.freepik.com
      </a>
      <a href="https://www.freepik.com/vectors/food">
        Food vector created by vectorjuice - www.freepik.com
      </a>
    </div>
  );
};

export default attributions;
