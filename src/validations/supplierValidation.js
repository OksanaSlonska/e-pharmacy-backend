import { Joi, Segments } from 'celebrate';
import { SUPPLIER_STATUS } from '../constants/supplier-constants.js';
import { objectIdValidator } from '../utils/objectIdValidator.js';

export const supplierIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    supplierId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createSupplierSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().required(),
    company: Joi.string().required(),
    deliveryDate: Joi.date().required(),
    amount: Joi.number().min(0).required(),
    status: Joi.string()
      .valid(...SUPPLIER_STATUS)
      .required(),
  }),
};

export const updateSupplierSchema = {
  ...supplierIdParamSchema,
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(30),
    address: Joi.string(),
    company: Joi.string(),
    deliveryDate: Joi.date(),
    amount: Joi.number().min(0),
    status: Joi.string().valid(...SUPPLIER_STATUS),
  }).min(1),
};
