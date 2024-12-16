import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct, populateFromAPI } from '../../controllers/product/productCont';
const router = express.Router();

// Routes
router.get('/get-all-products', getProducts);
router.post('/add-product', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/populate-from-api', populateFromAPI);

export default router;
