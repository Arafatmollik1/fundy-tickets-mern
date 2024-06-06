import express from 'express';
import { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

config();

const { connect, connection } = mongoose;
const app = express();

app.use(cors());
app.use(json());

connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});

app.get('/', async (req, res) => {
  try {
    const isConnected = connection.readyState === 1;
    res.json({ connected: isConnected });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err.message);
});

export {};
