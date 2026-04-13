import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from '../utils/objectIdValidator.js';
import { CATEGORIES } from '../constants/products-constants.js';

export const getProdustsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(10).default(5),
    name: Joi.string().allow(''),
    category: Joi.string()
      .valid(...CATEGORIES)
      .allow(''),
  }),
};

export const productIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createProductSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    category: Joi.string()
      .valid(...CATEGORIES)
      .required(),
    stock: Joi.number().integer().min(0).required(),
    suppliers: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    photo: Joi.string().required(),
  }),
};

export const updateProductSchema = {
  ...productIdParamSchema,
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(50),
    category: Joi.string().valid(...CATEGORIES),
    stock: Joi.number().integer().min(0),
    suppliers: Joi.string(),
    price: Joi.number().min(0.01),
    photo: Joi.string(),
  }).min(1),
};
