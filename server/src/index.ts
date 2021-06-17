import express, {Request, Response} from 'express';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}.\n http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send("hello");
});
