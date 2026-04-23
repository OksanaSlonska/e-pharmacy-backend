import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import suppliersRoutes from './routes/suppliersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import customersRoutes from './routes/customersRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);

app.use(
  cors({
    origin: (process.env.FRONTEND_URL || 'http://localhost:3000')
      .split(',')
      .map((u) => u.trim()),
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', ordersRoutes);
app.use('/api', suppliersRoutes);
app.use('/api', productsRoutes);
app.use('/api', customersRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
