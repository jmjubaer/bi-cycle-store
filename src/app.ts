import express from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/products.routes';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', productRoutes);
app.get('/', (req, res) => {
  res.send('By-cycle store server is running');
});

export default app;
