import { Supplier } from '../models/supplier.js';
import createHttpError from 'http-errors';

export const getSupplier = async (req, res) => {
  const suppliers = await Supplier.find();

  res.status(200).json(suppliers);
};

export const getSupplietById = async (req, res) => {
  const { supplierId } = req.params;

  const supplier = await Supplier.findById(supplierId);
  if (!supplier) {
    throw createHttpError(404, 'Supplier not found');
  }
  res.status(200).json(supplier);
};
