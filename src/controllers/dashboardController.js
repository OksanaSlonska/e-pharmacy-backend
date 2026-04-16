import { Product } from '../models/product.js';
import { Customer } from '../models/customer.js';
import { Supplier } from '../models/supplier.js';
import { Transaction } from '../models/transaction.js';

export const getDashboard = async (req, res) => {
  // 1. Считаем общее количество всех сущностей
  const [productsCount, suppliersCount, customersCount] = await Promise.all([
    Product.countDocuments(),
    Supplier.countDocuments(),
    Customer.countDocuments(),
  ]);

  // 2. Получаем последних клиентов (например, 5 человек)
  const recentCustomers = await Customer.find()
    .sort({ createdAt: -1 })
    .limit(5);

  // 3. Получаем последние транзакции (доходы и расходы)
  const incomeExpenses = await Transaction.find()
    .sort({ createdAt: -1 })
    .limit(6); // Возьмем последние 6 операций для списка

  res.status(200).json({
    // Возвращаем структуру, которую ожидает фронтенд
    statistics: {
      allProducts: productsCount,
      allSuppliers: suppliersCount,
      allCustomers: customersCount,
    },
    recentCustomers,
    incomeExpenses,
  });
};
