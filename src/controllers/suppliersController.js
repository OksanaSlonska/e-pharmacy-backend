import { Supplier } from '../models/supplier.js';
import createHttpError from 'http-errors';

export const getSuppliers = async (req, res) => {
  const { name, page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  const suppliersQuery = Supplier.find();

  if (name) {
    suppliersQuery.where('name').regex(new RegExp(name, 'i'));
  }

  const [totalSuppliers, suppliers] = await Promise.all([
    suppliersQuery.clone().countDocuments(),
    suppliersQuery.sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
  ]);

  res.status(200).json({
    suppliers,
    total: totalSuppliers,
    page: Number(page),
    perPage: Number(limit),
    totalPages: Math.ceil(totalSuppliers / limit),
  });
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
