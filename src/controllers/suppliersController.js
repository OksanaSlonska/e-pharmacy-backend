import { Supplier } from '../models/supplier.js';
import createHttpError from 'http-errors';

export const getSupplier = async (req, res) => {
  const suppliers = await Supplier.find();

  res.status(200).json(suppliers);
};

export const getSupplierById = async (req, res) => {
  const { supplierId } = req.params;

  const supplier = await Supplier.findById(supplierId);
  if (!supplier) {
    throw createHttpError(404, 'Supplier not found');
  }
  res.status(200).json(supplier);
};

export const createSupplier = async (req, res) => {
  const suppleir = await Supplier.create(req.body);
  res.status(201).json(suppleir);
};

export const updateSupplier = async (req, res) => {
  const { supplierId } = req.params;
  const supplier = await Supplier.findOneAndUpdate(
    { _id: supplierId },
    req.body,
    { new: true },
  );
  if (!supplier) {
    throw createHttpError(404, 'Supplier not found');
  }
  res.status(200).json(supplier);
};
