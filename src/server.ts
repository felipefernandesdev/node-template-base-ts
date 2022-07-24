import 'dotenv/config'; // Configuration DOTENV
import logger from 'morgan';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger('combined'));

app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Welcome API Rest, created by Felipe Fernandes!'
  });
});

app.listen(port, () => console.log(`API is running at port 3000`));
