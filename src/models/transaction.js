import { Schema, model } from 'mongoose';
import { TRANSACTION_TYPES } from '../constants/transaction-constants.js';

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: TRANSACTION_TYPES,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Transaction = model('Transaction', transactionSchema);
