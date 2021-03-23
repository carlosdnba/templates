import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

// import './db/connection'; 

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(4000);
console.clear();
console.log('Server rodando.');