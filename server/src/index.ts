import express, {Request, Response} from 'express';
import { createConnection } from 'typeorm';
import dbConfig from './config/db';

const PORT = process.env.PORT || 8000;

createConnection(dbConfig).then(async connection => {

    // create express app
   const app: express.Express = express();
   app.use(express.json());
   app.use(express.urlencoded({extended: true}));


  app.listen(PORT, () => {
    console.log(`Start on port ${PORT}.\n http://localhost:${PORT}`);
  });

  app.get('/', (req: Request, res: Response) => {
    res.send('hello');
  });

}).catch(error => console.log("TypeORM connection error: ", error));

