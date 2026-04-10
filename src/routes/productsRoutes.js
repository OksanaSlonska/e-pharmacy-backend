import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProdust,
  updateProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/api/products', getProdust);
router.get('/api/products/:productsId', getProdust);
router.post('/api/products', createProduct);
router.delete('/api/products/:productsId', deleteProduct);
router.put('/api/products/:productsId', updateProduct);

export default router;
