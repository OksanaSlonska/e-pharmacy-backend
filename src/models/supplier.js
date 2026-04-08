import { Schema, model } from 'mongoose';
import { SUPPLIER_STATUS } from '../constants/supplier-constants.js';

const supplierShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: SUPPLIER_STATUS,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Supplier = model('Supplier', supplierShema);
