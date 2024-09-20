// Import Express and necessary types
import express, { Request, Response } from 'express';
import pool from './db';

const app = express();
const PORT = 5000;

// Define types for req and res
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/api/test', async (req: Request, res: Response) => {
  try {
    res.send('Hello, PostgreSQL here!');
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
