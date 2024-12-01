import express from 'express';
import { productControllers } from './products.controller';
const router = express.Router();

router.post('/api/products',productControllers.createProduct)
router.get('/api/products',productControllers.getAllProducts)
router.get('/api/products/:productId',productControllers.getSingleProducts)
router.put('/api/products/:productId',productControllers.updateProduct)


export const productRoutes = router;