import { Router } from 'express';

import {
  getSupplier,
  getSupplietById,
} from '../controllers/suppliersController.js';

const router = Router();

router.get('/api/suppliers', getSupplier);

router.get('/api/suppliers/:supplierId', getSupplietById);

export default router;
