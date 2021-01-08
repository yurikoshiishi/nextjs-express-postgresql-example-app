import React from 'react';
import Article from '../components/layouts/Article';
import SidebarLayout from '../components/layouts/SiderbarLayout';

interface attributionsProps {}

const attributions: React.FC<attributionsProps> = ({}) => {
  const title = 'クレジット';

  return (
    <SidebarLayout noIndex title={title} description={title}>
      <Article title={title}>
        <ul>
          <li>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {' '}
              www.flaticon.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/vectors/people">
              People vector created by vectorjuice - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/vectors/food">
              Food vector created by vectorjuice - www.freepik.com
            </a>
          </li>
        </ul>
      </Article>
    </SidebarLayout>
  );
};

export default attributions;
