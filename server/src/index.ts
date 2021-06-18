import express from 'express';
import {createConnection} from 'typeorm';
import dbConfig from './config/db';
import errorHandler from './middlewares/errorHandler';
import brands from './routes/brands';
import products from './routes/products';
import sitemap from './routes/sitemap';

const PORT = process.env.PORT;

createConnection(dbConfig)
  .then(async (connection) => {
    const app: express.Express = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api/brands', brands);
    app.use('/api/products', products);
    app.use('/api/sitemap', sitemap);

    app.listen(PORT, () => {
      console.log(`Start on port ${PORT}.\n http://localhost:${PORT}`);
    });

    app.use(errorHandler);
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
