import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Set port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Apply middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Log HTTP requests

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Pharmacy Management System Backend Running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});