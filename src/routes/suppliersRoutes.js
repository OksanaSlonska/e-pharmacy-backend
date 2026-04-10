import { Router } from 'express';

import {
  createSupplier,
  getSupplier,
  getSupplierById,
  updateSupplier,
} from '../controllers/suppliersController.js';

const router = Router();

router.get('/api/suppliers', getSupplier);
router.get('/api/suppliers/:supplierId', getSupplierById);
router.post('/api/suppliers', createSupplier);
router.put('/api/suppliers/:supplierId', updateSupplier);

export default router;
