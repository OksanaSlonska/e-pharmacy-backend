import { Schema, model } from 'mongoose';
import { CATEGORIES } from '../constants/products-constants.js';

const productSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: CATEGORIES,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Product = model('Product', productSchema);
