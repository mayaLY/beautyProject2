import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../controllers/product/productCont';
const router = express.Router();

// Routes
router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
