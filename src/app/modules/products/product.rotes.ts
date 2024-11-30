import express from 'express';
import { productControllers } from './products.controller';
const router = express.Router();

router.post('/api/products',productControllers.createProduct)


export const productRoutes = router;