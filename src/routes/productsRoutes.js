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
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/products', authenticate);

router.get('/products', celebrate(getProdustsSchema), getProducts);
router.get(
  '/products/:productsId',
  celebrate(productIdParamSchema),
  getProducts,
);

router.post('/products', celebrate(createProductSchema), createProduct);

router.delete(
  '/products/:productId',
  celebrate(productIdParamSchema),
  deleteProduct,
);
router.put(
  '/products/:productId',
  celebrate(updateProductSchema),
  updateProduct,
);

export default router;
