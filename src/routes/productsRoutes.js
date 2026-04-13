import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../controllers/productsController.js';
import {
  createProductSchema,
  getProdustsSchema,
  productIdParamSchema,
  updateProductSchema,
} from '../validations/productsValidation.js';

const router = Router();

router.get('/products', celebrate(getProdustsSchema), getProducts);
router.get(
  '/products/:productsId',
  celebrate(productIdParamSchema),
  getProducts,
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
