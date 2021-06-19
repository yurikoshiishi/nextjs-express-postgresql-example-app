import express from 'express';
import {createConnection} from 'typeorm';
import cors from 'cors';
import dbConfig from './config/db';
import errorHandler from './middlewares/errorHandler';
import brands from './routes/brands';
import products from './routes/products';
import sitemap from './routes/sitemap';
import search from './routes/search';
import reviews from './routes/reviews';
import pages from './routes/pages';
import auth from './routes/auth';

const PORT = process.env.PORT;

createConnection(dbConfig)
  .then(async (connection) => {
    const app: express.Express = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    if (process.env.NODE_ENV !== 'production') {
      app.use(cors());
    }

    app.use('/api/brands', brands);
    app.use('/api/products', products);
    app.use('/api/sitemap', sitemap);
    app.use('/api/search', search);
    app.use('/api/reviews', reviews);
    app.use('/api/pages', pages);
    app.use('/api/auth', auth);

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Start on port ${PORT}. http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
