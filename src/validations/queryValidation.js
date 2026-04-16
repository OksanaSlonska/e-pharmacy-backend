import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from '../utils/objectIdValidator.js';

export const getOrdersSchema = {
  [Segments.QUERY]: Joi.object({
    name: Joi.string().allow(''),
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(50).default(5),
    sortBy: Joi.string().allow(''),
    sortOrder: Joi.string().valid('asc', 'desc'),
  }),
};

export const getCustomersSchema = {
  [Segments.QUERY]: Joi.object({
    name: Joi.string().allow(''),
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(50).default(5),
  }),
};

export const customerIdSchema = {
  [Segments.PARAMS]: Joi.object({
    customerId: Joi.string().custom(objectIdValidator).required(),
  }),
};
