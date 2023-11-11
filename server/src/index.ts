import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



