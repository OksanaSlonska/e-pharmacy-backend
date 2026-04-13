import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getProducts = async (req, res) => {
  const { name, category, page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  const productsQuery = Product.find();

  if (name) {
    productsQuery.where('name').regex(new RegExp(name, 'i'));
  }

  if (category) {
    productsQuery.where('category').equals(category);
  }

  const [totalProducts, products] = await Promise.all([
    productsQuery.clone().countDocuments(),
    productsQuery.sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
  ]);

  res.status(200).json({
    products,
    total: totalProducts,
    page: Number(page),
    perPage: Number(limit),
    totalPages: Math.ceil(totalProducts / limit),
  });
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
  });
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOneAndDelete({ _id: productId });
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json(product);
};
