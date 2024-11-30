import express from 'express';
import { productControllers } from './products.controller';
const router = express.Router();

router.post('/api/products',productControllers.createProduct)
router.get('/api/products',productControllers.getAllProducts)


export const productRoutes = router;