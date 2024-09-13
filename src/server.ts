// Import Express and necessary types
import express, { Request, Response } from 'express';

const app = express();
const PORT = 5000;

// Define types for req and res
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
