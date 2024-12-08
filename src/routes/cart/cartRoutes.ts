import express from 'express';
import { addToCart, getCart } from '../../controllers/cart/cartCont';
const router = express.Router();


router.post("/add-to-cart", addToCart);
router.get("/:userId", getCart);

export default router;