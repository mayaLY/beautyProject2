import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../controllers/product/productCont';
const router = express.Router();

// Routes
router.get('/get-all-products', getProducts);
router.post('/add-product', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
