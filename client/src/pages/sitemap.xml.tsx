import React from 'react';
import {CATEGORIES} from '../constants';
import {fetchSitemapData} from '../utils/api';

type SitemapData = {
  [key: string]: string[];
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const categories = Object.keys(CATEGORIES).map((v) => '/' + v);

const constantPaths = [
  ...categories,
  '/brands',
  '/legal/end-user-agreement',
  '/legal/privacy-policy',
  '/attributions',
];

const createSitemap = (data: SitemapData) => {
  const getPaths = (): string[] => {
    const paths = [];

    for (let key in data) {
      const ids = data[key];
      ids.forEach((id) => {
        const path = `/${key}/${id}`;
        paths.push(path);
      });
    }

    return paths;
  };

  const getUrlNodes = (paths) => {
    return paths
      .map(
        (path) => `
        <url>
            <loc>${BASE_URL}${path}</loc>
        </url>
      `
      )
      .join('\n');
  };

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${BASE_URL}</loc>
        </url>
        ${getUrlNodes([...constantPaths, ...getPaths()])}
    </urlset>
    `;
};

const Sitemap: React.FC = () => {
  return null;
};

export const getServerSideProps = async (ctx) => {
  const {res} = ctx;
  const {data, error} = await fetchSitemapData();

  if (error) {
    res.status(500).end();
    return;
  }

  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(data));
  res.end();
};

export default Sitemap;
