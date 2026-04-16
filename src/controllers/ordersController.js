import { Order } from '../models/order.js';

export const getOrders = async (req, res) => {
  const { name, page = 1, limit = 5, sortBy, sortOrder } = req.query;
  const skip = (page - 1) * limit;

  const ordersQuery = Order.find();

  if (name) {
    ordersQuery.where('name').regex(new RegExp(name, 'i'));
  }

  const sort = {};
  if (sortBy) {
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
  } else {
    sort.createdAt = -1;
  }

  const [totalOrders, orders] = await Promise.all([
    ordersQuery.clone().countDocuments(),
    ordersQuery.sort(sort).skip(skip).limit(Number(limit)),
  ]);

  res.status(200).json({
    orders,
    total: totalOrders,
    page: Number(page),
    perPage: Number(limit),
    totalPages: Math.ceil(totalOrders / limit),
  });
};
