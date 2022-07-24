import 'dotenv/config'; // Configuration DOTENV
import logger from 'morgan';
import express, { Request, Response } from 'express';
import cluster from 'cluster';
import { cpus } from 'os';

const numCpus = cpus().length;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger('combined'));

if (cluster.isPrimary) {
    for (let i = 0; i < numCpus; i++) cluster.fork();
} else if (cluster.isWorker) {
    app.get('/', (req: Request, res: Response) => {
        res.json({
            msg: 'Welcome API Rest, created by Felipe Fernandes!',
        });
        console.log('cluster ' + cluster.worker.process.pid + ' responded \n');
    });
    app.listen(port, () => console.log(`API is running at port 3000`));
}
