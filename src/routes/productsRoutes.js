import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createProduct,
  deleteProduct,
  getProdust,
  updateProduct,
} from '../controllers/productsController.js';
import {
  createProductSchema,
  productIdParamSchema,
  updateProductSchema,
} from '../validations/productsValidation.js';

const router = Router();

router.get('/products', getProdust);
router.get(
  '/products/:productsId',
  celebrate(productIdParamSchema),
  getProdust,
);
router.post('/products', celebrate(createProductSchema), createProduct);
router.delete(
  '/products/:productsId',
  celebrate(productIdParamSchema),
  deleteProduct,
);
router.put(
  '/products/:productsId',
  celebrate(updateProductSchema),
  updateProduct,
);

export default router;
