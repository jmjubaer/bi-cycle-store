import express from 'express';
import { orderControllers } from './order.controller';
const router = express.Router();

router.post('/api/orders',orderControllers.createOrder);
export const orderRoutes = router;