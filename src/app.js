import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

export default app;
