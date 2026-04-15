import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createSupplierSchema,
  supplierIdParamSchema,
  updateSupplierSchema,
} from '../validations/supplierValidation.js';

import {
  createSupplier,
  getSupplier,
  getSupplierById,
  updateSupplier,
} from '../controllers/suppliersController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/suppliers', authenticate);

router.get('/suppliers', getSupplier);
router.get(
  '/suppliers/:supplierId',
  celebrate(supplierIdParamSchema),
  getSupplierById,
);
router.post('/suppliers', celebrate(createSupplierSchema), createSupplier);
router.put(
  '/suppliers/:supplierId',
  celebrate(updateSupplierSchema),
  updateSupplier,
);

export default router;
