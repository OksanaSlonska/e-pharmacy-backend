import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProdust,
  updateProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProdust);
router.get('/products/:productsId', getProdust);
router.post('/products', createProduct);
router.delete('/products/:productsId', deleteProduct);
router.put('/products/:productsId', updateProduct);

export default router;
